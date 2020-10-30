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
exports.OrderLineItem = void 0;
var money_1 = require("./money");
var order_line_item_applied_discount_1 = require("./order-line-item-applied-discount");
var order_line_item_applied_tax_1 = require("./order-line-item-applied-tax");
var order_line_item_modifier_1 = require("./order-line-item-modifier");
var order_quantity_unit_1 = require("./order-quantity-unit");
var graphql_1 = require("@nestjs/graphql");
/**
 * Represents a line item in an order. Each line item describes a different product to purchase, with its own quantity and price details.
 * @export
 * @class OrderLineItem
 */
var OrderLineItem = /** @class */ (function () {
    function OrderLineItem() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "uid", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "name", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "quantity", void 0);
    __decorate([
        graphql_1.Field(function () { return order_quantity_unit_1.OrderQuantityUnit; }),
        __metadata("design:type", order_quantity_unit_1.OrderQuantityUnit)
    ], OrderLineItem.prototype, "quantity_unit", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "note", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "catalog_object_id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "variation_name", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Object)
    ], OrderLineItem.prototype, "metadata", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_modifier_1.OrderLineItemModifier]; }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "modifiers", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_applied_tax_1.OrderLineItemAppliedTax]; }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "applied_taxes", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_applied_discount_1.OrderLineItemAppliedDiscount]; }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "applied_discounts", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItem.prototype, "base_price_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItem.prototype, "variation_total_price_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItem.prototype, "gross_sales_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItem.prototype, "total_tax_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItem.prototype, "total_discount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItem.prototype, "total_money", void 0);
    OrderLineItem = __decorate([
        graphql_1.ObjectType()
    ], OrderLineItem);
    return OrderLineItem;
}());
exports.OrderLineItem = OrderLineItem;
