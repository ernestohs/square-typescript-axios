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
 * Describes query filters to apply.
 * @export
 * @interface InvoiceFilter
 */
export interface InvoiceFilter {
    /**
     * Limits the search to the specified locations. A location is required.  In the current implementation, only one location can be specified.
     * @type {Array<string>}
     * @memberof InvoiceFilter
     */
    location_ids: Array<string>;
    /**
     * Limits the search to the specified customers, within the specified locations.  Specifying a customer is optional. In the current implementation,  a maximum of one customer can be specified.
     * @type {Array<string>}
     * @memberof InvoiceFilter
     */
    customer_ids?: Array<string>;
}
