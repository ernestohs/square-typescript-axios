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
exports.CashDrawerEventType = void 0;
/**
 * The types of events on a CashDrawerShift. Each event type represents an employee action on the actual cash drawer represented by a CashDrawerShift.
 * @export
 * @enum {string}
 */
var CashDrawerEventType;
(function (CashDrawerEventType) {
    CashDrawerEventType["NOSALE"] = "NO_SALE";
    CashDrawerEventType["CASHTENDERPAYMENT"] = "CASH_TENDER_PAYMENT";
    CashDrawerEventType["OTHERTENDERPAYMENT"] = "OTHER_TENDER_PAYMENT";
    CashDrawerEventType["CASHTENDERCANCELLEDPAYMENT"] = "CASH_TENDER_CANCELLED_PAYMENT";
    CashDrawerEventType["OTHERTENDERCANCELLEDPAYMENT"] = "OTHER_TENDER_CANCELLED_PAYMENT";
    CashDrawerEventType["CASHTENDERREFUND"] = "CASH_TENDER_REFUND";
    CashDrawerEventType["OTHERTENDERREFUND"] = "OTHER_TENDER_REFUND";
    CashDrawerEventType["PAIDIN"] = "PAID_IN";
    CashDrawerEventType["PAIDOUT"] = "PAID_OUT";
})(CashDrawerEventType = exports.CashDrawerEventType || (exports.CashDrawerEventType = {}));