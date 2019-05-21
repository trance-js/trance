import { Controller, Param, Get } from '@nestjs/common';
import { TemplateService } from './template.service';
import { Template } from './template.entity';

@Controller()
export class TemplateController {
  constructor(private readonly templateService: TemplateService) { }

  @Get()
  hello(): Promise<string> {
    return Promise.resolve('Hello World!');
  }

  @Get('/:id')
  getOne(@Param('id') id): Promise<Template> {
    return this.templateService.getOne(1);
  }

}
