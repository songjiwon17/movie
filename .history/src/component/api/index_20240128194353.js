import mock from "./mock.json";

const { items } = mock;

export function getCourseBySlug(id) {
  return items.find((item) => item.id === id);
}
