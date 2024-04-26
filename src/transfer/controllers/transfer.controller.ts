import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { CreateBankDto } from '../DTOs/transfer.dto';
import { bank } from '../entity/transfer.entity';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get()
  findAll(): bank[] {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): bank {
    return this.transferService.findOne(+id);
  }

  @Post()
  create(@Body() transfer: CreateBankDto): bank {
    return this.transferService.create(transfer);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() transfer: CreateBankDto): bank {
    return this.transferService.update(+id, transfer);
  }

  @Delete(':id')
  remove(@Param('id') id: number): bank {
    return this.transferService.remove(+id);
  }
}
