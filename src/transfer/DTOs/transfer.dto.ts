import { IsNotEmpty, IsEnum, IsOptional, IsNumber, IsString} from "class-validator";
import { accountStatus } from "../entity/transfer.entity";


export class CreateBankDto {

    @IsNumber()
    @IsNotEmpty()
    id : number;
   
    @IsString()
    @IsOptional()
    name ? : string;
    
    @IsString()
    @IsOptional() 
    lastName?: string;
    
    @IsNotEmpty()
    @IsNumber()
    account: number;

    @IsNumber()
    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    @IsNumber()
    balance: number;
    
    @IsEnum(accountStatus)
    @IsOptional()
    status ?: accountStatus;
}
