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


import { Address } from './address';
import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Creates a payment from a provided source (such as a nonce or a card on file).  The `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required to enable application fees.  For more information, see [Payments and Refunds APIs Overview](/payments-api/overview).  For information about application fees in a payment, see [Take Payments and Collect Fees](/payments-api/take-payments-and-collect-fees).
 * @export
 * @class CreatePaymentRequest
 */
@ObjectType()
export class CreatePaymentRequest {
    /**
     * The ID for the source of funds for this payment. This can be a nonce generated by the Square payment form or a card on file made with the Customers API.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: false })
    source_id: string;
    /**
     * A unique string that identifies this `CreatePayment` request. Keys can be any valid string but must be unique for every `CreatePayment` request.  Max: 45 characters  Note: The number of allowed characters might be less than the stated maximum, if multi-byte characters are used.  For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: false })
    idempotency_key: string;
    /**
     * 
     * @type {Money}
     * @memberof CreatePaymentRequest
     */
    
    @Field(() => Money, { nullable: false })
    amount_money: Money;
    /**
     * 
     * @type {Money}
     * @memberof CreatePaymentRequest
     */
    
    @Field(() => Money, { nullable: true })
    tip_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CreatePaymentRequest
     */
    
    @Field(() => Money, { nullable: true })
    app_fee_money?: Money;
    /**
     * The duration of time after the payment\'s creation when Square automatically cancels the payment. This automatic cancellation applies only to payments that do not reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delay_duration` time period.  This parameter should be specified as a time duration, in RFC 3339 format, with a minimum value of 1 minute.  Note: This feature is only supported for card payments. This parameter can only be set for a delayed capture payment (`autocomplete=false`).  Default:  - Card-present payments: \"PT36H\" (36 hours) from the creation time. - Card-not-present payments: \"P7D\" (7 days) from the creation time.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    delay_duration?: string;
    /**
     * If set to `true`, this payment will be completed when possible. If set to `false`, this payment is held in an approved state until either explicitly completed (captured) or canceled (voided). For more information, see [Delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-payments).  Default: true
     * @type {boolean}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    autocomplete?: boolean;
    /**
     * Associates a previously created order with this payment.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    order_id?: string;
    /**
     * The `Customer` ID of the customer associated with the payment.  This is required if the `source_id` refers to a card on file created using the Customers API.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    customer_id?: string;
    /**
     * The location ID to associate with the payment. If not specified, the default location is used.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * A user-defined ID to associate with the payment.  You can use this field to associate the payment to an entity in an external system  (for example, you might specify an order ID that is generated by a third-party shopping cart).  Limit 40 characters.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * An identifying token generated by `SqPaymentForm.verifyBuyer()`. Verification tokens encapsulate customer device information and 3-D Secure challenge results to indicate that Square has verified the buyer identity.  For more information, see [SCA Overview](https://developer.squareup.com/docs/sca-overview).
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    verification_token?: string;
    /**
     * If set to `true` and charging a Square Gift Card, a payment might be returned with `amount_money` equal to less than what was requested. For example, a request for $20 when charging a Square Gift Card with a balance of $5 results in an APPROVED payment of $5. You might choose to prompt the buyer for an additional payment to cover the remainder or cancel the Gift Card payment. This field cannot be `true` when `autocomplete = true`.  For more information, see [Partial amount with Square Gift Cards](https://developer.squareup.com/docs/payments-api/take-payments#partial-payment-gift-card).  Default: false
     * @type {boolean}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    accept_partial_authorization?: boolean;
    /**
     * The buyer\'s email address.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    buyer_email_address?: string;
    /**
     * 
     * @type {Address}
     * @memberof CreatePaymentRequest
     */
    
    @Field(() => Address, { nullable: true })
    billing_address?: Address;
    /**
     * 
     * @type {Address}
     * @memberof CreatePaymentRequest
     */
    
    @Field(() => Address, { nullable: true })
    shipping_address?: Address;
    /**
     * An optional note to be entered by the developer when creating a payment.  Limit 500 characters.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    note?: string;
    /**
     * Optional additional payment information to include on the customer\'s card statement as part of the statement description. This can be, for example, an invoice number, ticket number, or short description that uniquely identifies the purchase.  Note that the `statement_description_identifier` might get truncated on the statement description to fit the required information including the Square identifier (SQ *) and name of the seller taking the payment.
     * @type {string}
     * @memberof CreatePaymentRequest
     */
    
    @Field({ nullable: true })
    statement_description_identifier?: string;
}


