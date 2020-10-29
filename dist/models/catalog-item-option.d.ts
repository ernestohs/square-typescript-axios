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
/**
 * A group of variations for a `CatalogItem`.
 * @export
 * @interface CatalogItemOption
 */
export interface CatalogItemOption {
    /**
     * The item option\'s display name for the seller. Must be unique across all item options. This is a searchable attribute for use in applicable query filters.
     * @type {string}
     * @memberof CatalogItemOption
     */
    name?: string;
    /**
     * The item option\'s display name for the customer. This is a searchable attribute for use in applicable query filters.
     * @type {string}
     * @memberof CatalogItemOption
     */
    display_name?: string;
    /**
     * The item option\'s human-readable description. Displayed in the Square Point of Sale app for the seller and in the Online Store or on receipts for the buyer. This is a searchable attribute for use in applicable query filters.
     * @type {string}
     * @memberof CatalogItemOption
     */
    description?: string;
    /**
     * If true, display colors for entries in `values` when present.
     * @type {boolean}
     * @memberof CatalogItemOption
     */
    show_colors?: boolean;
    /**
     * A list of CatalogObjects containing the `CatalogItemOptionValue`s for this item.
     * @type {Array<CatalogObject>}
     * @memberof CatalogItemOption
     */
    values?: Array<CatalogObject>;
}
