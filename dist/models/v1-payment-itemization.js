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
exports.V1PaymentItemization = void 0;
var v1_money_1 = require("./v1-money");
var v1_payment_discount_1 = require("./v1-payment-discount");
var v1_payment_item_detail_1 = require("./v1-payment-item-detail");
var v1_payment_modifier_1 = require("./v1-payment-modifier");
var v1_payment_tax_1 = require("./v1-payment-tax");
var graphql_1 = require("@nestjs/graphql");
/**
 * Payment include an` itemizations` field that lists the items purchased, along with associated fees, modifiers, and discounts. Each itemization has an `itemization_type` field that indicates which of the following the itemization represents:  <ul> <li>An item variation from the merchant\'s item library</li> <li>A custom monetary amount</li> <li> An action performed on a Square gift card, such as activating or reloading it. </li> </ul>  *Note**: itemization information included in a `Payment` object reflects details collected **at the time of the payment**. Details such as the name or price of items might have changed since the payment was processed.
 * @export
 * @class V1PaymentItemization
 */
var V1PaymentItemization = /** @class */ (function () {
    function V1PaymentItemization() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1PaymentItemization.prototype, "name", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], V1PaymentItemization.prototype, "quantity", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1PaymentItemization.prototype, "itemization_type", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_payment_item_detail_1.V1PaymentItemDetail; }),
        __metadata("design:type", v1_payment_item_detail_1.V1PaymentItemDetail)
    ], V1PaymentItemization.prototype, "item_detail", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1PaymentItemization.prototype, "notes", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1PaymentItemization.prototype, "item_variation_name", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1PaymentItemization.prototype, "total_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1PaymentItemization.prototype, "single_quantity_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1PaymentItemization.prototype, "gross_sales_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1PaymentItemization.prototype, "discount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1PaymentItemization.prototype, "net_sales_money", void 0);
    __decorate([
        graphql_1.Field(function () { return [v1_payment_tax_1.V1PaymentTax]; }),
        __metadata("design:type", Array)
    ], V1PaymentItemization.prototype, "taxes", void 0);
    __decorate([
        graphql_1.Field(function () { return [v1_payment_discount_1.V1PaymentDiscount]; }),
        __metadata("design:type", Array)
    ], V1PaymentItemization.prototype, "discounts", void 0);
    __decorate([
        graphql_1.Field(function () { return [v1_payment_modifier_1.V1PaymentModifier]; }),
        __metadata("design:type", Array)
    ], V1PaymentItemization.prototype, "modifiers", void 0);
    V1PaymentItemization = __decorate([
        graphql_1.ObjectType()
    ], V1PaymentItemization);
    return V1PaymentItemization;
}());
exports.V1PaymentItemization = V1PaymentItemization;
