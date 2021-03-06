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


import { LoyaltyEvent } from './loyalty-event';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A response that includes the `LoyaltyEvent` published for redeeming the reward.
 * @export
 * @class RedeemLoyaltyRewardResponse
 */
@ObjectType()
export class RedeemLoyaltyRewardResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RedeemLoyaltyRewardResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {LoyaltyEvent}
     * @memberof RedeemLoyaltyRewardResponse
     */
    
    @Field(() => LoyaltyEvent, { nullable: true })
    event?: LoyaltyEvent;
}


