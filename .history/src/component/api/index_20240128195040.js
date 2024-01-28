import mock from "./mock.json";

const { items } = mock;

export function getMovie(id) {
  return items.find((item) => item.id === id);
}
