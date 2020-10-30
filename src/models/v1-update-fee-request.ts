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


import { V1Fee } from './v1-fee';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1UpdateFeeRequest
 */
@ObjectType()
export class V1UpdateFeeRequest {
    /**
     * 
     * @type {V1Fee}
     * @memberof V1UpdateFeeRequest
     */
    @Field(() => V1Fee) 
    body: V1Fee;
}


