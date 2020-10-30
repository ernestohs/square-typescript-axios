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
 * Defines the query parameters that can be included in a request to the [ListRefunds](#endpoint-listrefunds) endpoint.  Deprecated - recommend using [SearchOrders](#endpoint-orders-searchorders)
 * @export
 * @class ListRefundsRequest
 */
export declare class ListRefundsRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
     * @type {string}
     * @memberof ListRefundsRequest
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
     * @type {string}
     * @memberof ListRefundsRequest
     */
    end_time?: string;
    /**
     * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).  Default value: `DESC` See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof ListRefundsRequest
     */
    sort_order?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
     * @type {string}
     * @memberof ListRefundsRequest
     */
    cursor?: string;
}
