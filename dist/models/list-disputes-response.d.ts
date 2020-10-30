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
import { Dispute } from './dispute';
/**
 * Defines fields in a ListDisputes response.
 * @export
 * @class ListDisputesResponse
 */
export declare class ListDisputesResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof ListDisputesResponse
     */
    errors?: Array<Error>;
    /**
     * The list of Disputes.
     * @type {Array<Dispute>}
     * @memberof ListDisputesResponse
     */
    disputes?: Array<Dispute>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response. For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
     * @type {string}
     * @memberof ListDisputesResponse
     */
    cursor?: string;
}