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
 * Indicates the status of an invoice.
 * @export
 * @enum {string}
 */
export declare enum InvoiceStatus {
    DRAFT = "DRAFT",
    UNPAID = "UNPAID",
    SCHEDULED = "SCHEDULED",
    PARTIALLYPAID = "PARTIALLY_PAID",
    PAID = "PAID",
    PARTIALLYREFUNDED = "PARTIALLY_REFUNDED",
    REFUNDED = "REFUNDED",
    CANCELED = "CANCELED",
    FAILED = "FAILED",
    PAYMENTPENDING = "PAYMENT_PENDING"
}
