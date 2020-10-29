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
import { SearchLoyaltyRewardsRequestLoyaltyRewardQuery } from './search-loyalty-rewards-request-loyalty-reward-query';
/**
 * A request to search for loyalty rewards.
 * @export
 * @interface SearchLoyaltyRewardsRequest
 */
export interface SearchLoyaltyRewardsRequest {
    /**
     *
     * @type {SearchLoyaltyRewardsRequestLoyaltyRewardQuery}
     * @memberof SearchLoyaltyRewardsRequest
     */
    query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
    /**
     * The maximum number of results to return in the response.
     * @type {number}
     * @memberof SearchLoyaltyRewardsRequest
     */
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to  this endpoint. Provide this to retrieve the next set of  results for the original query. For more information,  see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination).
     * @type {string}
     * @memberof SearchLoyaltyRewardsRequest
     */
    cursor?: string;
}
