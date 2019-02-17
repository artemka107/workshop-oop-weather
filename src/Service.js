import _ from 'lodash';
import MetaWeatherService from './MetaWeatherService';

const services = {
  metaweather: MetaWeatherService,
};

class Service {
  constructor({ serviceType, httpModule, customServices }) {
    const CurrentService = _.get(_.merge(services, customServices), serviceType, services.metaweather);
    this.service = new CurrentService({ httpModule });
  }

  async getInfoBy(cityName) {
    const result = await this.service.getInfoBy(cityName);
    return result;
  }
}

export default Service;
