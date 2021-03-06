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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetPaymentRefundResponse } from '../models';
import { ListPaymentRefundsResponse } from '../models';
import { RefundPaymentRequest } from '../models';
import { RefundPaymentResponse } from '../models';
/**
 * RefundsApi - axios parameter creator
 * @export
 */
export declare const RefundsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrieves a specific refund using the `refund_id`.
     * @summary GetPaymentRefund
     * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentRefund: (refundId: string, options?: any) => Promise<RequestArgs>;
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
    listPaymentRefunds: (beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any) => Promise<RequestArgs>;
    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * @summary RefundPayment
     * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refundPayment: (body: RefundPaymentRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * RefundsApi - functional programming interface
 * @export
 */
export declare const RefundsApiFp: (configuration?: Configuration) => {
    /**
     * Retrieves a specific refund using the `refund_id`.
     * @summary GetPaymentRefund
     * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentRefund(refundId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPaymentRefundResponse>>;
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
    listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListPaymentRefundsResponse>>;
    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * @summary RefundPayment
     * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refundPayment(body: RefundPaymentRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RefundPaymentResponse>>;
};
/**
 * RefundsApi - factory interface
 * @export
 */
export declare const RefundsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrieves a specific refund using the `refund_id`.
     * @summary GetPaymentRefund
     * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentRefund(refundId: string, options?: any): AxiosPromise<GetPaymentRefundResponse>;
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
    listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any): AxiosPromise<ListPaymentRefundsResponse>;
    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * @summary RefundPayment
     * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refundPayment(body: RefundPaymentRequest, options?: any): AxiosPromise<RefundPaymentResponse>;
};
/**
 * RefundsApi - object-oriented interface
 * @export
 * @class RefundsApi
 * @extends {BaseAPI}
 */
export declare class RefundsApi extends BaseAPI {
    /**
     * Retrieves a specific refund using the `refund_id`.
     * @summary GetPaymentRefund
     * @param {string} refundId Unique ID for the desired &#x60;PaymentRefund&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    getPaymentRefund(refundId: string, options?: any): Promise<import("axios").AxiosResponse<GetPaymentRefundResponse>>;
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
    listPaymentRefunds(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, status?: string, sourceType?: string, limit?: number, options?: any): Promise<import("axios").AxiosResponse<ListPaymentRefundsResponse>>;
    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * @summary RefundPayment
     * @param {RefundPaymentRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefundsApi
     */
    refundPayment(body: RefundPaymentRequest, options?: any): Promise<import("axios").AxiosResponse<RefundPaymentResponse>>;
}
