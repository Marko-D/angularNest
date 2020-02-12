import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ContactsModule,       
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    database: 'test',
    username: 'root',
    password: 'root',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }), AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
