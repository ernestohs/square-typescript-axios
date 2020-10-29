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
import { Address } from './address';
/**
 * Provides customer data that Square uses to deliver an invoice.
 * @export
 * @interface InvoiceRecipient
 */
export interface InvoiceRecipient {
    /**
     * The ID of the customer. This is the customer profile ID that  you provide when creating a draft invoice.
     * @type {string}
     * @memberof InvoiceRecipient
     */
    customer_id?: string;
    /**
     * The recipient\'s given (that is, first) name.
     * @type {string}
     * @memberof InvoiceRecipient
     */
    given_name?: string;
    /**
     * The recipient\'s family (that is, last) name.
     * @type {string}
     * @memberof InvoiceRecipient
     */
    family_name?: string;
    /**
     * The recipient\'s email address.
     * @type {string}
     * @memberof InvoiceRecipient
     */
    email_address?: string;
    /**
     *
     * @type {Address}
     * @memberof InvoiceRecipient
     */
    address?: Address;
    /**
     * The recipient\'s phone number.
     * @type {string}
     * @memberof InvoiceRecipient
     */
    phone_number?: string;
    /**
     * The name of the recipient\'s company.
     * @type {string}
     * @memberof InvoiceRecipient
     */
    company_name?: string;
}
