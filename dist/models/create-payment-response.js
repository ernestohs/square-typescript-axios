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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentResponse = void 0;
var payment_1 = require("./payment");
var graphql_1 = require("@nestjs/graphql");
var graphql_type_json_1 = __importDefault(require("graphql-type-json"));
/**
 * Defines the fields that are included in the response body of a request to the [CreatePayment](#endpoint-payments-createpayment) endpoint.  Note: If there are errors processing the request, the payment field might not be present, or it might be present with a status of `FAILED`.
 * @export
 * @class CreatePaymentResponse
 */
var CreatePaymentResponse = /** @class */ (function () {
    function CreatePaymentResponse() {
    }
    __decorate([
        graphql_1.Field(function () { return graphql_type_json_1.default; }, { nullable: true }),
        __metadata("design:type", Array)
    ], CreatePaymentResponse.prototype, "errors", void 0);
    __decorate([
        graphql_1.Field(function () { return payment_1.Payment; }, { nullable: true }),
        __metadata("design:type", payment_1.Payment)
    ], CreatePaymentResponse.prototype, "payment", void 0);
    CreatePaymentResponse = __decorate([
        graphql_1.ObjectType()
    ], CreatePaymentResponse);
    return CreatePaymentResponse;
}());
exports.CreatePaymentResponse = CreatePaymentResponse;
