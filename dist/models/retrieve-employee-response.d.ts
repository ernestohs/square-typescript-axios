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
import { Employee } from './employee';
/**
 *
 * @export
 * @interface RetrieveEmployeeResponse
 */
export interface RetrieveEmployeeResponse {
    /**
     *
     * @type {Employee}
     * @memberof RetrieveEmployeeResponse
     */
    employee?: Employee;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveEmployeeResponse
     */
    errors?: Array<Error>;
}