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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashDrawersApi = exports.CashDrawersApiFactory = exports.CashDrawersApiFp = exports.CashDrawersApiAxiosParamCreator = void 0;
var axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * CashDrawersApi - axios parameter creator
 * @export
 */
exports.CashDrawersApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Provides a paginated list of events for a single cash drawer shift.
         * @summary ListCashDrawerShiftEvents
         * @param {string} locationId The ID of the location to list cash drawer shifts for.
         * @param {string} shiftId The shift ID.
         * @param {number} [limit] Number of resources to be returned in a page of results (200 by default, 1000 max).
         * @param {string} [cursor] Opaque cursor for fetching the next page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashDrawerShiftEvents: function (locationId, shiftId, limit, cursor, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, queryParameters, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'locationId' is not null or undefined
                            if (locationId === null || locationId === undefined) {
                                throw new base_1.RequiredError('locationId', 'Required parameter locationId was null or undefined when calling listCashDrawerShiftEvents.');
                            }
                            // verify required parameter 'shiftId' is not null or undefined
                            if (shiftId === null || shiftId === undefined) {
                                throw new base_1.RequiredError('shiftId', 'Required parameter shiftId was null or undefined when calling listCashDrawerShiftEvents.');
                            }
                            localVarPath = "/v2/cash-drawers/shifts/{shift_id}/events"
                                .replace("{" + "shift_id" + "}", encodeURIComponent(String(shiftId)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("oauth2", ["CASH_DRAWER_READ"])];
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
                            if (locationId !== undefined) {
                                localVarQueryParameter['location_id'] = locationId;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['limit'] = limit;
                            }
                            if (cursor !== undefined) {
                                localVarQueryParameter['cursor'] = cursor;
                            }
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
         * Provides the details for all of the cash drawer shifts for a location in a date range.
         * @summary ListCashDrawerShifts
         * @param {string} locationId The ID of the location to query for a list of cash drawer shifts.
         * @param {string} [sortOrder] The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
         * @param {string} [beginTime] The inclusive start time of the query on opened_at, in ISO 8601 format.
         * @param {string} [endTime] The exclusive end date of the query on opened_at, in ISO 8601 format.
         * @param {number} [limit] Number of cash drawer shift events in a page of results (200 by default, 1000 max).
         * @param {string} [cursor] Opaque cursor for fetching the next page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashDrawerShifts: function (locationId, sortOrder, beginTime, endTime, limit, cursor, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, queryParameters, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'locationId' is not null or undefined
                            if (locationId === null || locationId === undefined) {
                                throw new base_1.RequiredError('locationId', 'Required parameter locationId was null or undefined when calling listCashDrawerShifts.');
                            }
                            localVarPath = "/v2/cash-drawers/shifts";
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("oauth2", ["CASH_DRAWER_READ"])];
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
                            if (locationId !== undefined) {
                                localVarQueryParameter['location_id'] = locationId;
                            }
                            if (sortOrder !== undefined) {
                                localVarQueryParameter['sort_order'] = sortOrder;
                            }
                            if (beginTime !== undefined) {
                                localVarQueryParameter['begin_time'] = beginTime;
                            }
                            if (endTime !== undefined) {
                                localVarQueryParameter['end_time'] = endTime;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['limit'] = limit;
                            }
                            if (cursor !== undefined) {
                                localVarQueryParameter['cursor'] = cursor;
                            }
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
         * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
         * @summary RetrieveCashDrawerShift
         * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
         * @param {string} shiftId The shift ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCashDrawerShift: function (locationId, shiftId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, queryParameters, key, key, headersFromBaseOptions;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'locationId' is not null or undefined
                            if (locationId === null || locationId === undefined) {
                                throw new base_1.RequiredError('locationId', 'Required parameter locationId was null or undefined when calling retrieveCashDrawerShift.');
                            }
                            // verify required parameter 'shiftId' is not null or undefined
                            if (shiftId === null || shiftId === undefined) {
                                throw new base_1.RequiredError('shiftId', 'Required parameter shiftId was null or undefined when calling retrieveCashDrawerShift.');
                            }
                            localVarPath = "/v2/cash-drawers/shifts/{shift_id}"
                                .replace("{" + "shift_id" + "}", encodeURIComponent(String(shiftId)));
                            localVarUrlObj = new URL(localVarPath, 'https://example.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("oauth2", ["CASH_DRAWER_READ"])];
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
                            if (locationId !== undefined) {
                                localVarQueryParameter['location_id'] = locationId;
                            }
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
 * CashDrawersApi - functional programming interface
 * @export
 */
exports.CashDrawersApiFp = function (configuration) {
    return {
        /**
         * Provides a paginated list of events for a single cash drawer shift.
         * @summary ListCashDrawerShiftEvents
         * @param {string} locationId The ID of the location to list cash drawer shifts for.
         * @param {string} shiftId The shift ID.
         * @param {number} [limit] Number of resources to be returned in a page of results (200 by default, 1000 max).
         * @param {string} [cursor] Opaque cursor for fetching the next page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashDrawerShiftEvents: function (locationId, shiftId, limit, cursor, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CashDrawersApiAxiosParamCreator(configuration).listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, options)];
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
         * Provides the details for all of the cash drawer shifts for a location in a date range.
         * @summary ListCashDrawerShifts
         * @param {string} locationId The ID of the location to query for a list of cash drawer shifts.
         * @param {string} [sortOrder] The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
         * @param {string} [beginTime] The inclusive start time of the query on opened_at, in ISO 8601 format.
         * @param {string} [endTime] The exclusive end date of the query on opened_at, in ISO 8601 format.
         * @param {number} [limit] Number of cash drawer shift events in a page of results (200 by default, 1000 max).
         * @param {string} [cursor] Opaque cursor for fetching the next page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashDrawerShifts: function (locationId, sortOrder, beginTime, endTime, limit, cursor, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CashDrawersApiAxiosParamCreator(configuration).listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, options)];
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
         * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
         * @summary RetrieveCashDrawerShift
         * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
         * @param {string} shiftId The shift ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCashDrawerShift: function (locationId, shiftId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.CashDrawersApiAxiosParamCreator(configuration).retrieveCashDrawerShift(locationId, shiftId, options)];
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
 * CashDrawersApi - factory interface
 * @export
 */
exports.CashDrawersApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Provides a paginated list of events for a single cash drawer shift.
         * @summary ListCashDrawerShiftEvents
         * @param {string} locationId The ID of the location to list cash drawer shifts for.
         * @param {string} shiftId The shift ID.
         * @param {number} [limit] Number of resources to be returned in a page of results (200 by default, 1000 max).
         * @param {string} [cursor] Opaque cursor for fetching the next page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashDrawerShiftEvents: function (locationId, shiftId, limit, cursor, options) {
            return exports.CashDrawersApiFp(configuration).listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Provides the details for all of the cash drawer shifts for a location in a date range.
         * @summary ListCashDrawerShifts
         * @param {string} locationId The ID of the location to query for a list of cash drawer shifts.
         * @param {string} [sortOrder] The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
         * @param {string} [beginTime] The inclusive start time of the query on opened_at, in ISO 8601 format.
         * @param {string} [endTime] The exclusive end date of the query on opened_at, in ISO 8601 format.
         * @param {number} [limit] Number of cash drawer shift events in a page of results (200 by default, 1000 max).
         * @param {string} [cursor] Opaque cursor for fetching the next page of results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCashDrawerShifts: function (locationId, sortOrder, beginTime, endTime, limit, cursor, options) {
            return exports.CashDrawersApiFp(configuration).listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
         * @summary RetrieveCashDrawerShift
         * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
         * @param {string} shiftId The shift ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCashDrawerShift: function (locationId, shiftId, options) {
            return exports.CashDrawersApiFp(configuration).retrieveCashDrawerShift(locationId, shiftId, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * CashDrawersApi - object-oriented interface
 * @export
 * @class CashDrawersApi
 * @extends {BaseAPI}
 */
var CashDrawersApi = /** @class */ (function (_super) {
    __extends(CashDrawersApi, _super);
    function CashDrawersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provides a paginated list of events for a single cash drawer shift.
     * @summary ListCashDrawerShiftEvents
     * @param {string} locationId The ID of the location to list cash drawer shifts for.
     * @param {string} shiftId The shift ID.
     * @param {number} [limit] Number of resources to be returned in a page of results (200 by default, 1000 max).
     * @param {string} [cursor] Opaque cursor for fetching the next page of results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashDrawersApi
     */
    CashDrawersApi.prototype.listCashDrawerShiftEvents = function (locationId, shiftId, limit, cursor, options) {
        var _this = this;
        return exports.CashDrawersApiFp(this.configuration).listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Provides the details for all of the cash drawer shifts for a location in a date range.
     * @summary ListCashDrawerShifts
     * @param {string} locationId The ID of the location to query for a list of cash drawer shifts.
     * @param {string} [sortOrder] The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
     * @param {string} [beginTime] The inclusive start time of the query on opened_at, in ISO 8601 format.
     * @param {string} [endTime] The exclusive end date of the query on opened_at, in ISO 8601 format.
     * @param {number} [limit] Number of cash drawer shift events in a page of results (200 by default, 1000 max).
     * @param {string} [cursor] Opaque cursor for fetching the next page of results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashDrawersApi
     */
    CashDrawersApi.prototype.listCashDrawerShifts = function (locationId, sortOrder, beginTime, endTime, limit, cursor, options) {
        var _this = this;
        return exports.CashDrawersApiFp(this.configuration).listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
     * @summary RetrieveCashDrawerShift
     * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
     * @param {string} shiftId The shift ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashDrawersApi
     */
    CashDrawersApi.prototype.retrieveCashDrawerShift = function (locationId, shiftId, options) {
        var _this = this;
        return exports.CashDrawersApiFp(this.configuration).retrieveCashDrawerShift(locationId, shiftId, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return CashDrawersApi;
}(base_1.BaseAPI));
exports.CashDrawersApi = CashDrawersApi;