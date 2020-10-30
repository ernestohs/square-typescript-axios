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


import { V1Variation } from './v1-variation';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1UpdateVariationRequest
 */
@ObjectType()
export class V1UpdateVariationRequest {
    /**
     * 
     * @type {V1Variation}
     * @memberof V1UpdateVariationRequest
     */
    @Field(() => V1Variation) 
    body: V1Variation;
}


