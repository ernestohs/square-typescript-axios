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


import { CatalogObject } from './catalog-object';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A list of modifiers applicable to items at the time of sale.  For example, a \"Condiments\" modifier list applicable to a \"Hot Dog\" item may contain \"Ketchup\", \"Mustard\", and \"Relish\" modifiers. Use the `selection_type` field to specify whether or not multiple selections from the modifier list are allowed.
 * @export
 * @class CatalogModifierList
 */
@ObjectType()
export class CatalogModifierList {
    /**
     * The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogModifierList
     */
    @Field() 
    name?: string;
    /**
     * Determines where this modifier list appears in a list of `CatalogModifierList` values.
     * @type {number}
     * @memberof CatalogModifierList
     */
    @Field() 
    ordinal?: number;
    /**
     * Indicates whether multiple options from the modifier list can be applied to a single `CatalogItem`. See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values
     * @type {string}
     * @memberof CatalogModifierList
     */
    @Field() 
    selection_type?: string;
    /**
     * The options included in the `CatalogModifierList`. You must include at least one `CatalogModifier`. Each CatalogObject must have type `MODIFIER` and contain `CatalogModifier` data.
     * @type {Array<CatalogObject>}
     * @memberof CatalogModifierList
     */
    @Field(() => [CatalogObject]) 
    modifiers?: Array<CatalogObject>;
}

