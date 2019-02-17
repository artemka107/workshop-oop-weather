import Service from './Service';

class Weather {
  constructor(service) {
    this.service = service || new Service();
  }

  async getInfoBy(cityName) {
    const result = await this.service.getInfoBy(cityName);
    return result;
  }
}

export default Weather;
