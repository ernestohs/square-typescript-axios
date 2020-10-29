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
import { LoyaltyEventAccumulatePoints } from './loyalty-event-accumulate-points';
import { LoyaltyEventAdjustPoints } from './loyalty-event-adjust-points';
import { LoyaltyEventCreateReward } from './loyalty-event-create-reward';
import { LoyaltyEventDeleteReward } from './loyalty-event-delete-reward';
import { LoyaltyEventExpirePoints } from './loyalty-event-expire-points';
import { LoyaltyEventOther } from './loyalty-event-other';
import { LoyaltyEventRedeemReward } from './loyalty-event-redeem-reward';
/**
 * Provides information about a loyalty event.  For more information, see [Loyalty events](/docs/loyalty-api/overview/#loyalty-events).
 * @export
 * @interface LoyaltyEvent
 */
export interface LoyaltyEvent {
    /**
     * The Square-assigned ID of the loyalty event.
     * @type {string}
     * @memberof LoyaltyEvent
     */
    id: string;
    /**
     * The type of the loyalty event. See [LoyaltyEventType](#type-loyaltyeventtype) for possible values
     * @type {string}
     * @memberof LoyaltyEvent
     */
    type: string;
    /**
     * The timestamp when the event was created, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyEvent
     */
    created_at: string;
    /**
     *
     * @type {LoyaltyEventAccumulatePoints}
     * @memberof LoyaltyEvent
     */
    accumulate_points?: LoyaltyEventAccumulatePoints;
    /**
     *
     * @type {LoyaltyEventCreateReward}
     * @memberof LoyaltyEvent
     */
    create_reward?: LoyaltyEventCreateReward;
    /**
     *
     * @type {LoyaltyEventRedeemReward}
     * @memberof LoyaltyEvent
     */
    redeem_reward?: LoyaltyEventRedeemReward;
    /**
     *
     * @type {LoyaltyEventDeleteReward}
     * @memberof LoyaltyEvent
     */
    delete_reward?: LoyaltyEventDeleteReward;
    /**
     *
     * @type {LoyaltyEventAdjustPoints}
     * @memberof LoyaltyEvent
     */
    adjust_points?: LoyaltyEventAdjustPoints;
    /**
     * The ID of the `loyalty account` in which the event occurred.
     * @type {string}
     * @memberof LoyaltyEvent
     */
    loyalty_account_id: string;
    /**
     * The ID of the `location` where the event occurred.
     * @type {string}
     * @memberof LoyaltyEvent
     */
    location_id?: string;
    /**
     * Defines whether the event was generated by the Square Point of Sale. See [LoyaltyEventSource](#type-loyaltyeventsource) for possible values
     * @type {string}
     * @memberof LoyaltyEvent
     */
    source: string;
    /**
     *
     * @type {LoyaltyEventExpirePoints}
     * @memberof LoyaltyEvent
     */
    expire_points?: LoyaltyEventExpirePoints;
    /**
     *
     * @type {LoyaltyEventOther}
     * @memberof LoyaltyEvent
     */
    other_event?: LoyaltyEventOther;
}
