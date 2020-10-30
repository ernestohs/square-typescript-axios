"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
exports.PaymentRefund = void 0;
var money_1 = require("./money");
var processing_fee_1 = require("./processing-fee");
var graphql_1 = require("@nestjs/graphql");
/**
 * Represents a refund of a payment made using Square. Contains information on the original payment and the amount of money refunded.
 * @export
 * @class PaymentRefund
 */
var PaymentRefund = /** @class */ (function () {
    function PaymentRefund() {
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "status", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "location_id", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: false }),
        __metadata("design:type", money_1.Money)
    ], PaymentRefund.prototype, "amount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], PaymentRefund.prototype, "app_fee_money", void 0);
    __decorate([
        graphql_1.Field(function () { return [processing_fee_1.ProcessingFee]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], PaymentRefund.prototype, "processing_fee", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "payment_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "order_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "reason", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentRefund.prototype, "updated_at", void 0);
    PaymentRefund = __decorate([
        graphql_1.ObjectType()
    ], PaymentRefund);
    return PaymentRefund;
}());
exports.PaymentRefund = PaymentRefund;