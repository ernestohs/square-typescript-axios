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
exports.Checkout = void 0;
var additional_recipient_1 = require("./additional-recipient");
var address_1 = require("./address");
var order_1 = require("./order");
var graphql_1 = require("@nestjs/graphql");
/**
 * Square Checkout lets merchants accept online payments for supported payment types using a checkout workflow hosted on squareup.com.
 * @export
 * @class Checkout
 */
var Checkout = /** @class */ (function () {
    function Checkout() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Checkout.prototype, "id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Checkout.prototype, "checkout_page_url", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Boolean)
    ], Checkout.prototype, "ask_for_shipping_address", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Checkout.prototype, "merchant_support_email", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Checkout.prototype, "pre_populate_buyer_email", void 0);
    __decorate([
        graphql_1.Field(function () { return address_1.Address; }),
        __metadata("design:type", address_1.Address)
    ], Checkout.prototype, "pre_populate_shipping_address", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Checkout.prototype, "redirect_url", void 0);
    __decorate([
        graphql_1.Field(function () { return order_1.Order; }),
        __metadata("design:type", order_1.Order)
    ], Checkout.prototype, "order", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], Checkout.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field(function () { return [additional_recipient_1.AdditionalRecipient]; }),
        __metadata("design:type", Array)
    ], Checkout.prototype, "additional_recipients", void 0);
    Checkout = __decorate([
        graphql_1.ObjectType()
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;
