"use strict";
// tslint:disable
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
exports.CatalogDiscountType = void 0;
/**
 * How to apply a CatalogDiscount to a CatalogItem.
 * @export
 * @enum {string}
 */
var CatalogDiscountType;
(function (CatalogDiscountType) {
    CatalogDiscountType["FIXEDPERCENTAGE"] = "FIXED_PERCENTAGE";
    CatalogDiscountType["FIXEDAMOUNT"] = "FIXED_AMOUNT";
    CatalogDiscountType["VARIABLEPERCENTAGE"] = "VARIABLE_PERCENTAGE";
    CatalogDiscountType["VARIABLEAMOUNT"] = "VARIABLE_AMOUNT";
})(CatalogDiscountType = exports.CatalogDiscountType || (exports.CatalogDiscountType = {}));