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
 *
 * @export
 * @interface ListEmployeesRequest
 */
export interface ListEmployeesRequest {
    /**
     *
     * @type {string}
     * @memberof ListEmployeesRequest
     */
    location_id?: string;
    /**
     * Specifies the EmployeeStatus to filter the employee by. See [EmployeeStatus](#type-employeestatus) for possible values
     * @type {string}
     * @memberof ListEmployeesRequest
     */
    status?: string;
    /**
     * The number of employees to be returned on each page.
     * @type {number}
     * @memberof ListEmployeesRequest
     */
    limit?: number;
    /**
     * The token required to retrieve the specified page of results.
     * @type {string}
     * @memberof ListEmployeesRequest
     */
    cursor?: string;
}
