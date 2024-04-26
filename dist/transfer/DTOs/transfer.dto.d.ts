import { accountStatus } from "../entity/transfer.entity";
export declare class CreateBankDto {
    id: number;
    name?: string;
    lastName?: string;
    account: number;
    password: string;
    balance: number;
    status?: accountStatus;
}
