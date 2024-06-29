import axios from 'axios';
import { toast } from 'react-toastify';

const errorToastShown = new Set();

const fetchWeather = async (city, setWeather, setError) => {
  try {
    const response = await axios.get(`/weather/${city}`);

    if (response.status === 403) {
      const errorMessage = 'Błąd połączenia z API';
      setError(errorMessage);

      if (!errorToastShown.has(errorMessage)) {
        toast.error(errorMessage);
        errorToastShown.add(errorMessage);
      }

      setWeather(null);
      return { success: false };
    }

    setWeather(response.data);
    setError(null);
    return { success: true };
  } catch (err) {
    let errorMessage = 'Błąd połączenia z API';

    if (err.response) {
      if (err.response.status === 404) {
        errorMessage = 'Wprowadź prawidłową nazwę miejscowości';
        toast.error(errorMessage)
      } else {
        errorMessage = err.response.data.error || errorMessage;
      }
    }

    setError(errorMessage);

    if (errorMessage === 'Błąd połączenia z API' && errorToastShown.size === 0) {
      toast.error(errorMessage);
      errorToastShown.add(errorMessage);
    }

    setWeather(null);
    return { success: false };
  }
};

export default fetchWeather;
