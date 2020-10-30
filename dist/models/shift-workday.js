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
exports.ShiftWorkday = void 0;
var date_range_1 = require("./date-range");
var graphql_1 = require("@nestjs/graphql");
/**
 * A `Shift` search query filter parameter that sets a range of days that a `Shift` must start or end in before passing the filter condition.
 * @export
 * @class ShiftWorkday
 */
var ShiftWorkday = /** @class */ (function () {
    function ShiftWorkday() {
    }
    __decorate([
        graphql_1.Field(function () { return date_range_1.DateRange; }),
        __metadata("design:type", date_range_1.DateRange)
    ], ShiftWorkday.prototype, "date_range", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ShiftWorkday.prototype, "match_shifts_by", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ShiftWorkday.prototype, "default_timezone", void 0);
    ShiftWorkday = __decorate([
        graphql_1.ObjectType()
    ], ShiftWorkday);
    return ShiftWorkday;
}());
exports.ShiftWorkday = ShiftWorkday;
