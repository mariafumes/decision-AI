/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { DeleteOptionRepository } from '../repository/delete-option.repository';

@Injectable()
export class DeleteOptionUseCase {
    constructor(
        private readonly deleteOptionRepository: DeleteOptionRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id:string) {
        try {
            const option = await this.deleteOptionRepository.delete(id);
            this.logger.log("Scenario deleted successfully");
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}