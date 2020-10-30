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
 * @class V1ListEmployeesRequest
 */
export declare class V1ListEmployeesRequest {
    /**
     * The order in which employees are listed in the response, based on their created_at field.      Default value: ASC See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    order?: string;
    /**
     * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    begin_updated_at?: string;
    /**
     * If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    end_updated_at?: string;
    /**
     * If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    begin_created_at?: string;
    /**
     * If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    end_created_at?: string;
    /**
     * If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE). See [V1ListEmployeesRequestStatus](#type-v1listemployeesrequeststatus) for possible values
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    status?: string;
    /**
     * If provided, the endpoint returns only employee entities with the specified external_id.
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    external_id?: string;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     * @type {number}
     * @memberof V1ListEmployeesRequest
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     * @type {string}
     * @memberof V1ListEmployeesRequest
     */
    batch_token?: string;
}
