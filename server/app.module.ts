import { Module } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { DBModule } from './common/db.module';
import { TemplateModule } from './console/template.module';
import * as path from 'path';
import { NextModule } from './common/next.module';

const dev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config.{ts,js}')),
    NextModule.forRoot({ dev, dir: './src' }),
    DBModule,
    TemplateModule,
  ],
})
export class AppModule { }
