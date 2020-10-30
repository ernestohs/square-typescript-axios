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
exports.Invoice = void 0;
var invoice_payment_request_1 = require("./invoice-payment-request");
var invoice_recipient_1 = require("./invoice-recipient");
var money_1 = require("./money");
var graphql_1 = require("@nestjs/graphql");
/**
 * Stores information about an invoice. You use the Invoices API to create and process invoices. For more information, see [Manage Invoices Using the Invoices API](/docs/invoices-api/overview).
 * @export
 * @class Invoice
 */
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "version", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "location_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "order_id", void 0);
    __decorate([
        graphql_1.Field(function () { return invoice_recipient_1.InvoiceRecipient; }, { nullable: true }),
        __metadata("design:type", invoice_recipient_1.InvoiceRecipient)
    ], Invoice.prototype, "primary_recipient", void 0);
    __decorate([
        graphql_1.Field(function () { return [invoice_payment_request_1.InvoicePaymentRequest]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "payment_requests", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "invoice_number", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "title", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "description", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "scheduled_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "public_url", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], Invoice.prototype, "next_payment_amount_money", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "status", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "timezone", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Invoice.prototype, "updated_at", void 0);
    Invoice = __decorate([
        graphql_1.ObjectType()
    ], Invoice);
    return Invoice;
}());
exports.Invoice = Invoice;