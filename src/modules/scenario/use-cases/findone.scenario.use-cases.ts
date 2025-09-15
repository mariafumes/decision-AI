/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { findOneScenarioRepository } from "../repository/findone.scenario.repository";


@Injectable()
export class findOneScenarioUseCases {
    constructor(private readonly createScenarioRepository: findOneScenarioRepository, 
    private readonly logger: Logger) {}
async execute(id:string){
    try {
        const scenario = await this.createScenarioRepository.findOne(id);
        return scenario;
    } catch (error) {
        this.logger.error('Error creating scenario', error);
        throw error;
    }
}



}