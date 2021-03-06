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
import GraphQLJSON from 'graphql-type-json';

/**
 * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination of currency.
 * @export
 * @class OrderRoundingAdjustment
 */
@ObjectType()
export class OrderRoundingAdjustment {
    /**
     * Unique ID that identifies the rounding adjustment only within this order.
     * @type {string}
     * @memberof OrderRoundingAdjustment
     */
    
    @Field({ nullable: true })
    uid?: string;
    /**
     * The name of the rounding adjustment from the original sale Order.
     * @type {string}
     * @memberof OrderRoundingAdjustment
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * 
     * @type {Money}
     * @memberof OrderRoundingAdjustment
     */
    
    @Field(() => Money, { nullable: true })
    amount_money?: Money;
}


