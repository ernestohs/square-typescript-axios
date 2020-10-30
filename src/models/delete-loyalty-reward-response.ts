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
 * A response returned by the API call.
 * @export
 * @class DeleteLoyaltyRewardResponse
 */
@ObjectType()
export class DeleteLoyaltyRewardResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof DeleteLoyaltyRewardResponse
     */
    @Field() 
    errors?: Array<Error>;
}

