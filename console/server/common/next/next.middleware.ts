import { NestMiddleware, Injectable, Inject, Logger } from '@nestjs/common';
import { Server as NextServer } from 'next';
import { NextRequest, NextResponse } from './next.core';
import { ConfigService, InjectConfig } from 'nestjs-config';
import * as url from 'url';

/**
 * Integrate with next js.
 */
@Injectable()
export class NextMiddleware implements NestMiddleware<NextRequest, NextResponse> {
  private logger: Logger;
  private routes;

  constructor(
    @Inject('NextServer') private nextServer: NextServer,
    @InjectConfig() private readonly config: ConfigService,
  ) {
    this.logger = new Logger(NextMiddleware.name);
    this.routes = config.get('config.__CORE__.routes');
  }

  use(req: NextRequest, res: NextResponse, next: () => void) {
    res.nextRender = this.nextServer.render.bind(this.nextServer, req, res);
    res.nextRequestHandler = this.nextServer.getRequestHandler().bind(this.nextServer);
    if (req.originalUrl.startsWith('/api')
      || req.originalUrl.startsWith('/_next')
      || req.originalUrl.startsWith('/static')
    ) {
      next();
    }
    // tslint:disable
    // Next render react components
    else {
      const path = url.parse(req.originalUrl);
      this.logger.debug(`Request path is [${path.href}]`);
      const {route, query, parsedUrl} = this.routes.match(path.pathname);
      if (route) {
        res.nextRender(route.page, query);
      } else {
        res.nextRequestHandler(req, res, parsedUrl);
      }
    }
  }
}
