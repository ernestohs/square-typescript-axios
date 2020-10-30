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


import { V1ModifierList } from './v1-modifier-list';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1CreateModifierListRequest
 */
@ObjectType()
export class V1CreateModifierListRequest {
    /**
     * 
     * @type {V1ModifierList}
     * @memberof V1CreateModifierListRequest
     */
    
    @Field(() => V1ModifierList, { nullable: true })
    body?: V1ModifierList;
}


