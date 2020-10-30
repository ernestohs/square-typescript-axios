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


import { V1ModifierOption } from './v1-modifier-option';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1CreateModifierOptionRequest
 */
@ObjectType()
export class V1CreateModifierOptionRequest {
    /**
     * 
     * @type {V1ModifierOption}
     * @memberof V1CreateModifierOptionRequest
     */
    @Field(() => V1ModifierOption) 
    body?: V1ModifierOption;
}


