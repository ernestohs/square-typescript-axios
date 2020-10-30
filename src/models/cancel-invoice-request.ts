/* tslint:disable */
/* eslint-disable */
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



import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Describes a `CancelInvoice` request.
 * @export
 * @class CancelInvoiceRequest
 */
@ObjectType()
export class CancelInvoiceRequest {
    /**
     * The version of the `invoice` to cancel. If you do not know the version, you can call  `GetInvoice](#endpoint-Invoices-GetInvoice) or [ListInvoices`.
     * @type {number}
     * @memberof CancelInvoiceRequest
     */
    @Field() 
    version: number;
}

