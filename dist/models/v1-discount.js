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
exports.V1Discount = void 0;
var v1_money_1 = require("./v1-money");
var graphql_1 = require("@nestjs/graphql");
/**
 * V1Discount
 * @export
 * @class V1Discount
 */
var V1Discount = /** @class */ (function () {
    function V1Discount() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1Discount.prototype, "id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1Discount.prototype, "name", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1Discount.prototype, "rate", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1Discount.prototype, "amount_money", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1Discount.prototype, "discount_type", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Boolean)
    ], V1Discount.prototype, "pin_required", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1Discount.prototype, "color", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], V1Discount.prototype, "v2_id", void 0);
    V1Discount = __decorate([
        graphql_1.ObjectType()
    ], V1Discount);
    return V1Discount;
}());
exports.V1Discount = V1Discount;
