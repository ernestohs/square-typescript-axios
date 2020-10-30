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
 * Represents communication preferences for the customer profile.
 * @export
 * @class CustomerPreferences
 */
@ObjectType()
export class CustomerPreferences {
    /**
     * The customer has unsubscribed from receiving marketing campaign emails.
     * @type {boolean}
     * @memberof CustomerPreferences
     */
    @Field() 
    email_unsubscribed?: boolean;
}

