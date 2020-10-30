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


import { V1Category } from './v1-category';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1CreateCategoryRequest
 */
@ObjectType()
export class V1CreateCategoryRequest {
    /**
     * 
     * @type {V1Category}
     * @memberof V1CreateCategoryRequest
     */
    @Field(() => V1Category) 
    body?: V1Category;
}

