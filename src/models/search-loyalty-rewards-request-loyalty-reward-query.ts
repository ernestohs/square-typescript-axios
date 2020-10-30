/* tslint:disable */
/* eslint-disable */
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



import { Field, ObjectType } from '@nestjs/graphql';

/**
 * The set of search requirements.
 * @export
 * @class SearchLoyaltyRewardsRequestLoyaltyRewardQuery
 */
@ObjectType()
export class SearchLoyaltyRewardsRequestLoyaltyRewardQuery {
    /**
     * The ID of the `loyalty account` to which the loyalty reward belongs.
     * @type {string}
     * @memberof SearchLoyaltyRewardsRequestLoyaltyRewardQuery
     */
    @Field() 
    loyalty_account_id: string;
    /**
     * The status of the loyalty reward. See [LoyaltyRewardStatus](#type-loyaltyrewardstatus) for possible values
     * @type {string}
     * @memberof SearchLoyaltyRewardsRequestLoyaltyRewardQuery
     */
    @Field() 
    status?: string;
}


