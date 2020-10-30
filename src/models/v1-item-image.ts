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
 * V1ItemImage
 * @export
 * @class V1ItemImage
 */
@ObjectType()
export class V1ItemImage {
    /**
     * The image\'s unique ID.
     * @type {string}
     * @memberof V1ItemImage
     */
    @Field() 
    id?: string;
    /**
     * The image\'s publicly accessible URL.
     * @type {string}
     * @memberof V1ItemImage
     */
    @Field() 
    url?: string;
}


