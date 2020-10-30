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
import { Money } from './money';
import { SourceApplication } from './source-application';
/**
 * Represents a change in state or quantity of product inventory at a particular time and location.
 * @export
 * @class InventoryAdjustment
 */
export declare class InventoryAdjustment {
    /**
     * A unique ID generated by Square for the `InventoryAdjustment`.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the `InventoryAdjustment` to an external system.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    reference_id?: string;
    /**
     * The `InventoryState` of the related quantity of items before the adjustment. See [InventoryState](#type-inventorystate) for possible values
     * @type {string}
     * @memberof InventoryAdjustment
     */
    from_state?: string;
    /**
     * The `InventoryState` of the related quantity of items after the adjustment. See [InventoryState](#type-inventorystate) for possible values
     * @type {string}
     * @memberof InventoryAdjustment
     */
    to_state?: string;
    /**
     * The Square ID of the `Location` where the related quantity of items are being tracked.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    location_id?: string;
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    catalog_object_type?: string;
    /**
     * The number of items affected by the adjustment as a decimal string. Can support up to 5 digits after the decimal point.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    quantity?: string;
    /**
     *
     * @type {Money}
     * @memberof InventoryAdjustment
     */
    total_price_money?: Money;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when the adjustment took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    occurred_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the adjustment.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    created_at?: string;
    /**
     *
     * @type {SourceApplication}
     * @memberof InventoryAdjustment
     */
    source?: SourceApplication;
    /**
     * The Square ID of the `Employee` responsible for the inventory adjustment.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    employee_id?: string;
    /**
     * The read-only Square ID of the [Transaction][#type-transaction] that caused the adjustment. Only relevant for payment-related state transitions.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    transaction_id?: string;
    /**
     * The read-only Square ID of the [Refund][#type-refund] that caused the adjustment. Only relevant for refund-related state transitions.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    refund_id?: string;
    /**
     * The read-only Square ID of the purchase order that caused the adjustment. Only relevant for state transitions from the Square for Retail app.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    purchase_order_id?: string;
    /**
     * The read-only Square ID of the Square goods receipt that caused the adjustment. Only relevant for state transitions from the Square for Retail app.
     * @type {string}
     * @memberof InventoryAdjustment
     */
    goods_receipt_id?: string;
}
