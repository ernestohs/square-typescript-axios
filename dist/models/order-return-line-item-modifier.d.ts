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
/**
 * A line item modifier being returned.
 * @export
 * @interface OrderReturnLineItemModifier
 */
export interface OrderReturnLineItemModifier {
    /**
     * Unique ID that identifies the return modifier only within this order.
     * @type {string}
     * @memberof OrderReturnLineItemModifier
     */
    uid?: string;
    /**
     * `uid` of the Modifier from the LineItem from the Order which contains the original sale of this line item modifier.
     * @type {string}
     * @memberof OrderReturnLineItemModifier
     */
    source_modifier_uid?: string;
    /**
     * The catalog object id referencing `CatalogModifier`.
     * @type {string}
     * @memberof OrderReturnLineItemModifier
     */
    catalog_object_id?: string;
    /**
     * The name of the item modifier.
     * @type {string}
     * @memberof OrderReturnLineItemModifier
     */
    name?: string;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnLineItemModifier
     */
    base_price_money?: Money;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnLineItemModifier
     */
    total_price_money?: Money;
}
