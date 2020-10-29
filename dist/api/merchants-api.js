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
exports.MerchantsApi = exports.MerchantsApiFactory = exports.MerchantsApiFp = exports.MerchantsApiAxiosParamCreator = void 0;
var globalImportUrl = require("url");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * MerchantsApi - axios parameter creator
 * @export
 */
exports.MerchantsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
         * @summary ListMerchants
         * @param {number} [cursor] The cursor generated by the previous response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMerchants: function (cursor, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    localVarPath = "/v2/merchants";
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
                            ? configuration.accessToken("oauth2", ["MERCHANT_PROFILE_READ"])
                            : configuration.accessToken;
                        localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                    }
                    if (cursor !== undefined) {
                        localVarQueryParameter['cursor'] = cursor;
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
         * Retrieve a `Merchant` object for the given `merchant_id`.
         * @summary RetrieveMerchant
         * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMerchant: function (merchantId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'merchantId' is not null or undefined
                    if (merchantId === null || merchantId === undefined) {
                        throw new base_1.RequiredError('merchantId', 'Required parameter merchantId was null or undefined when calling retrieveMerchant.');
                    }
                    localVarPath = "/v2/merchants/{merchant_id}"
                        .replace("{" + "merchant_id" + "}", encodeURIComponent(String(merchantId)));
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
                            ? configuration.accessToken("oauth2", ["MERCHANT_PROFILE_READ"])
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
    };
};
/**
 * MerchantsApi - functional programming interface
 * @export
 */
exports.MerchantsApiFp = function (configuration) {
    return {
        /**
         * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
         * @summary ListMerchants
         * @param {number} [cursor] The cursor generated by the previous response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMerchants: function (cursor, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.MerchantsApiAxiosParamCreator(configuration).listMerchants(cursor, options)];
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
         * Retrieve a `Merchant` object for the given `merchant_id`.
         * @summary RetrieveMerchant
         * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMerchant: function (merchantId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.MerchantsApiAxiosParamCreator(configuration).retrieveMerchant(merchantId, options)];
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
 * MerchantsApi - factory interface
 * @export
 */
exports.MerchantsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
         * @summary ListMerchants
         * @param {number} [cursor] The cursor generated by the previous response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMerchants: function (cursor, options) {
            return exports.MerchantsApiFp(configuration).listMerchants(cursor, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Retrieve a `Merchant` object for the given `merchant_id`.
         * @summary RetrieveMerchant
         * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMerchant: function (merchantId, options) {
            return exports.MerchantsApiFp(configuration).retrieveMerchant(merchantId, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * MerchantsApi - object-oriented interface
 * @export
 * @class MerchantsApi
 * @extends {BaseAPI}
 */
var MerchantsApi = /** @class */ (function (_super) {
    __extends(MerchantsApi, _super);
    function MerchantsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns `Merchant` information for a given access token.  If you don\'t know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant) endpoint to get the merchant information.
     * @summary ListMerchants
     * @param {number} [cursor] The cursor generated by the previous response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    MerchantsApi.prototype.listMerchants = function (cursor, options) {
        var _this = this;
        return exports.MerchantsApiFp(this.configuration).listMerchants(cursor, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Retrieve a `Merchant` object for the given `merchant_id`.
     * @summary RetrieveMerchant
     * @param {string} merchantId The ID of the merchant to retrieve. If the string \&quot;me\&quot; is supplied as the ID, then retrieve the merchant that is currently accessible to this call.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    MerchantsApi.prototype.retrieveMerchant = function (merchantId, options) {
        var _this = this;
        return exports.MerchantsApiFp(this.configuration).retrieveMerchant(merchantId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return MerchantsApi;
}(base_1.BaseAPI));
exports.MerchantsApi = MerchantsApi;
