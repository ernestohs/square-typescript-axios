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



import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Retrieves a list of refunds for the account making the request.  Max results per page: 100
 * @export
 * @class ListPaymentRefundsRequest
 */
@ObjectType()
export class ListPaymentRefundsRequest {
    /**
     * Timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    begin_time?: string;
    /**
     * Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    end_time?: string;
    /**
     * The order in which results are listed. - `ASC` - oldest to newest - `DESC` - newest to oldest (default).
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    sort_order?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
    /**
     * Limit results to the location supplied. By default, results are returned for all locations associated with the merchant.
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * If provided, only refunds with the given status are returned. For a list of refund status values, see `PaymentRefund`.  Default: If omitted refunds are returned regardless of status.
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    status?: string;
    /**
     * If provided, only refunds with the given source type are returned. - `CARD` - List refunds only for payments where card was specified as payment source.  Default: If omitted refunds are returned regardless of source type.
     * @type {string}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    source_type?: string;
    /**
     * Maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, at most 100 results will be returned.  Default: `100`
     * @type {number}
     * @memberof ListPaymentRefundsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
}


