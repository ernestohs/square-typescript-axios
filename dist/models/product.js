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
exports.Product = void 0;
/**
 * Indicates the Square product used to generate an inventory change.
 * @export
 * @enum {string}
 */
var Product;
(function (Product) {
    Product["SQUAREPOS"] = "SQUARE_POS";
    Product["EXTERNALAPI"] = "EXTERNAL_API";
    Product["BILLING"] = "BILLING";
    Product["APPOINTMENTS"] = "APPOINTMENTS";
    Product["INVOICES"] = "INVOICES";
    Product["ONLINESTORE"] = "ONLINE_STORE";
    Product["PAYROLL"] = "PAYROLL";
    Product["DASHBOARD"] = "DASHBOARD";
    Product["ITEMLIBRARYIMPORT"] = "ITEM_LIBRARY_IMPORT";
    Product["OTHER"] = "OTHER";
})(Product = exports.Product || (exports.Product = {}));
