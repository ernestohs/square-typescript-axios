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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPrepaidType = void 0;
/**
 * Indicates a card\'s prepaid type, such as `NOT_PREPAID` or `PREPAID`.
 * @export
 * @enum {string}
 */
var CardPrepaidType;
(function (CardPrepaidType) {
    CardPrepaidType["UNKNOWNPREPAIDTYPE"] = "UNKNOWN_PREPAID_TYPE";
    CardPrepaidType["NOTPREPAID"] = "NOT_PREPAID";
    CardPrepaidType["PREPAID"] = "PREPAID";
})(CardPrepaidType = exports.CardPrepaidType || (exports.CardPrepaidType = {}));