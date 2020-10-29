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
 * V1PaymentItemDetail
 * @export
 * @interface V1PaymentItemDetail
 */
export interface V1PaymentItemDetail {
    /**
     * The name of the item\'s merchant-defined category, if any.
     * @type {string}
     * @memberof V1PaymentItemDetail
     */
    category_name?: string;
    /**
     *  The item\'s merchant-defined SKU, if any.
     * @type {string}
     * @memberof V1PaymentItemDetail
     */
    sku?: string;
    /**
     * The unique ID of the item purchased, if any.
     * @type {string}
     * @memberof V1PaymentItemDetail
     */
    item_id?: string;
    /**
     * The unique ID of the item variation purchased, if any.
     * @type {string}
     * @memberof V1PaymentItemDetail
     */
    item_variation_id?: string;
}
