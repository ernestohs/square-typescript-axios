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
exports.Order = void 0;
var money_1 = require("./money");
var order_fulfillment_1 = require("./order-fulfillment");
var order_line_item_1 = require("./order-line-item");
var order_line_item_discount_1 = require("./order-line-item-discount");
var order_line_item_tax_1 = require("./order-line-item-tax");
var order_money_amounts_1 = require("./order-money-amounts");
var order_pricing_options_1 = require("./order-pricing-options");
var order_return_1 = require("./order-return");
var order_reward_1 = require("./order-reward");
var order_rounding_adjustment_1 = require("./order-rounding-adjustment");
var order_service_charge_1 = require("./order-service-charge");
var order_source_1 = require("./order-source");
var refund_1 = require("./refund");
var tender_1 = require("./tender");
var graphql_1 = require("@nestjs/graphql");
/**
 * Contains all information related to a single order to process with Square, including line items that specify the products to purchase. Order objects also include information on any associated tenders, refunds, and returns.  All Connect V2 Transactions have all been converted to Orders including all associated itemization data.
 * @export
 * @class Order
 */
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "location_id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "reference_id", void 0);
    __decorate([
        graphql_1.Field(function () { return order_source_1.OrderSource; }),
        __metadata("design:type", order_source_1.OrderSource)
    ], Order.prototype, "source", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "customer_id", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_1.OrderLineItem]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "line_items", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_tax_1.OrderLineItemTax]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "taxes", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_line_item_discount_1.OrderLineItemDiscount]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "discounts", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_service_charge_1.OrderServiceCharge]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "service_charges", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_fulfillment_1.OrderFulfillment]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "fulfillments", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_return_1.OrderReturn]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "returns", void 0);
    __decorate([
        graphql_1.Field(function () { return order_money_amounts_1.OrderMoneyAmounts; }),
        __metadata("design:type", order_money_amounts_1.OrderMoneyAmounts)
    ], Order.prototype, "return_amounts", void 0);
    __decorate([
        graphql_1.Field(function () { return order_money_amounts_1.OrderMoneyAmounts; }),
        __metadata("design:type", order_money_amounts_1.OrderMoneyAmounts)
    ], Order.prototype, "net_amounts", void 0);
    __decorate([
        graphql_1.Field(function () { return order_rounding_adjustment_1.OrderRoundingAdjustment; }),
        __metadata("design:type", order_rounding_adjustment_1.OrderRoundingAdjustment)
    ], Order.prototype, "rounding_adjustment", void 0);
    __decorate([
        graphql_1.Field(function () { return [tender_1.Tender]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "tenders", void 0);
    __decorate([
        graphql_1.Field(function () { return [refund_1.Refund]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "refunds", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Object)
    ], Order.prototype, "metadata", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "updated_at", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "closed_at", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Order.prototype, "state", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], Order.prototype, "version", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], Order.prototype, "total_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], Order.prototype, "total_tax_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], Order.prototype, "total_discount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], Order.prototype, "total_tip_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], Order.prototype, "total_service_charge_money", void 0);
    __decorate([
        graphql_1.Field(function () { return order_pricing_options_1.OrderPricingOptions; }),
        __metadata("design:type", order_pricing_options_1.OrderPricingOptions)
    ], Order.prototype, "pricing_options", void 0);
    __decorate([
        graphql_1.Field(function () { return [order_reward_1.OrderReward]; }),
        __metadata("design:type", Array)
    ], Order.prototype, "rewards", void 0);
    Order = __decorate([
        graphql_1.ObjectType()
    ], Order);
    return Order;
}());
exports.Order = Order;
