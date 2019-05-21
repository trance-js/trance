import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { DBModule } from './common/db.module';
import { TemplateModule } from './console/template.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config.{ts,js}')),
    DBModule,
    TemplateModule,
  ],
})
export class AppModule {}
