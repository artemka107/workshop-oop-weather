#!/usr/bin/env node

import program from 'commander';
import Weather from '..';
import Service from '../Service';

program
  .version('0.0.1')
  .arguments('<cityName>')
  .option('-s, --service [serviceName]', 'Chooses the service name')
  .description('enter an ip address')
  .action(async (cityName, cmd) => {
    const service = new Service({ serviceType: cmd.service });
    const weather = new Weather(service);
    const result = await weather.getInfoBy(cityName);
    console.log(result);
  })
  .parse(process.argv);
