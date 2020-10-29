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
import { CustomerGroup } from './customer-group';
/**
 * Defines the fields that are included in the response body of a request to the [UpdateCustomerGroup](#endpoint-updatecustomergroup) endpoint.  One of `errors` or `group` is present in a given response (never both).
 * @export
 * @interface UpdateCustomerGroupResponse
 */
export interface UpdateCustomerGroupResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof UpdateCustomerGroupResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {CustomerGroup}
     * @memberof UpdateCustomerGroupResponse
     */
    group?: CustomerGroup;
}
