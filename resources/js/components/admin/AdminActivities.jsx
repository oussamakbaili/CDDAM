import React, { useEffect, useState } from 'react';
import axios from 'axios';

function emptyForm() {
    return {
        id: null,
        title: '',
        slug: '',
        category: '',
        description: '',
        primary_stat_label: '',
        primary_stat_value: '',
        secondary_stat_label: '',
        secondary_stat_value: '',
        icon: '',
        order: 0,
        is_active: true,
        features_text: '',
    };
}

function AdminActivities() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState(emptyForm());

    const loadActivities = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('/api/admin/activities');
            const data = response.data || [];
            setActivities(data);
        } catch (err) {
            setError("Impossible de charger les activités. Vérifiez l'API.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadActivities();
    }, []);

    const handleEdit = (activity) => {
        setForm({
            id: activity.id,
            title: activity.title || '',
            slug: activity.slug || '',
            category: activity.category || '',
            description: activity.description || '',
            primary_stat_label: activity.primary_stat_label || '',
            primary_stat_value: activity.primary_stat_value || '',
            secondary_stat_label: activity.secondary_stat_label || '',
            secondary_stat_value: activity.secondary_stat_value || '',
            icon: activity.icon || '',
            order: activity.order || 0,
            is_active: activity.is_active ?? true,
            features_text: Array.isArray(activity.features) ? activity.features.join('\n') : '',
        });
    };

    const handleDelete = async (activity) => {
        if (!window.confirm(`Supprimer l'activité "${activity.title}" ?`)) {
            return;
        }
        try {
            await axios.delete(`/api/admin/activities/${activity.id}`);
            await loadActivities();
        } catch (err) {
            alert("Erreur lors de la suppression de l'activité.");
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError('');

        const payload = {
            title: form.title,
            slug: form.slug || undefined,
            category: form.category || undefined,
            description: form.description || undefined,
            primary_stat_label: form.primary_stat_label || undefined,
            primary_stat_value: form.primary_stat_value || undefined,
            secondary_stat_label: form.secondary_stat_label || undefined,
            secondary_stat_value: form.secondary_stat_value || undefined,
            icon: form.icon || undefined,
            order: Number(form.order) || 0,
            is_active: !!form.is_active,
            features: form.features_text
                ? form.features_text
                      .split('\n')
                      .map((f) => f.trim())
                      .filter(Boolean)
                : [],
        };

        try {
            if (form.id) {
                await axios.put(`/api/admin/activities/${form.id}`, payload);
            } else {
                await axios.post('/api/admin/activities', payload);
            }
            setForm(emptyForm());
            await loadActivities();
        } catch (err) {
            const message =
                err.response?.data?.message ||
                "Erreur lors de l'enregistrement. Vérifiez les champs obligatoires.";
            setError(message);
        } finally {
            setSaving(false);
        }
    };

    const handleCancelEdit = () => {
        setForm(emptyForm());
    };

    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="mb-1">Gestion des Activités</h2>
                    <p className="text-muted mb-0">
                        Créez et mettez à jour les activités affichées sur la page publique « Nos Activités ». Chaque
                        activité peut avoir des statistiques et une liste d&apos;avantages.
                    </p>
                </div>
            </div>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <div className="row">
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm admin-form-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-primary">
                                {form.id ? 'Modifier une activité' : 'Nouvelle activité'}
                            </h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Titre *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Slug</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="slug"
                                        value={form.slug}
                                        onChange={handleChange}
                                        placeholder="laisser vide pour générer automatiquement"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Catégorie</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        rows="3"
                                        value={form.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Stat principale (label)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="primary_stat_label"
                                            value={form.primary_stat_label}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Stat principale (valeur)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="primary_stat_value"
                                            value={form.primary_stat_value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Stat secondaire (label)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="secondary_stat_label"
                                            value={form.secondary_stat_label}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Stat secondaire (valeur)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="secondary_stat_value"
                                            value={form.secondary_stat_value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Icône Font Awesome (ex: chalkboard-teacher)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="icon"
                                        value={form.icon}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Avantages (un par ligne, affichés en liste sur la page publique)
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="features_text"
                                        rows="4"
                                        value={form.features_text}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Ordre d&apos;affichage</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="order"
                                            value={form.order}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center mt-3 mt-md-0">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="is_active"
                                                id="activity-is-active"
                                                checked={form.is_active}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="activity-is-active">
                                                Activité active (affichée sur le site)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary" disabled={saving}>
                                        {saving ? 'Enregistrement...' : form.id ? 'Mettre à jour' : 'Créer'}
                                    </button>
                                    {form.id && (
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={handleCancelEdit}
                                            disabled={saving}
                                        >
                                            Annuler la modification
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card shadow-sm admin-list-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Liste des activités</h5>
                            {loading ? (
                                <p>Chargement...</p>
                            ) : activities.length === 0 ? (
                                <p className="text-muted mb-0">Aucune activité pour le moment.</p>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-sm align-middle">
                                        <thead>
                                            <tr>
                                                <th>Ordre</th>
                                                <th>Titre</th>
                                                <th>Catégorie</th>
                                                <th>Stat principale</th>
                                                <th>Active</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {activities.map((activity) => (
                                                <tr key={activity.id}>
                                                    <td>{activity.order}</td>
                                                    <td>{activity.title}</td>
                                                    <td>{activity.category}</td>
                                                    <td>
                                                        {activity.primary_stat_label && activity.primary_stat_value
                                                            ? `${activity.primary_stat_label} : ${activity.primary_stat_value}`
                                                            : '-'}
                                                    </td>
                                                    <td>{activity.is_active ? 'Oui' : 'Non'}</td>
                                                    <td className="text-end">
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-primary me-2"
                                                            onClick={() => handleEdit(activity)}
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDelete(activity)}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminActivities;


