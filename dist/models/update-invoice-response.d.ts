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
import { Invoice } from './invoice';
/**
 * Describes a `UpdateInvoice` response.
 * @export
 * @interface UpdateInvoiceResponse
 */
export interface UpdateInvoiceResponse {
    /**
     *
     * @type {Invoice}
     * @memberof UpdateInvoiceResponse
     */
    invoice?: Invoice;
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof UpdateInvoiceResponse
     */
    errors?: Array<Error>;
}
