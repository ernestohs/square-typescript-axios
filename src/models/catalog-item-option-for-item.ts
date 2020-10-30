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
 *  An option that can be assigned to an item. For example, a t-shirt item may offer a color option or a size option.
 * @export
 * @class CatalogItemOptionForItem
 */
@ObjectType()
export class CatalogItemOptionForItem {
    /**
     * The unique id of the item option, used to form the dimensions of the item option matrix in a specified order.
     * @type {string}
     * @memberof CatalogItemOptionForItem
     */
    @Field() 
    item_option_id?: string;
}


