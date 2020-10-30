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


import { LoyaltyProgramAccrualRule } from './loyalty-program-accrual-rule';
import { LoyaltyProgramExpirationPolicy } from './loyalty-program-expiration-policy';
import { LoyaltyProgramRewardTier } from './loyalty-program-reward-tier';
import { LoyaltyProgramTerminology } from './loyalty-program-terminology';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class LoyaltyProgram
 */
@ObjectType()
export class LoyaltyProgram {
    /**
     * The Square-assigned ID of the loyalty program. Updates to  the loyalty program do not modify the identifier.
     * @type {string}
     * @memberof LoyaltyProgram
     */
    
    @Field({ nullable: false })
    id: string;
    /**
     * Whether the program is currently active. See [LoyaltyProgramStatus](#type-loyaltyprogramstatus) for possible values
     * @type {string}
     * @memberof LoyaltyProgram
     */
    
    @Field({ nullable: false })
    status: string;
    /**
     * The list of rewards for buyers, sorted by ascending points.
     * @type {Array<LoyaltyProgramRewardTier>}
     * @memberof LoyaltyProgram
     */
    
    @Field(() => [LoyaltyProgramRewardTier], { nullable: false })
    reward_tiers: Array<LoyaltyProgramRewardTier>;
    /**
     * 
     * @type {LoyaltyProgramExpirationPolicy}
     * @memberof LoyaltyProgram
     */
    
    @Field(() => LoyaltyProgramExpirationPolicy, { nullable: true })
    expiration_policy?: LoyaltyProgramExpirationPolicy;
    /**
     * 
     * @type {LoyaltyProgramTerminology}
     * @memberof LoyaltyProgram
     */
    
    @Field(() => LoyaltyProgramTerminology, { nullable: false })
    terminology: LoyaltyProgramTerminology;
    /**
     * The `locations` at which the program is active.
     * @type {Array<string>}
     * @memberof LoyaltyProgram
     */
    
    location_ids: Array<string>;
    /**
     * The timestamp when the program was created, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyProgram
     */
    
    @Field({ nullable: false })
    created_at: string;
    /**
     * The timestamp when the reward was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyProgram
     */
    
    @Field({ nullable: false })
    updated_at: string;
    /**
     * Defines how buyers can earn loyalty points.
     * @type {Array<LoyaltyProgramAccrualRule>}
     * @memberof LoyaltyProgram
     */
    
    @Field(() => [LoyaltyProgramAccrualRule], { nullable: false })
    accrual_rules: Array<LoyaltyProgramAccrualRule>;
}


