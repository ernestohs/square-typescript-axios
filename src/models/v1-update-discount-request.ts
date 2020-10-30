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


import { V1Discount } from './v1-discount';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1UpdateDiscountRequest
 */
@ObjectType()
export class V1UpdateDiscountRequest {
    /**
     * 
     * @type {V1Discount}
     * @memberof V1UpdateDiscountRequest
     */
    
    @Field(() => V1Discount, { nullable: false })
    body: V1Discount;
}


