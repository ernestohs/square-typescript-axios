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
 * Defines parameters in a  [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents) endpoint request.
 * @export
 * @class ListSubscriptionEventsRequest
 */
export declare class ListSubscriptionEventsRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @type {string}
     * @memberof ListSubscriptionEventsRequest
     */
    cursor?: string;
    /**
     * The upper limit on the number of subscription events to return  in the response.   Default: `200`
     * @type {number}
     * @memberof ListSubscriptionEventsRequest
     */
    limit?: number;
}
