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
exports.V1LocationsApi = exports.V1LocationsApiFactory = exports.V1LocationsApiFp = exports.V1LocationsApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * V1LocationsApi - axios parameter creator
 * @export
 */
exports.V1LocationsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.
         * @summary ListLocations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLocations: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, queryParameters, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/v1/me/locations";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("oauth2", ["MERCHANT_PROFILE_READ"])];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.accessToken];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarAccessTokenValue = _a;
                            localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                            _b.label = 5;
                        case 5:
                            queryParameters = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                queryParameters.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.query) {
                                queryParameters.set(key, options.query[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Get the general information for a business.
         * @summary RetrieveBusiness
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveBusiness: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, queryParameters, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            localVarPath = "/v1/me";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("oauth2", ["MERCHANT_PROFILE_READ"])];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.accessToken];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarAccessTokenValue = _a;
                            localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                            _b.label = 5;
                        case 5:
                            queryParameters = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                queryParameters.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.query) {
                                queryParameters.set(key, options.query[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
/**
 * V1LocationsApi - functional programming interface
 * @export
 */
exports.V1LocationsApiFp = function (configuration) {
    return {
        /**
         * Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.
         * @summary ListLocations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLocations: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.V1LocationsApiAxiosParamCreator(configuration).listLocations(options)];
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
         * Get the general information for a business.
         * @summary RetrieveBusiness
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveBusiness: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.V1LocationsApiAxiosParamCreator(configuration).retrieveBusiness(options)];
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
 * V1LocationsApi - factory interface
 * @export
 */
exports.V1LocationsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.
         * @summary ListLocations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLocations: function (options) {
            return exports.V1LocationsApiFp(configuration).listLocations(options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get the general information for a business.
         * @summary RetrieveBusiness
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveBusiness: function (options) {
            return exports.V1LocationsApiFp(configuration).retrieveBusiness(options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * V1LocationsApi - object-oriented interface
 * @export
 * @class V1LocationsApi
 * @extends {BaseAPI}
 */
var V1LocationsApi = /** @class */ (function (_super) {
    __extends(V1LocationsApi, _super);
    function V1LocationsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.
     * @summary ListLocations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1LocationsApi
     */
    V1LocationsApi.prototype.listLocations = function (options) {
        var _this = this;
        return exports.V1LocationsApiFp(this.configuration).listLocations(options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get the general information for a business.
     * @summary RetrieveBusiness
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1LocationsApi
     */
    V1LocationsApi.prototype.retrieveBusiness = function (options) {
        var _this = this;
        return exports.V1LocationsApiFp(this.configuration).retrieveBusiness(options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return V1LocationsApi;
}(base_1.BaseAPI));
exports.V1LocationsApi = V1LocationsApi;
