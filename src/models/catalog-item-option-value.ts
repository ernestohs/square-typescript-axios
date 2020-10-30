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
 * An enumerated value that can link a `CatalogItemVariation` to an item option as one of its item option values.
 * @export
 * @class CatalogItemOptionValue
 */
@ObjectType()
export class CatalogItemOptionValue {
    /**
     * Unique ID of the associated item option.
     * @type {string}
     * @memberof CatalogItemOptionValue
     */
    @Field() 
    item_option_id?: string;
    /**
     * Name of this item option value. This is a searchable attribute for use in applicable query filters.
     * @type {string}
     * @memberof CatalogItemOptionValue
     */
    @Field() 
    name?: string;
    /**
     * A human-readable description for the option value. This is a searchable attribute for use in applicable query filters.
     * @type {string}
     * @memberof CatalogItemOptionValue
     */
    @Field() 
    description?: string;
    /**
     * The HTML-supported hex color for the item option (e.g., \"#ff8d4e85\"). Only displayed if `show_colors` is enabled on the parent `ItemOption`. When left unset, `color` defaults to white (\"#ffffff\") when `show_colors` is enabled on the parent `ItemOption`.
     * @type {string}
     * @memberof CatalogItemOptionValue
     */
    @Field() 
    color?: string;
    /**
     * Determines where this option value appears in a list of option values.
     * @type {number}
     * @memberof CatalogItemOptionValue
     */
    @Field() 
    ordinal?: number;
}


