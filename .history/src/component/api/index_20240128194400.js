import mock from "./mock.json";

const { items } = mock;

export function getMovies(id) {
  return items.find((item) => item.id === id);
}
