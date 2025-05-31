import { DataSource, DataSourceOptions } from 'typeorm';
import { UserEntity } from '../modules/users/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-shop',
  entities: [UserEntity],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
