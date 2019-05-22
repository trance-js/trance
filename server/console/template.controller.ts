import { Controller, Param, Get, Res } from '@nestjs/common';
import { TemplateService } from './template.service';
import { Template } from './template.entity';
import { NextResponse } from 'server/common/next/next.core';

@Controller()
export class TemplateController {
  constructor(private readonly templateService: TemplateService) { }

  @Get('/')
  hello(@Res() res: NextResponse) {
    res.nextRender('/index');
  }

  @Get('/template')
  getOne(): Promise<Template> {
    return this.templateService.getOne(1);
  }

}
