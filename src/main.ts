import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';
import { Logger } from '@nestjs/common';

const PORT = process.env.PORT || 3500

const httpsOptions = {
  key: fs.readFileSync('./src/secrets/private.key'),
  cert: fs.readFileSync('./src/secrets/certificate.crt'),
  ca: [
    fs.readFileSync('./src/secrets/ca_bundle.crt')
  ]
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // httpsOptions
  });
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.enableCors();
  await app.listen(PORT);
  Logger.log(`Listening on http://localhost:${PORT}`);
}
bootstrap();
