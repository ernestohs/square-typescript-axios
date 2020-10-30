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
 * 
 * @export
 * @class RetrieveCashDrawerShiftRequest
 */
@ObjectType()
export class RetrieveCashDrawerShiftRequest {
    /**
     * The ID of the location to retrieve cash drawer shifts from.
     * @type {string}
     * @memberof RetrieveCashDrawerShiftRequest
     */
    @Field() 
    location_id: string;
}


