import api from "./api";

const fetchArticles = () => {
  return api.get('/articles')
}

export {
  fetchArticles
}