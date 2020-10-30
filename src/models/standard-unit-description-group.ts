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


import { StandardUnitDescription } from './standard-unit-description';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Group of standard measurement units.
 * @export
 * @class StandardUnitDescriptionGroup
 */
@ObjectType()
export class StandardUnitDescriptionGroup {
    /**
     * List of standard (non-custom) measurement units in this description group.
     * @type {Array<StandardUnitDescription>}
     * @memberof StandardUnitDescriptionGroup
     */
    @Field(() => [StandardUnitDescription]) 
    standard_unit_descriptions?: Array<StandardUnitDescription>;
    /**
     * IETF language tag.
     * @type {string}
     * @memberof StandardUnitDescriptionGroup
     */
    @Field() 
    language_code?: string;
}


