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
 * Provides metadata when the event `type` is `EXPIRE_POINTS`.
 * @export
 * @interface LoyaltyEventExpirePoints
 */
export interface LoyaltyEventExpirePoints {
    /**
     * The Square-assigned ID of the `loyalty program`.
     * @type {string}
     * @memberof LoyaltyEventExpirePoints
     */
    loyalty_program_id: string;
    /**
     * The number of points expired.
     * @type {number}
     * @memberof LoyaltyEventExpirePoints
     */
    points: number;
}