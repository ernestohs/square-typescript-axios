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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ListCashDrawerShiftEventsResponse } from '../models';
// @ts-ignore
import { ListCashDrawerShiftsResponse } from '../models';
// @ts-ignore
import { RetrieveCashDrawerShiftResponse } from '../models';
/**
 * CashDrawersApi - axios parameter creator
 * @export
 */
export const CashDrawersApiAxiosParamCreator = function (configuration?: Configuration) {
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
        listCashDrawerShiftEvents: async (locationId: string, shiftId: string, limit?: number, cursor?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling listCashDrawerShiftEvents.');
            }
            // verify required parameter 'shiftId' is not null or undefined
            if (shiftId === null || shiftId === undefined) {
                throw new RequiredError('shiftId','Required parameter shiftId was null or undefined when calling listCashDrawerShiftEvents.');
            }
            const localVarPath = `/v2/cash-drawers/shifts/{shift_id}/events`
                .replace(`{${"shift_id"}}`, encodeURIComponent(String(shiftId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["CASH_DRAWER_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['location_id'] = locationId;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
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
        listCashDrawerShifts: async (locationId: string, sortOrder?: string, beginTime?: string, endTime?: string, limit?: number, cursor?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling listCashDrawerShifts.');
            }
            const localVarPath = `/v2/cash-drawers/shifts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["CASH_DRAWER_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

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


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
         * @summary RetrieveCashDrawerShift
         * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
         * @param {string} shiftId The shift ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCashDrawerShift: async (locationId: string, shiftId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling retrieveCashDrawerShift.');
            }
            // verify required parameter 'shiftId' is not null or undefined
            if (shiftId === null || shiftId === undefined) {
                throw new RequiredError('shiftId','Required parameter shiftId was null or undefined when calling retrieveCashDrawerShift.');
            }
            const localVarPath = `/v2/cash-drawers/shifts/{shift_id}`
                .replace(`{${"shift_id"}}`, encodeURIComponent(String(shiftId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["CASH_DRAWER_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['location_id'] = locationId;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CashDrawersApi - functional programming interface
 * @export
 */
export const CashDrawersApiFp = function(configuration?: Configuration) {
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
        async listCashDrawerShiftEvents(locationId: string, shiftId: string, limit?: number, cursor?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCashDrawerShiftEventsResponse>> {
            const localVarAxiosArgs = await CashDrawersApiAxiosParamCreator(configuration).listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
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
        async listCashDrawerShifts(locationId: string, sortOrder?: string, beginTime?: string, endTime?: string, limit?: number, cursor?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCashDrawerShiftsResponse>> {
            const localVarAxiosArgs = await CashDrawersApiAxiosParamCreator(configuration).listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
         * @summary RetrieveCashDrawerShift
         * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
         * @param {string} shiftId The shift ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveCashDrawerShift(locationId: string, shiftId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveCashDrawerShiftResponse>> {
            const localVarAxiosArgs = await CashDrawersApiAxiosParamCreator(configuration).retrieveCashDrawerShift(locationId, shiftId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CashDrawersApi - factory interface
 * @export
 */
export const CashDrawersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
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
        listCashDrawerShiftEvents(locationId: string, shiftId: string, limit?: number, cursor?: string, options?: any): AxiosPromise<ListCashDrawerShiftEventsResponse> {
            return CashDrawersApiFp(configuration).listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, options).then((request) => request(axios, basePath));
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
        listCashDrawerShifts(locationId: string, sortOrder?: string, beginTime?: string, endTime?: string, limit?: number, cursor?: string, options?: any): AxiosPromise<ListCashDrawerShiftsResponse> {
            return CashDrawersApiFp(configuration).listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, options).then((request) => request(axios, basePath));
        },
        /**
         * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
         * @summary RetrieveCashDrawerShift
         * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
         * @param {string} shiftId The shift ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCashDrawerShift(locationId: string, shiftId: string, options?: any): AxiosPromise<RetrieveCashDrawerShiftResponse> {
            return CashDrawersApiFp(configuration).retrieveCashDrawerShift(locationId, shiftId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CashDrawersApi - object-oriented interface
 * @export
 * @class CashDrawersApi
 * @extends {BaseAPI}
 */
export class CashDrawersApi extends BaseAPI {
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
    public listCashDrawerShiftEvents(locationId: string, shiftId: string, limit?: number, cursor?: string, options?: any) {
        return CashDrawersApiFp(this.configuration).listCashDrawerShiftEvents(locationId, shiftId, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

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
    public listCashDrawerShifts(locationId: string, sortOrder?: string, beginTime?: string, endTime?: string, limit?: number, cursor?: string, options?: any) {
        return CashDrawersApiFp(this.configuration).listCashDrawerShifts(locationId, sortOrder, beginTime, endTime, limit, cursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
     * @summary RetrieveCashDrawerShift
     * @param {string} locationId The ID of the location to retrieve cash drawer shifts from.
     * @param {string} shiftId The shift ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CashDrawersApi
     */
    public retrieveCashDrawerShift(locationId: string, shiftId: string, options?: any) {
        return CashDrawersApiFp(this.configuration).retrieveCashDrawerShift(locationId, shiftId, options).then((request) => request(this.axios, this.basePath));
    }
}
