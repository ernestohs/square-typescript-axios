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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundsApi = exports.RefundsApiFactory = exports.RefundsApiFp = exports.RefundsApiAxiosParamCreator = void 0;
var globalImportUrl = require("url");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * RefundsApi - axios parameter creator
 * @export
 */
exports.RefundsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Retrieves a specific refund using the `refund_id`.
         * @summary GetPaymentRefund
         * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentRefund: function (refundId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'refundId' is not null or undefined
                    if (refundId === null || refundId === undefined) {
                        throw new base_1.RequiredError('refundId', 'Required parameter refundId was null or undefined when calling getPaymentRefund.');
                    }
                    localVarPath = "/v2/refunds/{refund_id}"
                        .replace("{" + "refund_id" + "}", encodeURIComponent(String(refundId)));
                    localVarUrlObj = globalImportUrl.parse(localVarPath, true);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication oauth2 required
                    // oauth required
                    if (configuration && configuration.accessToken) {
                        localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                            ? configuration.accessToken("oauth2", ["PAYMENTS_READ"])
                            : configuration.accessToken;
                        localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                    }
                    localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
                    // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                    delete localVarUrlObj.search;
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: globalImportUrl.format(localVarUrlObj),
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         * Retrieves a list of refunds for the account making the request.  The maximum results per page is 100.
         * @summary ListPaymentRefunds
         * @param {string} [beginTime] Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
         * @param {string} [endTime] Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
         * @param {string} [sortOrder] The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
         * @param {string} [locationId] Limit results to the location supplied. By default, results are returned for all locations associated with the merchant.
         * @param {string} [status] If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted refunds are returned regardless of status.
         * @param {string} [sourceType] If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
         * @param {number} [limit] Maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, at most 100 results will be returned.  Default: &#x60;100&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPaymentRefunds: function (beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    localVarPath = "/v2/refunds";
                    localVarUrlObj = globalImportUrl.parse(localVarPath, true);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication oauth2 required
                    // oauth required
                    if (configuration && configuration.accessToken) {
                        localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                            ? configuration.accessToken("oauth2", ["PAYMENTS_READ"])
                            : configuration.accessToken;
                        localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                    }
                    if (beginTime !== undefined) {
                        localVarQueryParameter['begin_time'] = beginTime;
                    }
                    if (endTime !== undefined) {
                        localVarQueryParameter['end_time'] = endTime;
                    }
                    if (sortOrder !== undefined) {
                        localVarQueryParameter['sort_order'] = sortOrder;
                    }
                    if (cursor !== undefined) {
                        localVarQueryParameter['cursor'] = cursor;
                    }
                    if (locationId !== undefined) {
                        localVarQueryParameter['location_id'] = locationId;
                    }
                    if (status !== undefined) {
                        localVarQueryParameter['status'] = status;
                    }
                    if (sourceType !== undefined) {
                        localVarQueryParameter['source_type'] = sourceType;
                    }
                    if (limit !== undefined) {
                        localVarQueryParameter['limit'] = limit;
                    }
                    localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
                    // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                    delete localVarUrlObj.search;
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: globalImportUrl.format(localVarUrlObj),
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         * Refunds a payment. You can refund the entire payment amount or a  portion of it.
         * @summary RefundPayment
         * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling refundPayment.');
                    }
                    localVarPath = "/v2/refunds";
                    localVarUrlObj = globalImportUrl.parse(localVarPath, true);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication oauth2 required
                    // oauth required
                    if (configuration && configuration.accessToken) {
                        localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                            ? configuration.accessToken("oauth2", ["PAYMENTS_WRITE"])
                            : configuration.accessToken;
                        localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                    }
                    localVarHeaderParameter['Content-Type'] = 'application/json';
                    localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
                    // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                    delete localVarUrlObj.search;
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                    localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                    return [2 /*return*/, {
                            url: globalImportUrl.format(localVarUrlObj),
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
/**
 * RefundsApi - functional programming interface
 * @export
 */
exports.RefundsApiFp = function (configuration) {
    return {
        /**
         * Retrieves a specific refund using the `refund_id`.
         * @summary GetPaymentRefund
         * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentRefund: function (refundId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.RefundsApiAxiosParamCreator(configuration).getPaymentRefund(refundId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * Retrieves a list of refunds for the account making the request.  The maximum results per page is 100.
         * @summary ListPaymentRefunds
         * @param {string} [beginTime] Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
         * @param {string} [endTime] Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
         * @param {string} [sortOrder] The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
         * @param {string} [locationId] Limit results to the location supplied. By default, results are returned for all locations associated with the merchant.
         * @param {string} [status] If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted refunds are returned regardless of status.
         * @param {string} [sourceType] If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
         * @param {number} [limit] Maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, at most 100 results will be returned.  Default: &#x60;100&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPaymentRefunds: function (beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.RefundsApiAxiosParamCreator(configuration).listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         * Refunds a payment. You can refund the entire payment amount or a  portion of it.
         * @summary RefundPayment
         * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.RefundsApiAxiosParamCreator(configuration).refundPayment(body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
/**
 * RefundsApi - factory interface
 * @export
 */
exports.RefundsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Retrieves a specific refund using the `refund_id`.
         * @summary GetPaymentRefund
         * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentRefund: function (refundId, options) {
            return exports.RefundsApiFp(configuration).getPaymentRefund(refundId, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Retrieves a list of refunds for the account making the request.  The maximum results per page is 100.
         * @summary ListPaymentRefunds
         * @param {string} [beginTime] Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
         * @param {string} [endTime] Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
         * @param {string} [sortOrder] The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
         * @param {string} [locationId] Limit results to the location supplied. By default, results are returned for all locations associated with the merchant.
         * @param {string} [status] If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted refunds are returned regardless of status.
         * @param {string} [sourceType] If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
         * @param {number} [limit] Maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, at most 100 results will be returned.  Default: &#x60;100&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPaymentRefunds: function (beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options) {
            return exports.RefundsApiFp(configuration).listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Refunds a payment. You can refund the entire payment amount or a  portion of it.
         * @summary RefundPayment
         * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment: function (body, options) {
            return exports.RefundsApiFp(configuration).refundPayment(body, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * RefundsApi - object-oriented interface
 * @export
 * @class RefundsApi
 * @extends {BaseAPI}
 */
var RefundsApi = /** @class */ (function (_super) {
    __extends(RefundsApi, _super);
    function RefundsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a specific refund using the `refund_id`.
     * @summary GetPaymentRefund
     * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    RefundsApi.prototype.getPaymentRefund = function (refundId, options) {
        var _this = this;
        return exports.RefundsApiFp(this.configuration).getPaymentRefund(refundId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Retrieves a list of refunds for the account making the request.  The maximum results per page is 100.
     * @summary ListPaymentRefunds
     * @param {string} [beginTime] Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
     * @param {string} [endTime] Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
     * @param {string} [sortOrder] The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default).
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * @param {string} [locationId] Limit results to the location supplied. By default, results are returned for all locations associated with the merchant.
     * @param {string} [status] If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted refunds are returned regardless of status.
     * @param {string} [sourceType] If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
     * @param {number} [limit] Maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, at most 100 results will be returned.  Default: &#x60;100&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    RefundsApi.prototype.listPaymentRefunds = function (beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options) {
        var _this = this;
        return exports.RefundsApiFp(this.configuration).listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * @summary RefundPayment
     * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    RefundsApi.prototype.refundPayment = function (body, options) {
        var _this = this;
        return exports.RefundsApiFp(this.configuration).refundPayment(body, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return RefundsApi;
}(base_1.BaseAPI));
exports.RefundsApi = RefundsApi;
