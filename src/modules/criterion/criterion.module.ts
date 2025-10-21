/* eslint-disable prettier/prettier */
import { Logger, Module } from '@nestjs/common';
import { CriterionService } from './criterion.service';
import { CriterionController } from './criterion.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { sharedModule } from 'src/shared/shared.module';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [sharedModule],
  controllers: [CriterionController],
  providers: [CriterionService, ...useCases, ...repositories, Logger],
})
export class CriterionModule { }