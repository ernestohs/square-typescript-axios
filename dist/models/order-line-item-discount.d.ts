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
 * Represents a discount that applies to one or more line items in an order.  Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals. The amount distributed to each line item is relative to the amount contributed by the item to the order subtotal.
 * @export
 * @interface OrderLineItemDiscount
 */
export interface OrderLineItemDiscount {
    /**
     * Unique ID that identifies the discount only within this order.
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    uid?: string;
    /**
     * The catalog object id referencing `CatalogDiscount`.
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    catalog_object_id?: string;
    /**
     * The discount\'s name.
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    name?: string;
    /**
     * The type of the discount.  Discounts that don\'t reference a catalog object ID must have a type of `FIXED_PERCENTAGE` or `FIXED_AMOUNT`. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    type?: string;
    /**
     * The percentage of the discount, as a string representation of a decimal number. A value of `7.25` corresponds to a percentage of 7.25%.  `percentage` is not set for amount-based discounts.
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    percentage?: string;
    /**
     *
     * @type {Money}
     * @memberof OrderLineItemDiscount
     */
    amount_money?: Money;
    /**
     *
     * @type {Money}
     * @memberof OrderLineItemDiscount
     */
    applied_money?: Money;
    /**
     * Application-defined data attached to this discount. Metadata fields are intended to store descriptive references or associations with an entity in another system or store brief information about the object. Square does not process this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive information (personally identifiable information, card details, etc.).  Keys written by applications must be 60 characters or less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square. These keys are prefixed with a namespace, separated from the key with a \':\' character.  Values have a max length of 255 characters.  An application may have up to 10 entries per metadata field.  Entries written by applications are private and can only be read or modified by the same application.  See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof OrderLineItemDiscount
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * Indicates the level at which the discount applies. For `ORDER` scoped discounts, Square generates references in `applied_discounts` on all order line items that do not have them. For `LINE_ITEM` scoped discounts, the discount only applies to line items with a discount reference in their `applied_discounts` field.  This field is immutable. To change the scope of a discount you must delete the discount and re-add it as a new discount. See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    scope?: string;
    /**
     * The reward identifiers corresponding to this discount. The application and specification of discounts that have `reward_ids` are completely controlled by the backing criteria corresponding to the reward tiers of the rewards that are added to the order through the Loyalty API. To manually unapply discounts that are the result of added rewards, the rewards must be removed from the order through the Loyalty API.
     * @type {Array<string>}
     * @memberof OrderLineItemDiscount
     */
    reward_ids?: Array<string>;
    /**
     * The object identifier of a `pricing rule` to be applied automatically to this discount. The specification and application of the discounts, to which a `pricing_rule_id` is assigned, are completely controlled by the corresponding pricing rule.
     * @type {string}
     * @memberof OrderLineItemDiscount
     */
    pricing_rule_id?: string;
}