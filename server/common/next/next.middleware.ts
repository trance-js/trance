import { NestMiddleware, Injectable, Inject, Logger } from '@nestjs/common';
import { Server as NextServer } from 'next';
import { NextRequest, NextResponse } from './next.core';

/**
 * Integrate with next js.
 */
@Injectable()
export class NextMiddleware implements NestMiddleware<NextRequest, NextResponse> {
  constructor(@Inject('NextServer') private nextServer: NextServer) {}

  private logger: Logger = new Logger(NextMiddleware.name);

  async use(req: NextRequest, res: NextResponse, next: () => void) {
    this.logger.log(req.baseUrl);
    // if (req.baseUrl && (req.baseUrl.startsWith('/_next') || req.baseUrl.startsWith('/static'))) {
    //   const end = res.end.bind(res);
    //   let chunks;
    //   // @ts-ignore
    //   res.end = (body) => {
    //     chunks = body;
    //     end.apply(res, arguments);
    //   };
    //   await this.nextServer.getRequestHandler().bind(this.nextServer)(req, res);
    //   res.send(chunks);
    // } else {
    res.nextRender = this.nextServer.render.bind(this.nextServer, req, res);
    res.nextRequestHandler = this.nextServer.getRequestHandler().bind(this.nextServer);
    next();
    // }
  }
}
