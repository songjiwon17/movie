export async function getMovies(){
    const response = await fetch(`https://learn.codeit.kr/0633/film-reviews?`);
    const body = await response.json();
    return body;
}