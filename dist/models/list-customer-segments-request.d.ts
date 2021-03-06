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
/**
 * Defines the valid parameters for requests to __ListCustomerSegments__.
 * @export
 * @class ListCustomerSegmentsRequest
 */
export declare class ListCustomerSegmentsRequest {
    /**
     * A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to retrieve the next set of query results.  See the [Pagination guide](https://developer.squareup.com/docs/docs/working-with-apis/pagination) for more information.
     * @type {string}
     * @memberof ListCustomerSegmentsRequest
     */
    cursor?: string;
}
