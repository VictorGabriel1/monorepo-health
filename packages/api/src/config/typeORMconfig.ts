import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'health-dev',
  password: 'healthpass2024',
  database: 'health',
  entities: [__dirname + '/**/entity/*.entity.{ts,js}'],
  synchronize: true,
};
