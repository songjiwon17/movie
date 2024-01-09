export async function getMovies(order = 'createdAt'){
    const query = `order=${order}`;
    const response = await fetch(`https://learn.codeit.kr/0633/film-reviews?${query}`);
    const body = await response.json();
    return body;
}