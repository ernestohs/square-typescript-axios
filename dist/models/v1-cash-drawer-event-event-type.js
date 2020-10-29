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
exports.V1CashDrawerEventEventType = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var V1CashDrawerEventEventType;
(function (V1CashDrawerEventEventType) {
    V1CashDrawerEventEventType["NOSALE"] = "NO_SALE";
    V1CashDrawerEventEventType["CASHTENDERPAYMENT"] = "CASH_TENDER_PAYMENT";
    V1CashDrawerEventEventType["OTHERTENDERPAYMENT"] = "OTHER_TENDER_PAYMENT";
    V1CashDrawerEventEventType["CASHTENDERCANCELEDPAYMENT"] = "CASH_TENDER_CANCELED_PAYMENT";
    V1CashDrawerEventEventType["OTHERTENDERCANCELEDPAYMENT"] = "OTHER_TENDER_CANCELED_PAYMENT";
    V1CashDrawerEventEventType["CASHTENDERREFUND"] = "CASH_TENDER_REFUND";
    V1CashDrawerEventEventType["OTHERTENDERREFUND"] = "OTHER_TENDER_REFUND";
    V1CashDrawerEventEventType["PAIDIN"] = "PAID_IN";
    V1CashDrawerEventEventType["PAIDOUT"] = "PAID_OUT";
})(V1CashDrawerEventEventType = exports.V1CashDrawerEventEventType || (exports.V1CashDrawerEventEventType = {}));
