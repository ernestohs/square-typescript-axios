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
 * Defines the body parameters that can be provided in a request to the [CreateCustomerGroup](#endpoint-createcustomegroup) endpoint.
 * @export
 * @interface CreateCustomerGroupRequest
 */
export interface CreateCustomerGroupRequest {
    /**
     * The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) guide for more information.
     * @type {string}
     * @memberof CreateCustomerGroupRequest
     */
    idempotency_key?: string;
    /**
     *
     * @type {CustomerGroup}
     * @memberof CreateCustomerGroupRequest
     */
    group: CustomerGroup;
}