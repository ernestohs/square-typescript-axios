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
exports.CustomerGroupsApi = exports.CustomerGroupsApiFactory = exports.CustomerGroupsApiFp = exports.CustomerGroupsApiAxiosParamCreator = void 0;
var globalImportUrl = require("url");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * CustomerGroupsApi - axios parameter creator
 * @export
 */
exports.CustomerGroupsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Creates a new customer group for a business.   The request must include the `name` value of the group.
         * @summary CreateCustomerGroup
         * @param {CreateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomerGroup: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling createCustomerGroup.');
                    }
                    localVarPath = "/v2/customers/groups";
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
                            ? configuration.accessToken("oauth2", ["CUSTOMERS_WRITE"])
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
        /**
         * Deletes a customer group as identified by the `group_id` value.
         * @summary DeleteCustomerGroup
         * @param {string} groupId The ID of the customer group to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomerGroup: function (groupId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                        throw new base_1.RequiredError('groupId', 'Required parameter groupId was null or undefined when calling deleteCustomerGroup.');
                    }
                    localVarPath = "/v2/customers/groups/{group_id}"
                        .replace("{" + "group_id" + "}", encodeURIComponent(String(groupId)));
                    localVarUrlObj = globalImportUrl.parse(localVarPath, true);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication oauth2 required
                    // oauth required
                    if (configuration && configuration.accessToken) {
                        localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                            ? configuration.accessToken("oauth2", ["CUSTOMERS_WRITE"])
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
         * Retrieves the list of customer groups of a business.
         * @summary ListCustomerGroups
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCustomerGroups: function (cursor, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    localVarPath = "/v2/customers/groups";
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
                            ? configuration.accessToken("oauth2", ["CUSTOMERS_READ"])
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
         * Retrieves a specific customer group as identified by the `group_id` value.
         * @summary RetrieveCustomerGroup
         * @param {string} groupId The ID of the customer group to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCustomerGroup: function (groupId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                        throw new base_1.RequiredError('groupId', 'Required parameter groupId was null or undefined when calling retrieveCustomerGroup.');
                    }
                    localVarPath = "/v2/customers/groups/{group_id}"
                        .replace("{" + "group_id" + "}", encodeURIComponent(String(groupId)));
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
                            ? configuration.accessToken("oauth2", ["CUSTOMERS_READ"])
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
         * Updates a customer group as identified by the `group_id` value.
         * @summary UpdateCustomerGroup
         * @param {string} groupId The ID of the customer group to update.
         * @param {UpdateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomerGroup: function (groupId, body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                        throw new base_1.RequiredError('groupId', 'Required parameter groupId was null or undefined when calling updateCustomerGroup.');
                    }
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling updateCustomerGroup.');
                    }
                    localVarPath = "/v2/customers/groups/{group_id}"
                        .replace("{" + "group_id" + "}", encodeURIComponent(String(groupId)));
                    localVarUrlObj = globalImportUrl.parse(localVarPath, true);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication oauth2 required
                    // oauth required
                    if (configuration && configuration.accessToken) {
                        localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                            ? configuration.accessToken("oauth2", ["CUSTOMERS_WRITE", "CUSTOMERS_READ"])
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
 * CustomerGroupsApi - functional programming interface
 * @export
 */
