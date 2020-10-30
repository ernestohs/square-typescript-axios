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
exports.TenderType = void 0;
/**
 * Indicates a tender\'s type.
 * @export
 * @enum {string}
 */
var TenderType;
(function (TenderType) {
    TenderType["CARD"] = "CARD";
    TenderType["CASH"] = "CASH";
    TenderType["THIRDPARTYCARD"] = "THIRD_PARTY_CARD";
    TenderType["SQUAREGIFTCARD"] = "SQUARE_GIFT_CARD";
    TenderType["NOSALE"] = "NO_SALE";
    TenderType["WALLET"] = "WALLET";
    TenderType["OTHER"] = "OTHER";
})(TenderType = exports.TenderType || (exports.TenderType = {}));