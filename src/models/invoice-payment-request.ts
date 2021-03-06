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


import { InvoicePaymentReminder } from './invoice-payment-reminder';
import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Describes a specific payment request in an invoice. Invoices that contain multiple payment requests can  specify a maximum of 12 `INSTALLMENT` request types. All of the payment requests must specify the same `request_method`.  For more information,  see [Payment requests](/docs/invoices-api/overview#payment-requests).
 * @export
 * @class InvoicePaymentRequest
 */
@ObjectType()
export class InvoicePaymentRequest {
    /**
     * The Square-generated ID of the payment request in an `invoice`.
     * @type {string}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    uid?: string;
    /**
     * Indicates how Square processes the payment request. See [InvoiceRequestMethod](#type-invoicerequestmethod) for possible values
     * @type {string}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    request_method?: string;
    /**
     * Identifies the payment request type. This type defines how the payment request amount is determined. See [InvoiceRequestType](#type-invoicerequesttype) for possible values
     * @type {string}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    request_type?: string;
    /**
     * The due date (in the invoice location\'s time zone) for the payment request.  After this date, the invoice becomes overdue.
     * @type {string}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    due_date?: string;
    /**
     * 
     * @type {Money}
     * @memberof InvoicePaymentRequest
     */
    
    @Field(() => Money, { nullable: true })
    fixed_amount_requested_money?: Money;
    /**
     * Specifies the amount for the payment request in percentage:  - When the payment `request_type` is `DEPOSIT`, it is the percentage of the order total amount. - When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order total less  the deposit, if requested. The sum of the `percentage_requested` in all installment  payment requests must be equal to 100.  You cannot specify this when the payment `request_type` is `BALANCE` or when the  payment request specifies the `fixed_amount_requested_money` field.
     * @type {string}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    percentage_requested?: string;
    /**
     * If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)  provides a place for the customer to pay a tip.   This field is allowed only on the final payment request   and the payment `request_type` must be `BALANCE` or `INSTALLMENT`.
     * @type {boolean}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    tipping_enabled?: boolean;
    /**
     * If the request method is `CHARGE_CARD_ON_FILE`, this field provides the  card to charge.
     * @type {string}
     * @memberof InvoicePaymentRequest
     */
    
    @Field({ nullable: true })
    card_id?: string;
    /**
     * A list of one or more reminders to send for the payment request.
     * @type {Array<InvoicePaymentReminder>}
     * @memberof InvoicePaymentRequest
     */
    
    @Field(() => [InvoicePaymentReminder], { nullable: true })
    reminders?: Array<InvoicePaymentReminder>;
    /**
     * 
     * @type {Money}
     * @memberof InvoicePaymentRequest
     */
    
    @Field(() => Money, { nullable: true })
    computed_amount_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof InvoicePaymentRequest
     */
    
    @Field(() => Money, { nullable: true })
    total_completed_amount_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof InvoicePaymentRequest
     */
    
    @Field(() => Money, { nullable: true })
    rounding_adjustment_included_money?: Money;
}


