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
exports.OrderReturnDiscount = void 0;
var money_1 = require("./money");
var graphql_1 = require("@nestjs/graphql");
/**
 * Represents a discount being returned that applies to one or more return line items in an order.  Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals. The amount distributed to each return line item is relative to that item’s contribution to the order subtotal.
 * @export
 * @class OrderReturnDiscount
 */
var OrderReturnDiscount = /** @class */ (function () {
    function OrderReturnDiscount() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "uid", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "source_discount_uid", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "catalog_object_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "name", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "type", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "percentage", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnDiscount.prototype, "amount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderReturnDiscount.prototype, "applied_money", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderReturnDiscount.prototype, "scope", void 0);
    OrderReturnDiscount = __decorate([
        graphql_1.ObjectType()
    ], OrderReturnDiscount);
    return OrderReturnDiscount;
}());
exports.OrderReturnDiscount = OrderReturnDiscount;
