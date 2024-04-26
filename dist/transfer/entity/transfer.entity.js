"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankSchema = exports.bank = exports.accountStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var accountStatus;
(function (accountStatus) {
    accountStatus["active"] = "true";
    accountStatus["inactive"] = "false";
})(accountStatus || (exports.accountStatus = accountStatus = {}));
let bank = class bank {
};
exports.bank = bank;
__decorate([
    (0, mongoose_1.Prop)({ require: true, unique: true }),
    __metadata("design:type", Number)
], bank.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: false }),
    __metadata("design:type", String)
], bank.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: false }),
    __metadata("design:type", String)
], bank.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", Number)
], bank.prototype, "account", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], bank.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: false }),
    __metadata("design:type", Number)
], bank.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: accountStatus.active }),
    __metadata("design:type", String)
], bank.prototype, "status", void 0);
exports.bank = bank = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], bank);
exports.bankSchema = mongoose_1.SchemaFactory.createForClass(bank);
//# sourceMappingURL=transfer.entity.js.map