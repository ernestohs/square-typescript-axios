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


import { V1Payment } from './v1-payment';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1ListPaymentsResponse
 */
@ObjectType()
export class V1ListPaymentsResponse {
    /**
     * 
     * @type {Array<V1Payment>}
     * @memberof V1ListPaymentsResponse
     */
    
    @Field(() => [V1Payment], { nullable: true })
    items?: Array<V1Payment>;
}


