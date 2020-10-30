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
exports.ChargeRequest = void 0;
var additional_recipient_1 = require("./additional-recipient");
var address_1 = require("./address");
var money_1 = require("./money");
var graphql_1 = require("@nestjs/graphql");
/**
 * Defines the parameters that can be included in the body of a request to the [Charge](#endpoint-charge) endpoint.  Deprecated - recommend using [CreatePayment](#endpoint-payments-createpayment)
 * @export
 * @class ChargeRequest
 */
var ChargeRequest = /** @class */ (function () {
    function ChargeRequest() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "idempotency_key", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], ChargeRequest.prototype, "amount_money", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "card_nonce", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "customer_card_id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Boolean)
    ], ChargeRequest.prototype, "delay_capture", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "reference_id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "note", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "customer_id", void 0);
    __decorate([
        graphql_1.Field(function () { return address_1.Address; }),
        __metadata("design:type", address_1.Address)
    ], ChargeRequest.prototype, "billing_address", void 0);
    __decorate([
        graphql_1.Field(function () { return address_1.Address; }),
        __metadata("design:type", address_1.Address)
    ], ChargeRequest.prototype, "shipping_address", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "buyer_email_address", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "order_id", void 0);
    __decorate([
        graphql_1.Field(function () { return [additional_recipient_1.AdditionalRecipient]; }),
        __metadata("design:type", Array)
    ], ChargeRequest.prototype, "additional_recipients", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ChargeRequest.prototype, "verification_token", void 0);
    ChargeRequest = __decorate([
        graphql_1.ObjectType()
    ], ChargeRequest);
    return ChargeRequest;
}());
exports.ChargeRequest = ChargeRequest;
