import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextResponse, NextRequest } from './next.core';

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