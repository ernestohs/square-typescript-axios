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
import { Merchant } from './merchant';
/**
 * The response object returned by the [ListMerchant](#endpoint-listmerchant) endpoint.
 * @export
 * @interface ListMerchantsResponse
 */
export interface ListMerchantsResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof ListMerchantsResponse
     */
    errors?: Array<Error>;
    /**
     * The requested `Merchant` entities.
     * @type {Array<Merchant>}
     * @memberof ListMerchantsResponse
     */
    merchant?: Array<Merchant>;
    /**
     * If the  response is truncated, the cursor to use in next  request to fetch next set of objects.
     * @type {number}
     * @memberof ListMerchantsResponse
     */
    cursor?: number;
}
