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
import GraphQLJSON from 'graphql-type-json';

/**
 * Provides metadata when the event `type` is `ACCUMULATE_POINTS`.
 * @export
 * @class LoyaltyEventAccumulatePoints
 */
@ObjectType()
export class LoyaltyEventAccumulatePoints {
    /**
     * The ID of the `loyalty program`.
     * @type {string}
     * @memberof LoyaltyEventAccumulatePoints
     */
    
    @Field({ nullable: true })
    loyalty_program_id?: string;
    /**
     * The number of points accumulated by the event.
     * @type {number}
     * @memberof LoyaltyEventAccumulatePoints
     */
    
    @Field({ nullable: true })
    points?: number;
    /**
     * The ID of the `order` for which the buyer accumulated the points. This field is returned only if the Orders API is used to process orders.
     * @type {string}
     * @memberof LoyaltyEventAccumulatePoints
     */
    
    @Field({ nullable: true })
    order_id?: string;
}


