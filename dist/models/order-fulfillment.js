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
exports.OrderFulfillment = void 0;
var order_fulfillment_pickup_details_1 = require("./order-fulfillment-pickup-details");
var order_fulfillment_shipment_details_1 = require("./order-fulfillment-shipment-details");
var graphql_1 = require("@nestjs/graphql");
var graphql_type_json_1 = __importDefault(require("graphql-type-json"));
/**
 * Contains details on how to fulfill this order.
 * @export
 * @class OrderFulfillment
 */
var OrderFulfillment = /** @class */ (function () {
    function OrderFulfillment() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillment.prototype, "uid", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillment.prototype, "type", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderFulfillment.prototype, "state", void 0);
    __decorate([
        graphql_1.Field(function () { return graphql_type_json_1.default; }, { nullable: true }),
        __metadata("design:type", Object)
    ], OrderFulfillment.prototype, "metadata", void 0);
    __decorate([
        graphql_1.Field(function () { return order_fulfillment_pickup_details_1.OrderFulfillmentPickupDetails; }, { nullable: true }),
        __metadata("design:type", order_fulfillment_pickup_details_1.OrderFulfillmentPickupDetails)
    ], OrderFulfillment.prototype, "pickup_details", void 0);
    __decorate([
        graphql_1.Field(function () { return order_fulfillment_shipment_details_1.OrderFulfillmentShipmentDetails; }, { nullable: true }),
        __metadata("design:type", order_fulfillment_shipment_details_1.OrderFulfillmentShipmentDetails)
    ], OrderFulfillment.prototype, "shipment_details", void 0);
    OrderFulfillment = __decorate([
        graphql_1.ObjectType()
    ], OrderFulfillment);
    return OrderFulfillment;
}());
exports.OrderFulfillment = OrderFulfillment;
