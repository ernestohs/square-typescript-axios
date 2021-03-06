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
 * @class LoyaltyReward
 */
export declare class LoyaltyReward {
    /**
     * The Square-assigned ID of the loyalty reward.
     * @type {string}
     * @memberof LoyaltyReward
     */
    id?: string;
    /**
     * The status of a loyalty reward. See [LoyaltyRewardStatus](#type-loyaltyrewardstatus) for possible values
     * @type {string}
     * @memberof LoyaltyReward
     */
    status?: string;
    /**
     * The Square-assigned ID of the `loyalty account` to which the reward belongs.
     * @type {string}
     * @memberof LoyaltyReward
     */
    loyalty_account_id: string;
    /**
     * The Square-assigned ID of the `reward tier` used to create the reward.
     * @type {string}
     * @memberof LoyaltyReward
     */
    reward_tier_id: string;
    /**
     * The number of loyalty points used for the reward.
     * @type {number}
     * @memberof LoyaltyReward
     */
    points?: number;
    /**
     * The Square-assigned ID of the `order` to which the reward is attached.
     * @type {string}
     * @memberof LoyaltyReward
     */
    order_id?: string;
    /**
     * The timestamp when the reward was created, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyReward
     */
    created_at?: string;
    /**
     * The timestamp when the reward was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyReward
     */
    updated_at?: string;
    /**
     * The timestamp when the reward was redeemed, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyReward
     */
    redeemed_at?: string;
}
