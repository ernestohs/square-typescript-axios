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
import { LoyaltyReward } from './loyalty-reward';
/**
 * A response that includes the loyalty rewards satisfying the search criteria.
 * @export
 * @class SearchLoyaltyRewardsResponse
 */
export declare class SearchLoyaltyRewardsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof SearchLoyaltyRewardsResponse
     */
    errors?: Array<Error>;
    /**
     * The loyalty rewards that satisfy the search criteria. These are returned in descending order by `updated_at`.
     * @type {Array<LoyaltyReward>}
     * @memberof SearchLoyaltyRewardsResponse
     */
    rewards?: Array<LoyaltyReward>;
    /**
     * The pagination cursor to be used in a subsequent  request. If empty, this is the final response.
     * @type {string}
     * @memberof SearchLoyaltyRewardsResponse
     */
    cursor?: string;
}
