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
 * Represents a phone number.
 * @export
 * @class V1PhoneNumber
 */
@ObjectType()
export class V1PhoneNumber {
    /**
     * The phone number\'s international calling code. For US phone numbers, this value is +1.
     * @type {string}
     * @memberof V1PhoneNumber
     */
    @Field() 
    calling_code: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof V1PhoneNumber
     */
    @Field() 
    number: string;
}


