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
import { Subscription } from './subscription';
/**
 * Defines the fields that are included in the response from the [SearchSubscriptions](#endpoint-subscriptions-searchsubscriptions) endpoint.
 * @export
 * @class SearchSubscriptionsResponse
 */
export declare class SearchSubscriptionsResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof SearchSubscriptionsResponse
     */
    errors?: Array<Error>;
    /**
     * The search result.
     * @type {Array<Subscription>}
     * @memberof SearchSubscriptionsResponse
     */
    subscriptions?: Array<Subscription>;
    /**
     * When a response is truncated, it includes a cursor that you can  use in a subsequent request to fetch the next set of subscriptions.  If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @type {string}
     * @memberof SearchSubscriptionsResponse
     */
    cursor?: string;
}