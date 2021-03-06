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
exports.OrderFulfillmentShipmentDetails = void 0;
var order_fulfillment_recipient_1 = require("./order-fulfillment-recipient");
var graphql_1 = require("@nestjs/graphql");
/**
 * Contains details necessary to fulfill a shipment order.
 * @export
 * @class OrderFulfillmentShipmentDetails
 */
var OrderFulfillmentShipmentDetails = /** @class */ (function () {
    function OrderFulfillmentShipmentDetails() {
    }
    __decorate([
        graphql_1.Field(function () { return order_fulfillment_recipient_1.OrderFulfillmentRecipient; }, { nullable: true }),
        __metadata("design:type", order_fulfillment_recipient_1.OrderFulfillmentRecipient)
    ], OrderFulfillmentShipmentDetails.prototype, "recipient", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "carrier", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "shipping_note", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "shipping_type", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "tracking_number", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "tracking_url", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "placed_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "in_progress_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "packaged_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "expected_shipped_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "shipped_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "canceled_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "cancel_reason", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "failed_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillmentShipmentDetails.prototype, "failure_reason", void 0);
    OrderFulfillmentShipmentDetails = __decorate([
        graphql_1.ObjectType()
    ], OrderFulfillmentShipmentDetails);
    return OrderFulfillmentShipmentDetails;
}());
exports.OrderFulfillmentShipmentDetails = OrderFulfillmentShipmentDetails;
