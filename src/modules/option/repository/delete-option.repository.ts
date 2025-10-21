/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class DeleteOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async delete(id:string) {
        const option = await this.prisma.option.delete({ where: { id } });
        return option;
    }
}