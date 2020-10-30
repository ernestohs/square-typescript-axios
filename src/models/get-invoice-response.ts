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


import { Invoice } from './invoice';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Describes a `GetInvoice` response.
 * @export
 * @class GetInvoiceResponse
 */
@ObjectType()
export class GetInvoiceResponse {
    /**
     * 
     * @type {Invoice}
     * @memberof GetInvoiceResponse
     */
    @Field(() => Invoice) 
    invoice?: Invoice;
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof GetInvoiceResponse
     */
    @Field() 
    errors?: Array<Error>;
}


