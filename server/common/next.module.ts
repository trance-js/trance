import { NestModule, Module, MiddlewareConsumer, DynamicModule } from '@nestjs/common';
import * as Next from 'next';
import { Server as NextServer, ServerOptions as NextServerOptions } from 'next';
import { NextMiddleware } from './next/next.middleware';
import { FactoryProvider } from '@nestjs/common/interfaces';
import { NextController } from './next/next.controller';

@Module({ })
export class NextModule implements NestModule {

  /**
   * Add next middleware
   *
   * @param consumer MiddlewareConsumer
   */
  configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer.apply(NextMiddleware).forRoutes('*');
  }

  /**
   * Api for create Next Module
   *
   * @param options next server options
   */
  static forRoot(options: NextServerOptions): DynamicModule {
    const nextServer = this.createNextServer(options);
    return {
      module: NextModule,
      controllers: [NextController],
      providers: [nextServer],
      exports: [nextServer],
    };
  }

  private static createNextServer(options: NextServerOptions): FactoryProvider<Promise<NextServer>> {
    return {
      provide: 'NextServer',
      useFactory: async () => {
        const nextServer = Next(options);
        await nextServer.prepare();
        return nextServer;
      },
    };
  }
}
