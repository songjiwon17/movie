const BASE_URL = 'https://learn.codeit.kr/0633';
export async function getMovies({order = 'createdAt', offset = 0, limit = 10}){
    const query = `order=${order}&offset=${offset}&limit=${limit}`;
    const response = await fetch(`${BASE_URL}/film-reviews?${query}`);
    const body = await response.json();
    return body;
}