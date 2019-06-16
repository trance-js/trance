import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextResponse, NextRequest } from './next.core';

/**
 * Next internal url
 *
 * @see https://github.com/zeit/next.js/blob/master/packages/next-server/server/next-server.ts#L153
 * @see https://github.com/zeit/next.js/blob/master/packages/next-server/server/utils.ts
 */
@Controller()
export class NextController {

  @Get('/_next/*')
  nextHandler(@Req() req: NextRequest, @Res() res: NextResponse) {
    return res.nextRequestHandler(req, res);
  }

  @Get('/static/*')
  staticHandler(@Req() req: NextRequest, @Res() res: NextResponse) {
    return res.nextRequestHandler(req, res);
  }

}
