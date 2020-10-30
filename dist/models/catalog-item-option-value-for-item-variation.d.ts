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
/**
 * A `CatalogItemOptionValue` links an item variation to an item option as an item option value. For example, a t-shirt item may offer a color option and a size option. An item option value would represent each variation of t-shirt: For example, \"Color:Red, Size:Small\" or \"Color:Blue, Size:Medium\".
 * @export
 * @class CatalogItemOptionValueForItemVariation
 */
export declare class CatalogItemOptionValueForItemVariation {
    /**
     * The unique id of an item option.
     * @type {string}
     * @memberof CatalogItemOptionValueForItemVariation
     */
    item_option_id?: string;
    /**
     * The unique id of the selected value for the item option.
     * @type {string}
     * @memberof CatalogItemOptionValueForItemVariation
     */
    item_option_value_id?: string;
}
