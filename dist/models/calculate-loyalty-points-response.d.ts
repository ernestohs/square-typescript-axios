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
 * A response that includes the points that the buyer can earn from  a specified purchase.
 * @export
 * @interface CalculateLoyaltyPointsResponse
 */
export interface CalculateLoyaltyPointsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof CalculateLoyaltyPointsResponse
     */
    errors?: Array<Error>;
    /**
     * The points that the buyer can earn from a specified purchase.
     * @type {number}
     * @memberof CalculateLoyaltyPointsResponse
     */
    points?: number;
}
