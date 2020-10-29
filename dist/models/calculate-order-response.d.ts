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
import { Order } from './order';
/**
 *
 * @export
 * @interface CalculateOrderResponse
 */
export interface CalculateOrderResponse {
    /**
     *
     * @type {Order}
     * @memberof CalculateOrderResponse
     */
    order?: Order;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof CalculateOrderResponse
     */
    errors?: Array<Error>;
}
