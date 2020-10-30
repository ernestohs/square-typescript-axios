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
 * Provides metadata when the event `type` is `OTHER`.
 * @export
 * @class LoyaltyEventOther
 */
@ObjectType()
export class LoyaltyEventOther {
    /**
     * The Square-assigned ID of the `loyalty program`.
     * @type {string}
     * @memberof LoyaltyEventOther
     */
    @Field() 
    loyalty_program_id: string;
    /**
     * The number of points added or removed.
     * @type {number}
     * @memberof LoyaltyEventOther
     */
    @Field() 
    points: number;
}


