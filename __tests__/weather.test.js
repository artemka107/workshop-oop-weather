import Weather from '../src';
import Service from '../src/Service';

describe('should run the different services by param', () => {
  test('weather test', async () => {
    const metaweatherBaseURL = 'https://www.metaweather.com/api/location/';
    const cityName = 'Minsk';
    const searchUrl = `search/?query=${cityName}`;
    const searchByWoeidUrl = '1';
    const config = {
      baseURL: metaweatherBaseURL,
    };

    const httpModule = {
      get: jest.fn()
        .mockResolvedValueOnce({ data: [{ woeid: 1 }] })
        .mockResolvedValueOnce({ data: { city: cityName } }),
    };

    const service = new Service({ serviceType: 'metaweather', httpModule });
    const weather = new Weather(service);

    const result = await weather.getInfoBy(cityName);
    expect(httpModule.get).toHaveBeenCalledWith(searchUrl, config);
    expect(httpModule.get).toHaveBeenCalledWith(searchByWoeidUrl, config);
    expect(result.city).toBe(cityName);
  });
});
