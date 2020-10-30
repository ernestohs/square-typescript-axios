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
 * Provides metadata when the event `type` is `CREATE_REWARD`.
 * @export
 * @class LoyaltyEventCreateReward
 */
@ObjectType()
export class LoyaltyEventCreateReward {
    /**
     * The ID of the `loyalty program`.
     * @type {string}
     * @memberof LoyaltyEventCreateReward
     */
    @Field() 
    loyalty_program_id: string;
    /**
     * The Square-assigned ID of the created `loyalty reward`. This field is returned only if the event source is `LOYALTY_API`.
     * @type {string}
     * @memberof LoyaltyEventCreateReward
     */
    @Field() 
    reward_id?: string;
    /**
     * The loyalty points used to create the reward.
     * @type {number}
     * @memberof LoyaltyEventCreateReward
     */
    @Field() 
    points: number;
}


