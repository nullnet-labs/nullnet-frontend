const API_URL = process.env.API_URL;

export default async function httpRequest<T>(
    path: string,
    init?:RequestInit
): Promise<T> {
    if (!API_URL) {
        throw new Error('API_URL environment variable missing; put this in the appropriate .env file before running API calls!');
    }

    const response = await fetch(`${API_URL}${path}`, {
        // for instance, { method: 'POST', cache: 'no-store', credentials: 'include', headers: { ... }, next: { ... } }
        ...init
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}
