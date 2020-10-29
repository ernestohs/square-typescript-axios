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
exports.ActionCancelReason = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var ActionCancelReason;
(function (ActionCancelReason) {
    ActionCancelReason["BUYERCANCELED"] = "BUYER_CANCELED";
    ActionCancelReason["SELLERCANCELED"] = "SELLER_CANCELED";
    ActionCancelReason["TIMEDOUT"] = "TIMED_OUT";
})(ActionCancelReason = exports.ActionCancelReason || (exports.ActionCancelReason = {}));