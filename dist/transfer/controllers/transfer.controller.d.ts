import { TransferService } from '../services/transfer.service';
import { CreateBankDto } from '../DTOs/transfer.dto';
import { bank } from '../entity/transfer.entity';
export declare class TransferController {
    private readonly transferService;
    constructor(transferService: TransferService);
    findAll(): bank[];
    findOne(id: number): bank;
    create(transfer: CreateBankDto): bank;
    update(id: number, transfer: CreateBankDto): bank;
    remove(id: number): bank;
}
