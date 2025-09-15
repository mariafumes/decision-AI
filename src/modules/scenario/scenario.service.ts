/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-cases';
import { ListScenarioRepository } from './repository/list-scenario-repository';
import { findOneScenarioRepository } from './repository';
import { DeleteScenarioUseCase, UpdateScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioRepository,
    private readonly findoneScenarioUseCase: findOneScenarioRepository,
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase
  ) {}
  
  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.list();
  }

  findOne(id: string) {
    return this.findoneScenarioUseCase.findOne(id);
  }

  update(id: string, data: UpdateScenarioDto) {

    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}
