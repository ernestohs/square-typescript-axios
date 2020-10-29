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
import { V1Category } from './v1-category';
import { V1Fee } from './v1-fee';
import { V1ItemImage } from './v1-item-image';
import { V1ModifierList } from './v1-modifier-list';
import { V1Variation } from './v1-variation';
/**
 * V1Item
 * @export
 * @interface V1Item
 */
export interface V1Item {
    /**
     * The item\'s ID. Must be unique among all entity IDs ever provided on behalf of the merchant. You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_).
     * @type {string}
     * @memberof V1Item
     */
    id?: string;
    /**
     * The item\'s name.
     * @type {string}
     * @memberof V1Item
     */
    name?: string;
    /**
     * The item\'s description.
     * @type {string}
     * @memberof V1Item
     */
    description?: string;
    /**
     * The item\'s type. This value is NORMAL for almost all items. See [V1ItemType](#type-v1itemtype) for possible values
     * @type {string}
     * @memberof V1Item
     */
    type?: string;
    /**
     * The color of the discount\'s display label in Square Point of Sale, if not the default color. The default color is 9da2a6. See [V1ItemColor](#type-v1itemcolor) for possible values
     * @type {string}
     * @memberof V1Item
     */
    color?: string;
    /**
     * The text of the item\'s display label in Square Point of Sale. Only up to the first five characters of the string are used.
     * @type {string}
     * @memberof V1Item
     */
    abbreviation?: string;
    /**
     * Indicates whether the item is viewable from the merchant\'s online store (PUBLIC) or PRIVATE. See [V1ItemVisibility](#type-v1itemvisibility) for possible values
     * @type {string}
     * @memberof V1Item
     */
    visibility?: string;
    /**
     * If true, the item can be added to shipping orders from the merchant\'s online store.
     * @type {boolean}
     * @memberof V1Item
     */
    available_online?: boolean;
    /**
     *
     * @type {V1ItemImage}
     * @memberof V1Item
     */
    master_image?: V1ItemImage;
    /**
     *
     * @type {V1Category}
     * @memberof V1Item
     */
    category?: V1Category;
    /**
     * The item\'s variations. You must specify at least one variation.
     * @type {Array<V1Variation>}
     * @memberof V1Item
     */
    variations?: Array<V1Variation>;
    /**
     * The modifier lists that apply to the item, if any.
     * @type {Array<V1ModifierList>}
     * @memberof V1Item
     */
    modifier_lists?: Array<V1ModifierList>;
    /**
     * The fees that apply to the item, if any.
     * @type {Array<V1Fee>}
     * @memberof V1Item
     */
    fees?: Array<V1Fee>;
    /**
     * Deprecated. This field is not used.
     * @type {boolean}
     * @memberof V1Item
     */
    taxable?: boolean;
    /**
     * The ID of the item\'s category, if any.
     * @type {string}
     * @memberof V1Item
     */
    category_id?: string;
    /**
     * If true, the item can be added to pickup orders from the merchant\'s online store. Default value: false
     * @type {boolean}
     * @memberof V1Item
     */
    available_for_pickup?: boolean;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     * @type {string}
     * @memberof V1Item
     */
    v2_id?: string;
}
