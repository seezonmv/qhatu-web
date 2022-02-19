import axios from 'axios';

const getCharacters = async () => {
  const apiUrl = process.env.REACT_APP_API_RICK_AND_MORTY;
  const responseCharacters = await axios.get(apiUrl);
  const dataCharacters = responseCharacters.data.results;
  return dataCharacters;
};

const RickAndMortyService = {
  getCharacters,
};

export default RickAndMortyService;
