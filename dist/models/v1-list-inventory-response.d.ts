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
import { V1InventoryEntry } from './v1-inventory-entry';
/**
 *
 * @export
 * @interface V1ListInventoryResponse
 */
export interface V1ListInventoryResponse {
    /**
     *
     * @type {Array<V1InventoryEntry>}
     * @memberof V1ListInventoryResponse
     */
    items?: Array<V1InventoryEntry>;
}