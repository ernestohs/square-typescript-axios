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


import { CatalogItemModifierListInfo } from './catalog-item-modifier-list-info';
import { CatalogItemOptionForItem } from './catalog-item-option-for-item';
import { CatalogObject } from './catalog-object';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * An [CatalogObject](#type-CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog.
 * @export
 * @class CatalogItem
 */
@ObjectType()
export class CatalogItem {
    /**
     * The item\'s name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points.
     * @type {string}
     * @memberof CatalogItem
     */
    @Field() 
    name?: string;
    /**
     * The item\'s description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogItem
     */
    @Field() 
    description?: string;
    /**
     * The text of the item\'s display label in the Square Point of Sale app. Only up to the first five characters of the string are used. This attribute is searchable, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogItem
     */
    @Field() 
    abbreviation?: string;
    /**
     * The color of the item\'s display label in the Square Point of Sale app. This must be a valid hex color code.
     * @type {string}
     * @memberof CatalogItem
     */
    @Field() 
    label_color?: string;
    /**
     * If `true`, the item can be added to shipping orders from the merchant\'s online store.
     * @type {boolean}
     * @memberof CatalogItem
     */
    @Field() 
    available_online?: boolean;
    /**
     * If `true`, the item can be added to pickup orders from the merchant\'s online store.
     * @type {boolean}
     * @memberof CatalogItem
     */
    @Field() 
    available_for_pickup?: boolean;
    /**
     * If `true`, the item can be added to electronically fulfilled orders from the merchant\'s online store.
     * @type {boolean}
     * @memberof CatalogItem
     */
    @Field() 
    available_electronically?: boolean;
    /**
     * The ID of the item\'s category, if any.
     * @type {string}
     * @memberof CatalogItem
     */
    @Field() 
    category_id?: string;
    /**
     * A set of IDs indicating the taxes enabled for this item. When updating an item, any taxes listed here will be added to the item. Taxes may also be added to or deleted from an item using `UpdateItemTaxes`.
     * @type {Array<string>}
     * @memberof CatalogItem
     */
    @Field() 
    tax_ids?: Array<string>;
    /**
     * A set of `CatalogItemModifierListInfo` objects representing the modifier lists that apply to this item, along with the overrides and min and max limits that are specific to this item. Modifier lists may also be added to or deleted from an item using `UpdateItemModifierLists`.
     * @type {Array<CatalogItemModifierListInfo>}
     * @memberof CatalogItem
     */
    @Field(() => [CatalogItemModifierListInfo]) 
    modifier_list_info?: Array<CatalogItemModifierListInfo>;
    /**
     * A list of CatalogObjects containing the `CatalogItemVariation`s for this item.
     * @type {Array<CatalogObject>}
     * @memberof CatalogItem
     */
    @Field(() => [CatalogObject]) 
    variations?: Array<CatalogObject>;
    /**
     * The product type of the item. May not be changed once an item has been created.  Only items of product type `REGULAR` or `APPOINTMENTS_SERVICE` may be created by this API; items with other product types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
     * @type {string}
     * @memberof CatalogItem
     */
    @Field() 
    product_type?: string;
    /**
     * If `false`, the Square Point of Sale app will present the `CatalogItem`\'s details screen immediately, allowing the merchant to choose `CatalogModifier`s before adding the item to the cart.  This is the default behavior.  If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item\'s details.  Third-party clients are encouraged to implement similar behaviors.
     * @type {boolean}
     * @memberof CatalogItem
     */
    @Field() 
    skip_modifier_screen?: boolean;
    /**
     * List of item options IDs for this item. Used to manage and group item variations in a specified order.  Maximum: 6 item options.
     * @type {Array<CatalogItemOptionForItem>}
     * @memberof CatalogItem
     */
    @Field(() => [CatalogItemOptionForItem]) 
    item_options?: Array<CatalogItemOptionForItem>;
}


