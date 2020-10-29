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
import { LoyaltyEventAdjustPoints } from './loyalty-event-adjust-points';
/**
 * A request to adjust (add or subtract) points manually.
 * @export
 * @interface AdjustLoyaltyPointsRequest
 */
export interface AdjustLoyaltyPointsRequest {
    /**
     * A unique string that identifies this `AdjustLoyaltyPoints` request.  Keys can be any valid string, but must be unique for every request.
     * @type {string}
     * @memberof AdjustLoyaltyPointsRequest
     */
    idempotency_key: string;
    /**
     *
     * @type {LoyaltyEventAdjustPoints}
     * @memberof AdjustLoyaltyPointsRequest
     */
    adjust_points: LoyaltyEventAdjustPoints;
}
