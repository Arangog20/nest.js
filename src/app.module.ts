import { Module } from '@nestjs/common';
import { TransferController } from './transfer/controllers/transfer.controller';
import { TransferService } from './transfer/services/transfer.service';
import { TransferModule } from './transfer/transfer.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './persistence/db.config';
import { PersistenceModule } from './persistence/persistence.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
    TransferModule,

  ],
  controllers: [TransferController],
  providers: [

    TransferService,
  ],
})
export class AppModule {}
