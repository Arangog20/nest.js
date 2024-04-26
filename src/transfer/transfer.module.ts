import { Module } from '@nestjs/common';
import { TransferController } from './controllers/transfer.controller';
import { TransferService } from './services/transfer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { bank, bankSchema} from './entity/transfer.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{
      name: bank.name,
      schema: bankSchema
    }])
  ],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
