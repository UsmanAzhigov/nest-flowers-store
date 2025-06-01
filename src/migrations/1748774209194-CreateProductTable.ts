import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductTable1748774209194 implements MigrationInterface {
    name = 'CreateProductTable1748774209194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "image" character varying NOT NULL, "category" character varying NOT NULL, "color" character varying NOT NULL, "size" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
