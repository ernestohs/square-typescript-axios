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
import { CatalogItemOptionValueForItemVariation } from './catalog-item-option-value-for-item-variation';
import { ItemVariationLocationOverrides } from './item-variation-location-overrides';
import { Money } from './money';
/**
 * An item variation (i.e., product) in the Catalog object model. Each item may have a maximum of 250 item variations.
 * @export
 * @class CatalogItemVariation
 */
export declare class CatalogItemVariation {
    /**
     * The ID of the `CatalogItem` associated with this item variation.
     * @type {string}
     * @memberof CatalogItemVariation
     */
    item_id?: string;
    /**
     * The item variation\'s name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogItemVariation
     */
    name?: string;
    /**
     * The item variation\'s SKU, if any. This is a searchable attribute for use in applicable query filters.
     * @type {string}
     * @memberof CatalogItemVariation
     */
    sku?: string;
    /**
     * The item variation\'s UPC, if any. This is a searchable attribute for use in applicable query filters. It is only accessible through the Square API, and not exposed in the Square Seller Dashboard, Square Point of Sale or Retail Point of Sale apps.
     * @type {string}
     * @memberof CatalogItemVariation
     */
    upc?: string;
    /**
     * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal for each item variation within a parent `CatalogItem` is set according to the item variations\'s position. On reads, the value is not guaranteed to be sequential or unique.
     * @type {number}
     * @memberof CatalogItemVariation
     */
    ordinal?: number;
    /**
     * Indicates whether the item variation\'s price is fixed or determined at the time of sale. See [CatalogPricingType](#type-catalogpricingtype) for possible values
     * @type {string}
     * @memberof CatalogItemVariation
     */
    pricing_type?: string;
    /**
     *
     * @type {Money}
     * @memberof CatalogItemVariation
     */
    price_money?: Money;
    /**
     * Per-location price and inventory overrides.
     * @type {Array<ItemVariationLocationOverrides>}
     * @memberof CatalogItemVariation
     */
    location_overrides?: Array<ItemVariationLocationOverrides>;
    /**
     * If `true`, inventory tracking is active for the variation.
     * @type {boolean}
     * @memberof CatalogItemVariation
     */
    track_inventory?: boolean;
    /**
     * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for possible values
     * @type {string}
     * @memberof CatalogItemVariation
     */
    inventory_alert_type?: string;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.  This value is always an integer.
     * @type {number}
     * @memberof CatalogItemVariation
     */
    inventory_alert_threshold?: number;
    /**
     * Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogItemVariation
     */
    user_data?: string;
    /**
     * If the `CatalogItem` that owns this item variation is of type `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value `1800000`, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
     * @type {number}
     * @memberof CatalogItemVariation
     */
    service_duration?: number;
    /**
     * List of item option values associated with this item variation. Listed in the same order as the item options of the parent item.
     * @type {Array<CatalogItemOptionValueForItemVariation>}
     * @memberof CatalogItemVariation
     */
    item_option_values?: Array<CatalogItemOptionValueForItemVariation>;
    /**
     * ID of the ???CatalogMeasurementUnit??? that is used to measure the quantity sold of this item variation. If left unset, the item will be sold in whole quantities.
     * @type {string}
     * @memberof CatalogItemVariation
     */
    measurement_unit_id?: string;
}
