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
import { Refund } from './refund';
/**
 * Defines the fields that are included in the response body of a request to the [ListRefunds](#endpoint-listrefunds) endpoint.  One of `errors` or `refunds` is present in a given response (never both).
 * @export
 * @class ListRefundsResponse
 */
export declare class ListRefundsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListRefundsResponse
     */
    errors?: Array<Error>;
    /**
     * An array of refunds that match your query.
     * @type {Array<Refund>}
     * @memberof ListRefundsResponse
     */
    refunds?: Array<Refund>;
    /**
     * A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the `cursor` parameter in a subsequent request to this endpoint.  See [Paginating results](#paginatingresults) for more information.
     * @type {string}
     * @memberof ListRefundsResponse
     */
    cursor?: string;
}
