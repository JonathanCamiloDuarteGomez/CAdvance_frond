
//const baseURL = 'http://localhost:8080';
const baseURL = 'http://peliculas-back-api-env.eba-p4yk7g9c.sa-east-1.elasticbeanstalk.com';

export default function getDatos(endpoint) {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        });
}
