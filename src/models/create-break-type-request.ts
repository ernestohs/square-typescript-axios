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


import { BreakType } from './break-type';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A request to create a new `BreakType`
 * @export
 * @class CreateBreakTypeRequest
 */
@ObjectType()
export class CreateBreakTypeRequest {
    /**
     * Unique string value to insure idempotency of the operation
     * @type {string}
     * @memberof CreateBreakTypeRequest
     */
    @Field() 
    idempotency_key?: string;
    /**
     * 
     * @type {BreakType}
     * @memberof CreateBreakTypeRequest
     */
    @Field(() => BreakType) 
    break_type: BreakType;
}

