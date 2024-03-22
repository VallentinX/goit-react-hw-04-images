import axios from 'axios';

const apiKey = '43003170-b235438a93d75f8009b8dd91f';
const baseUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

const getImgs = async function (query, page) {
  try {
    const response = await axios.get(`${baseUrl}&q=${query}&page=${page}`);

    const data = await response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      alt: String(image.tags),
    }));

    if (!data) throw new Error(`${data.message} 🔴`);

    return data;
  } catch (error) {
    throw error;
  }
};

export { getImgs };
