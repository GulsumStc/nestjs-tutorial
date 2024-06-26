import { Logger } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1719327479747 implements MigrationInterface {
    private readonly logger = new Logger($npmConfigName1719327479747.name);

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`IPDATE item SET public = 1`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.logger.log(`down: nothing to do`);
    }

}
