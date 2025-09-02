/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";

import { ListScenarioRepository } from "../repository/list-scenario-repository";


@Injectable()
export class ListScenarioUseCase {
    constructor ( 
        private readonly createScenarioRepository: ListScenarioRepository, 
        private readonly logger: Logger, 
    ) {}

    async execute() {
        try {
            const scenario = await this.createScenarioRepository.list();
            return scenario;
        } catch (error) {
            this.logger.error('Error creating scenario', error);
            throw error;

        }
    }
}