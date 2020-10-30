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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines an accrual rule, which is how buyers can earn points.
 * @export
 * @class LoyaltyProgramAccrualRule
 */
@ObjectType()
export class LoyaltyProgramAccrualRule {
    /**
     * The type of the accrual rule that defines how buyers can earn points. See [LoyaltyProgramAccrualRuleType](#type-loyaltyprogramaccrualruletype) for possible values
     * @type {string}
     * @memberof LoyaltyProgramAccrualRule
     */
    
    @Field({ nullable: false })
    accrual_type: string;
    /**
     * The number of points that  buyers earn based on the `accrual_type`.
     * @type {number}
     * @memberof LoyaltyProgramAccrualRule
     */
    
    @Field({ nullable: true })
    points?: number;
    /**
     * 
     * @type {Money}
     * @memberof LoyaltyProgramAccrualRule
     */
    
    @Field(() => Money, { nullable: true })
    visit_minimum_amount_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof LoyaltyProgramAccrualRule
     */
    
    @Field(() => Money, { nullable: true })
    spend_amount_money?: Money;
    /**
     * The ID of the `catalog object` to purchase to earn the number of points defined by the rule. This is either an item variation or a category, depending on the type. This is defined on `ITEM_VARIATION` rules and `CATEGORY` rules.
     * @type {string}
     * @memberof LoyaltyProgramAccrualRule
     */
    
    @Field({ nullable: true })
    catalog_object_id?: string;
}


