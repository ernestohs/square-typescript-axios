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


import { Address } from './address';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the body parameters that can be provided in a request to the CreateCustomer endpoint.
 * @export
 * @class CreateCustomerRequest
 */
@ObjectType()
export class CreateCustomerRequest {
    /**
     * The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    idempotency_key?: string;
    /**
     * The given (i.e., first) name associated with the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    given_name?: string;
    /**
     * The family (i.e., last) name associated with the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    family_name?: string;
    /**
     * A business name associated with the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    company_name?: string;
    /**
     * A nickname for the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    nickname?: string;
    /**
     * The email address associated with the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    email_address?: string;
    /**
     * 
     * @type {Address}
     * @memberof CreateCustomerRequest
     */
    
    @Field(() => Address, { nullable: true })
    address?: Address;
    /**
     * The 11-digit phone number associated with the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    phone_number?: string;
    /**
     * An optional, second ID used to associate the customer profile with an entity in another system.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * A custom note associated with the customer profile.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    note?: string;
    /**
     * The birthday associated with the customer profile, in RFC 3339 format. Year is optional, timezone and times are not allowed. For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st. `1998-09-01T00:00:00-00:00` indications a birthday on September 1st __1998__.
     * @type {string}
     * @memberof CreateCustomerRequest
     */
    
    @Field({ nullable: true })
    birthday?: string;
}


