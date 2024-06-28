import axios from 'axios';
import { toast } from 'react-toastify';

const fetchWeather = async (city, setWeather, setError) => {
  let toastShown = false;

  try {
    const response = await axios.get(`/weather/${city}`);
    setWeather(response.data);
    setError(null);
  } catch (err) {
    const errorMessage = 'Błędna nazwa lub błąd połączenia z API';
    setError(err.response?.data?.error || errorMessage);
    
    if (!toastShown) {
      toast.error(errorMessage);
      toastShown = true; 
    }
    
    setWeather(null);
  }
};

export default fetchWeather;
