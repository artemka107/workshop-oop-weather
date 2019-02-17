import querystring from 'querystring';
import axios from 'axios';

const metaweatherBaseURL = 'https://www.metaweather.com/api/location/';
const config = {
  baseURL: metaweatherBaseURL,
};

class MetaWeatherService {
  constructor({ httpModule = axios }) {
    this.httpModule = httpModule;
  }

  async getInfoBy(cityName) {
    const query = querystring.stringify({ query: cityName});
    const { data } = await this.httpModule.get(`search/?${query}`, config);
    const [city] = data;
    if (city) {
      const { woeid } = city;
      const { data } = await this.httpModule.get(`${woeid}`, config);
      return data;
    }
    throw new Error('Can not find city with current name');
  }
}

export default MetaWeatherService;
