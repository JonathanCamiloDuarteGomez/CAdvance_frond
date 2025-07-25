
//const baseURL = 'http://localhost:8080';
const baseURL = 'http://18.230.23.222';

export default function getDatos(endpoint) {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        });
}
