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
 * Represents a discount being returned that applies to one or more return line items in an order.  Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals. The amount distributed to each return line item is relative to that item’s contribution to the order subtotal.
 * @export
 * @class OrderReturnDiscount
 */
export declare class OrderReturnDiscount {
    /**
     * Unique ID that identifies the return discount only within this order.
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    uid?: string;
    /**
     * `uid` of the Discount from the Order which contains the original application of this discount.
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    source_discount_uid?: string;
    /**
     * The catalog object id referencing `CatalogDiscount`.
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    catalog_object_id?: string;
    /**
     * The discount\'s name.
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    name?: string;
    /**
     * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.  Discounts that don\'t reference a catalog object ID must have a type of `FIXED_PERCENTAGE` or `FIXED_AMOUNT`. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    type?: string;
    /**
     * The percentage of the tax, as a string representation of a decimal number. A value of `7.25` corresponds to a percentage of 7.25%.  `percentage` is not set for amount-based discounts.
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    percentage?: string;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnDiscount
     */
    amount_money?: Money;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnDiscount
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the `OrderReturnDiscount` applies. For `ORDER` scoped discounts, the server will generate references in `applied_discounts` on all `OrderReturnLineItem`s. For `LINE_ITEM` scoped discounts, the discount will only apply to `OrderReturnLineItem`s with references in their `applied_discounts` field. See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values
     * @type {string}
     * @memberof OrderReturnDiscount
     */
    scope?: string;
}
