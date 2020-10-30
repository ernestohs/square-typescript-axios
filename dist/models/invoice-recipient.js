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
exports.InvoiceRecipient = void 0;
var address_1 = require("./address");
var graphql_1 = require("@nestjs/graphql");
/**
 * Provides customer data that Square uses to deliver an invoice.
 * @export
 * @class InvoiceRecipient
 */
var InvoiceRecipient = /** @class */ (function () {
    function InvoiceRecipient() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], InvoiceRecipient.prototype, "customer_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], InvoiceRecipient.prototype, "given_name", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], InvoiceRecipient.prototype, "family_name", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], InvoiceRecipient.prototype, "email_address", void 0);
    __decorate([
        graphql_1.Field(function () { return address_1.Address; }, { nullable: true }),
        __metadata("design:type", address_1.Address)
    ], InvoiceRecipient.prototype, "address", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], InvoiceRecipient.prototype, "phone_number", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], InvoiceRecipient.prototype, "company_name", void 0);
    InvoiceRecipient = __decorate([
        graphql_1.ObjectType()
    ], InvoiceRecipient);
    return InvoiceRecipient;
}());
exports.InvoiceRecipient = InvoiceRecipient;