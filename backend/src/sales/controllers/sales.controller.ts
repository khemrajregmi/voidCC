// sales.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalesService } from '../services/sales.service';
import { CreateSaleDto } from '../dto/create-sale.dto';

@Controller('api/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getAllSales(): Promise<Sale[]> {
    return this.salesService.getAllSales();
  }

  @Post()
  async createSale(@Body() createSaleDto: CreateSaleDto): Promise<Sale> {
    return this.salesService.createSale(createSaleDto);
  }
}
