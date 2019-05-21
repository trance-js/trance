import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudTypeOrmService } from '../common/crud/crud-typeorm.service';
import { Template } from './template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemplateService extends CrudTypeOrmService<Template> {
  constructor(@InjectRepository(Template) protected readonly repository) {
    super(repository);
  }
}
