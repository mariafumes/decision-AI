/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { DeleteScenarioRepository } from "../repository";


@Injectable()
export class DeleteScenarioUseCase {
    constructor (private readonly createScenarioRepository: DeleteScenarioRepository,
    private readonly logger: Logger) {}
  async execute(id:string){
        try {
            const scenario = await this.createScenarioRepository.Delete(id);
            return scenario;
        } catch (error) {
            this.logger.error('Error creating scenario', error);
            throw error;
        }
    }
}