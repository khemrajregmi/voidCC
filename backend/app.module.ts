// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesModule } from '../backend/src/sales/sales.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your TypeORM configuration
    }),
    SalesModule,
  ],
})
export class AppModule {}
