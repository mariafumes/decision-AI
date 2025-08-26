/* eslint-disable prettier/prettier */
import { Logger } from "@nestjs/common/services/logger.service";
import { Global, Module } from "@nestjs/common"
import { PrismaService } from "./databases/prisma.database";



@Global()
@Module({
    imports: [],
    providers: [PrismaService, Logger],
    exports: [PrismaService]
    ,
})
export class SharedModule {}