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
import { GetPaymentRefundResponse } from '../models';
// @ts-ignore
import { ListPaymentRefundsResponse } from '../models';
// @ts-ignore
import { RefundPaymentRequest } from '../models';
// @ts-ignore
import { RefundPaymentResponse } from '../models';
/**
 * RefundsApi - axios parameter creator
 * @export
 */
export const RefundsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific refund using the `refund_id`.
         * @summary GetPaymentRefund
         * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentRefund: async (refundId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'refundId' is not null or undefined
            if (refundId === null || refundId === undefined) {
                throw new RequiredError('refundId','Required parameter refundId was null or undefined when calling getPaymentRefund.');
            }
            const localVarPath = `/v2/refunds/{refund_id}`
                .replace(`{${"refund_id"}}`, encodeURIComponent(String(refundId)));
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
                    ? await configuration.accessToken("oauth2", ["PAYMENTS_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
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
        listPaymentRefunds: async (beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/refunds`;
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
                    ? await configuration.accessToken("oauth2", ["PAYMENTS_READ"])
                    : await configuration.accessToken;
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
         * Refunds a payment. You can refund the entire payment amount or a  portion of it.
         * @summary RefundPayment
         * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment: async (body: RefundPaymentRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling refundPayment.');
            }
            const localVarPath = `/v2/refunds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["PAYMENTS_WRITE"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RefundsApi - functional programming interface
 * @export
 */
export const RefundsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a specific refund using the `refund_id`.
         * @summary GetPaymentRefund
         * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPaymentRefund(refundId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPaymentRefundResponse>> {
            const localVarAxiosArgs = await RefundsApiAxiosParamCreator(configuration).getPaymentRefund(refundId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
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
        async listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListPaymentRefundsResponse>> {
            const localVarAxiosArgs = await RefundsApiAxiosParamCreator(configuration).listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Refunds a payment. You can refund the entire payment amount or a  portion of it.
         * @summary RefundPayment
         * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refundPayment(body: RefundPaymentRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RefundPaymentResponse>> {
            const localVarAxiosArgs = await RefundsApiAxiosParamCreator(configuration).refundPayment(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RefundsApi - factory interface
 * @export
 */
export const RefundsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a specific refund using the `refund_id`.
         * @summary GetPaymentRefund
         * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPaymentRefund(refundId: string, options?: any): AxiosPromise<GetPaymentRefundResponse> {
            return RefundsApiFp(configuration).getPaymentRefund(refundId, options).then((request) => request(axios, basePath));
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
        listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any): AxiosPromise<ListPaymentRefundsResponse> {
            return RefundsApiFp(configuration).listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Refunds a payment. You can refund the entire payment amount or a  portion of it.
         * @summary RefundPayment
         * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment(body: RefundPaymentRequest, options?: any): AxiosPromise<RefundPaymentResponse> {
            return RefundsApiFp(configuration).refundPayment(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RefundsApi - object-oriented interface
 * @export
 * @class RefundsApi
 * @extends {BaseAPI}
 */
export class RefundsApi extends BaseAPI {
    /**
     * Retrieves a specific refund using the `refund_id`.
     * @summary GetPaymentRefund
     * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    public getPaymentRefund(refundId: string, options?: any) {
        return RefundsApiFp(this.configuration).getPaymentRefund(refundId, options).then((request) => request(this.axios, this.basePath));
    }

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
    public listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any) {
        return RefundsApiFp(this.configuration).listPaymentRefunds(beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * @summary RefundPayment
     * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    public refundPayment(body: RefundPaymentRequest, options?: any) {
        return RefundsApiFp(this.configuration).refundPayment(body, options).then((request) => request(this.axios, this.basePath));
    }
}
