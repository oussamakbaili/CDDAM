import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const isAuthenticated = !!token;

    useEffect(() => {
        const storedToken = localStorage.getItem('cdda_admin_token');
        const storedUser = localStorage.getItem('cdda_admin_user');

        if (storedToken) {
            setToken(storedToken);
            axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
        }

        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                setUser(null);
            }
        }
    }, []);

    const login = async (email, password) => {
        const response = await axios.post('/api/admin/login', { email, password });
        const { token: apiToken, user: apiUser } = response.data;

        setToken(apiToken);
        setUser(apiUser);
        localStorage.setItem('cdda_admin_token', apiToken);
        localStorage.setItem('cdda_admin_user', JSON.stringify(apiUser));
        axios.defaults.headers.common.Authorization = `Bearer ${apiToken}`;
    };

    const logout = async () => {
        try {
            await axios.post('/api/admin/logout');
        } catch (e) {
            // ignore error
        }

        setToken(null);
        setUser(null);
        localStorage.removeItem('cdda_admin_token');
        localStorage.removeItem('cdda_admin_user');
        delete axios.defaults.headers.common.Authorization;
    };

    return (
        <AdminAuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth() {
    return useContext(AdminAuthContext);
}


