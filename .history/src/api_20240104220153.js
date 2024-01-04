const BASE_URL = 'https://learn.codeit.kr/0633';

export async function getReviews({order = 'createAt', offset = 0, limit = 6}){
    const query = `order=${order}&offset=${offset}&limit=${limit}`
    const response = await fetch(`${BASE_URL}/film-reviews?${query}`)
    if (!response.ok){
        throw new Error('리뷰를 불러오는데 실패했습니다.');
    }
    const body = await response.json();
    return body;
}