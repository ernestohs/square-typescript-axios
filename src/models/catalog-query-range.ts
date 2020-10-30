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
 * The query filter to return the search result whose named attribute values fall between the specified range.
 * @export
 * @class CatalogQueryRange
 */
@ObjectType()
export class CatalogQueryRange {
    /**
     * The name of the attribute to be searched.
     * @type {string}
     * @memberof CatalogQueryRange
     */
    
    @Field({ nullable: false })
    attribute_name: string;
    /**
     * The desired minimum value for the search attribute (inclusive).
     * @type {number}
     * @memberof CatalogQueryRange
     */
    
    @Field({ nullable: true })
    attribute_min_value?: number;
    /**
     * The desired maximum value for the search attribute (inclusive).
     * @type {number}
     * @memberof CatalogQueryRange
     */
    
    @Field({ nullable: true })
    attribute_max_value?: number;
}