exports.CustomerGroupsApiFp = function (configuration) {
    return {
        /**
         * Creates a new customer group for a business.   The request must include the `name` value of the group.
         * @summary CreateCustomerGroup
         * @param {CreateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomerGroup: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CustomerGroupsApiAxiosParamCreator(configuration).createCustomerGroup(body, options)];
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
         * Deletes a customer group as identified by the `group_id` value.
         * @summary DeleteCustomerGroup
         * @param {string} groupId The ID of the customer group to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomerGroup: function (groupId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CustomerGroupsApiAxiosParamCreator(configuration).deleteCustomerGroup(groupId, options)];
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
         * Retrieves the list of customer groups of a business.
         * @summary ListCustomerGroups
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCustomerGroups: function (cursor, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CustomerGroupsApiAxiosParamCreator(configuration).listCustomerGroups(cursor, options)];
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
         * Retrieves a specific customer group as identified by the `group_id` value.
         * @summary RetrieveCustomerGroup
         * @param {string} groupId The ID of the customer group to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCustomerGroup: function (groupId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CustomerGroupsApiAxiosParamCreator(configuration).retrieveCustomerGroup(groupId, options)];
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
         * Updates a customer group as identified by the `group_id` value.
         * @summary UpdateCustomerGroup
         * @param {string} groupId The ID of the customer group to update.
         * @param {UpdateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomerGroup: function (groupId, body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CustomerGroupsApiAxiosParamCreator(configuration).updateCustomerGroup(groupId, body, options)];
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
 * CustomerGroupsApi - factory interface
 * @export
 */
exports.CustomerGroupsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Creates a new customer group for a business.   The request must include the `name` value of the group.
         * @summary CreateCustomerGroup
         * @param {CreateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomerGroup: function (body, options) {
            return exports.CustomerGroupsApiFp(configuration).createCustomerGroup(body, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Deletes a customer group as identified by the `group_id` value.
         * @summary DeleteCustomerGroup
         * @param {string} groupId The ID of the customer group to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomerGroup: function (groupId, options) {
            return exports.CustomerGroupsApiFp(configuration).deleteCustomerGroup(groupId, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Retrieves the list of customer groups of a business.
         * @summary ListCustomerGroups
         * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCustomerGroups: function (cursor, options) {
            return exports.CustomerGroupsApiFp(configuration).listCustomerGroups(cursor, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Retrieves a specific customer group as identified by the `group_id` value.
         * @summary RetrieveCustomerGroup
         * @param {string} groupId The ID of the customer group to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCustomerGroup: function (groupId, options) {
            return exports.CustomerGroupsApiFp(configuration).retrieveCustomerGroup(groupId, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Updates a customer group as identified by the `group_id` value.
         * @summary UpdateCustomerGroup
         * @param {string} groupId The ID of the customer group to update.
         * @param {UpdateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomerGroup: function (groupId, body, options) {
            return exports.CustomerGroupsApiFp(configuration).updateCustomerGroup(groupId, body, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * CustomerGroupsApi - object-oriented interface
 * @export
 * @class CustomerGroupsApi
 * @extends {BaseAPI}
 */
var CustomerGroupsApi = /** @class */ (function (_super) {
    __extends(CustomerGroupsApi, _super);
    function CustomerGroupsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new customer group for a business.   The request must include the `name` value of the group.
     * @summary CreateCustomerGroup
     * @param {CreateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    CustomerGroupsApi.prototype.createCustomerGroup = function (body, options) {
        var _this = this;
        return exports.CustomerGroupsApiFp(this.configuration).createCustomerGroup(body, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Deletes a customer group as identified by the `group_id` value.
     * @summary DeleteCustomerGroup
     * @param {string} groupId The ID of the customer group to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    CustomerGroupsApi.prototype.deleteCustomerGroup = function (groupId, options) {
        var _this = this;
        return exports.CustomerGroupsApiFp(this.configuration).deleteCustomerGroup(groupId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Retrieves the list of customer groups of a business.
     * @summary ListCustomerGroups
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    CustomerGroupsApi.prototype.listCustomerGroups = function (cursor, options) {
        var _this = this;
        return exports.CustomerGroupsApiFp(this.configuration).listCustomerGroups(cursor, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Retrieves a specific customer group as identified by the `group_id` value.
     * @summary RetrieveCustomerGroup
     * @param {string} groupId The ID of the customer group to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    CustomerGroupsApi.prototype.retrieveCustomerGroup = function (groupId, options) {
        var _this = this;
        return exports.CustomerGroupsApiFp(this.configuration).retrieveCustomerGroup(groupId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Updates a customer group as identified by the `group_id` value.
     * @summary UpdateCustomerGroup
     * @param {string} groupId The ID of the customer group to update.
     * @param {UpdateCustomerGroupRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerGroupsApi
     */
    CustomerGroupsApi.prototype.updateCustomerGroup = function (groupId, body, options) {
        var _this = this;
        return exports.CustomerGroupsApiFp(this.configuration).updateCustomerGroup(groupId, body, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return CustomerGroupsApi;
}(base_1.BaseAPI));
exports.CustomerGroupsApi = CustomerGroupsApi;
