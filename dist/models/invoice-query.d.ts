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
import { InvoiceFilter } from './invoice-filter';
import { InvoiceSort } from './invoice-sort';
/**
 * Describes query criteria for searching invoices.
 * @export
 * @interface InvoiceQuery
 */
export interface InvoiceQuery {
    /**
     *
     * @type {InvoiceFilter}
     * @memberof InvoiceQuery
     */
    filter: InvoiceFilter;
    /**
     *
     * @type {InvoiceSort}
     * @memberof InvoiceQuery
     */
    sort?: InvoiceSort;
}
