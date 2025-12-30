<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Club des Dirigeants des Associations Maroc - CDDAM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @stack('styles')
</head>
<body>
    <noscript>Vous devez activer JavaScript pour utiliser cette application.</noscript>
    <div id="app">
        <div style="padding: 20px; text-align: center;">
            <p>Chargement de l'application...</p>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Debug: Check if Vite scripts are loaded
        window.addEventListener('DOMContentLoaded', function() {
            console.log('=== DEBUG: Checking Vite scripts ===');
            const viteScripts = document.querySelectorAll('script[type="module"]');
            console.log('Vite module scripts found:', viteScripts.length);
            viteScripts.forEach((script, index) => {
                console.log(`Script ${index + 1}:`, script.src || script.innerHTML.substring(0, 100));
            });
            
            const allScripts = document.querySelectorAll('script');
            console.log('Total scripts on page:', allScripts.length);
            
            // Check if Vite scripts are present
            if (viteScripts.length === 0) {
                console.error('No Vite module scripts found!');
                const appDiv = document.getElementById('app');
                if (appDiv && !appDiv.querySelector('.react-app-loaded')) {
                    appDiv.innerHTML = '<div style="padding: 20px; color: red; font-size: 16px;"><h2>Erreur: React n\'est pas chargé</h2><p>Vérifiez la console pour plus de détails.</p><p>Assurez-vous que le serveur Vite est en cours d\'exécution: <code>npm run dev</code></p></div>';
                }
            }
            
            // Check after a delay if app has rendered (check for React app content)
            setTimeout(function() {
                    const appDiv = document.getElementById('app');
                    if (appDiv) {
                    // Check if app content is still the loading message (meaning React didn't render)
                    const loadingMsg = appDiv.querySelector('p');
                    if (loadingMsg && loadingMsg.textContent === 'Chargement de l\'application...' && !appDiv.querySelector('.react-app-loaded')) {
                        console.error('React app did not render after 5 seconds');
                        // Only show error if no Vite scripts were found
                        if (viteScripts.length === 0) {
                        appDiv.innerHTML = '<div style="padding: 20px; color: red; font-size: 16px;"><h2>Erreur: React n\'est pas chargé</h2><p>Vérifiez la console pour plus de détails.</p><p>Assurez-vous que le serveur Vite est en cours d\'exécution: <code>npm run dev</code></p></div>';
                        }
                    }
                }
            }, 5000);
        });
    </script>
    @stack('scripts')
</body>
</html>
