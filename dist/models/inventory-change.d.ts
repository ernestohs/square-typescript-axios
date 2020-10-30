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
import { InventoryAdjustment } from './inventory-adjustment';
import { InventoryPhysicalCount } from './inventory-physical-count';
import { InventoryTransfer } from './inventory-transfer';
/**
 * Represents a single physical count, inventory, adjustment, or transfer that is part of the history of inventory changes for a particular `CatalogObject`.
 * @export
 * @class InventoryChange
 */
export declare class InventoryChange {
    /**
     * Indicates how the inventory change was applied. See `InventoryChangeType` for all possible values. See [InventoryChangeType](#type-inventorychangetype) for possible values
     * @type {string}
     * @memberof InventoryChange
     */
    type?: string;
    /**
     *
     * @type {InventoryPhysicalCount}
     * @memberof InventoryChange
     */
    physical_count?: InventoryPhysicalCount;
    /**
     *
     * @type {InventoryAdjustment}
     * @memberof InventoryChange
     */
    adjustment?: InventoryAdjustment;
    /**
     *
     * @type {InventoryTransfer}
     * @memberof InventoryChange
     */
    transfer?: InventoryTransfer;
}
