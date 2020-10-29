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
exports.V1FeeType = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var V1FeeType;
(function (V1FeeType) {
    V1FeeType["CAGST"] = "CA_GST";
    V1FeeType["CAHST"] = "CA_HST";
    V1FeeType["CAPST"] = "CA_PST";
    V1FeeType["CAQST"] = "CA_QST";
    V1FeeType["JPCONSUMPTIONTAX"] = "JP_CONSUMPTION_TAX";
    V1FeeType["CAPEIPST"] = "CA_PEI_PST";
    V1FeeType["USSALESTAX"] = "US_SALES_TAX";
    V1FeeType["OTHER"] = "OTHER";
})(V1FeeType = exports.V1FeeType || (exports.V1FeeType = {}));