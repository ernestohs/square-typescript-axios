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
 * Describes when the loyalty program expires.
 * @export
 * @class LoyaltyProgramExpirationPolicy
 */
@ObjectType()
export class LoyaltyProgramExpirationPolicy {
    /**
     * The duration of time before points expire, in RFC 3339 format.
     * @type {string}
     * @memberof LoyaltyProgramExpirationPolicy
     */
    
    @Field({ nullable: false })
    expiration_duration: string;
}


