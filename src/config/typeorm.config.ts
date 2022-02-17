import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3000,
    username: 'root',
    password: 'root',
    database: '',
    entities: [
        __dirname + '/../**/*.entity{.ts, .js}',
    ],
    synchronize: true
}


