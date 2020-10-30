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


import { V1Item } from './v1-item';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1ListItemsResponse
 */
@ObjectType()
export class V1ListItemsResponse {
    /**
     * 
     * @type {Array<V1Item>}
     * @memberof V1ListItemsResponse
     */
    
    @Field(() => [V1Item], { nullable: true })
    items?: Array<V1Item>;
}


