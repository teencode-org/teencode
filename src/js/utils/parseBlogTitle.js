export const parseBlogTitle = (string) => {
  return string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '-').toLowerCase();
}