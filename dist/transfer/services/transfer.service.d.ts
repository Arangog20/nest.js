import { bank } from '../entity/transfer.entity';
import { CreateBankDto } from '../DTOs/transfer.dto';
export declare class TransferService {
    private transfers;
    findAll(): bank[];
    findOne(id: number): any;
    create(transfer: any): any;
    update(id: number, transfer: CreateBankDto): bank;
    remove(id: number): bank;
    private generateId;
}
