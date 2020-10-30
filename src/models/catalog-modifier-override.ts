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



import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Options to control how to override the default behavior of the specified modifier.
 * @export
 * @class CatalogModifierOverride
 */
@ObjectType()
export class CatalogModifierOverride {
    /**
     * The ID of the `CatalogModifier` whose default behavior is being overridden.
     * @type {string}
     * @memberof CatalogModifierOverride
     */
    @Field() 
    modifier_id: string;
    /**
     * If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`.
     * @type {boolean}
     * @memberof CatalogModifierOverride
     */
    @Field() 
    on_by_default?: boolean;
}


