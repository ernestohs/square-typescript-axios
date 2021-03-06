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
 * Filter events by loyalty account.
 * @export
 * @class LoyaltyEventLoyaltyAccountFilter
 */
@ObjectType()
export class LoyaltyEventLoyaltyAccountFilter {
    /**
     * The ID of the `loyalty account` associated with loyalty events.
     * @type {string}
     * @memberof LoyaltyEventLoyaltyAccountFilter
     */
    
    @Field({ nullable: false })
    loyalty_account_id: string;
}


