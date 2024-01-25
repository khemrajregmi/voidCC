// sales.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto } from '../dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
  ) {}

  async getAllSales(): Promise<Sale[]> {
    return this.salesRepository.find();
  }

  async createSale(createSaleDto: CreateSaleDto): Promise<Sale> {
    const newSale = this.salesRepository.create(createSaleDto);
    return this.salesRepository.save(newSale);
  }
}
