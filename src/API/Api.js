import axios from "axios";

export const getImages = async (name, page) => {
  const API_KEY = "23294543-72cf202e86e11bc05e525db7a";
  const URL = "https://pixabay.com/api";

  const res = await axios.get(
    `${URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return res.data.hits;
};
// console.log(getImages());
