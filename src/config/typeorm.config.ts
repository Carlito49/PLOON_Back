import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3600,
    username: 'root',
    password: 'root',
    database: 'ploon',
    entities: [
        `dist/**/**/*.entity{.ts,.js}`,
    ],
    synchronize: true
}



