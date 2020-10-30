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
 * Provides metadata when the event `type` is `ADJUST_POINTS`.
 * @export
 * @class LoyaltyEventAdjustPoints
 */
export declare class LoyaltyEventAdjustPoints {
    /**
     * The Square-assigned ID of the `loyalty program`.
     * @type {string}
     * @memberof LoyaltyEventAdjustPoints
     */
    loyalty_program_id?: string;
    /**
     * The number of points added or removed.
     * @type {number}
     * @memberof LoyaltyEventAdjustPoints
     */
    points: number;
    /**
     * The reason for the adjustment of points.
     * @type {string}
     * @memberof LoyaltyEventAdjustPoints
     */
    reason?: string;
}
