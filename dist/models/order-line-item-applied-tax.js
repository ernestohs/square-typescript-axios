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
exports.OrderLineItemAppliedTax = void 0;
var money_1 = require("./money");
var graphql_1 = require("@nestjs/graphql");
/**
 * Represents an applied portion of a tax to a line item in an order.  Order-scoped taxes automatically include the applied taxes in each line item. Line item taxes must be referenced from any applicable line items. The corresponding applied money is automatically computed, based on the set of participating line items.
 * @export
 * @class OrderLineItemAppliedTax
 */
var OrderLineItemAppliedTax = /** @class */ (function () {
    function OrderLineItemAppliedTax() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItemAppliedTax.prototype, "uid", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], OrderLineItemAppliedTax.prototype, "tax_uid", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItemAppliedTax.prototype, "applied_money", void 0);
    OrderLineItemAppliedTax = __decorate([
        graphql_1.ObjectType()
    ], OrderLineItemAppliedTax);
    return OrderLineItemAppliedTax;
}());
exports.OrderLineItemAppliedTax = OrderLineItemAppliedTax;
