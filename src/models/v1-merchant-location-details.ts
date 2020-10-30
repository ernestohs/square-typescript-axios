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
 * Additional information for a single-location account specified by its associated business account, if it has one.
 * @export
 * @class V1MerchantLocationDetails
 */
@ObjectType()
export class V1MerchantLocationDetails {
    /**
     * The nickname assigned to the single-location account by the parent business. This value appears in the parent business\'s multi-location dashboard.
     * @type {string}
     * @memberof V1MerchantLocationDetails
     */
    @Field() 
    nickname?: string;
}


