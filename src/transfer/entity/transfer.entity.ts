import {Schema, Prop, SchemaFactory}from "@nestjs/mongoose";

export enum accountStatus{
    active = 'true',
    inactive = 'false'
}

@Schema({timestamps:true})
export class bank{
    @Prop({require:true , unique:true})
    id : number;
    @Prop({require:false})
    name : string;
    @Prop({require:false})
    lastName: string;
    @Prop({required: true, unique:true, trim:true})
    account: number;
    @Prop({required: true, trim:true})
    password: string;
    @Prop({require:false})
    balance: number;
    @Prop({default: accountStatus.active})
    status : accountStatus 
}

export const  bankSchema = SchemaFactory.createForClass(bank);