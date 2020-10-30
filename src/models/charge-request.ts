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


import { AdditionalRecipient } from './additional-recipient';
import { Address } from './address';
import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the parameters that can be included in the body of a request to the [Charge](#endpoint-charge) endpoint.  Deprecated - recommend using [CreatePayment](#endpoint-payments-createpayment)
 * @export
 * @class ChargeRequest
 */
@ObjectType()
export class ChargeRequest {
    /**
     * A value you specify that uniquely identifies this transaction among transactions you\'ve created.  If you\'re unsure whether a particular transaction succeeded, you can reattempt it with the same idempotency key without worrying about double-charging the buyer.  See [Idempotency keys](#idempotencykeys) for more information.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: false })
    idempotency_key: string;
    /**
     * 
     * @type {Money}
     * @memberof ChargeRequest
     */
    
    @Field(() => Money, { nullable: false })
    amount_money: Money;
    /**
     * A nonce generated from the `SqPaymentForm` that represents the card to charge.  The application that provides a nonce to this endpoint must be the _same application_ that generated the nonce with the `SqPaymentForm`. Otherwise, the nonce is invalid.  Do not provide a value for this field if you provide a value for `customer_card_id`.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    card_nonce?: string;
    /**
     * The ID of the customer card on file to charge. Do not provide a value for this field if you provide a value for `card_nonce`.  If you provide this value, you _must_ also provide a value for `customer_id`.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    customer_card_id?: string;
    /**
     * If `true`, the request will only perform an Auth on the provided card. You can then later perform either a Capture (with the `CaptureTransaction` or a Void (with the `VoidTransaction`.  Default value: `false`
     * @type {boolean}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    delay_capture?: boolean;
    /**
     * An optional ID you can associate with the transaction for your own purposes (such as to associate the transaction with an entity ID in your own database).  This value cannot exceed 40 characters.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * An optional note to associate with the transaction.  This value cannot exceed 60 characters.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    note?: string;
    /**
     * The ID of the customer to associate this transaction with. This field is required if you provide a value for `customer_card_id`, and optional otherwise.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    customer_id?: string;
    /**
     * 
     * @type {Address}
     * @memberof ChargeRequest
     */
    
    @Field(() => Address, { nullable: true })
    billing_address?: Address;
    /**
     * 
     * @type {Address}
     * @memberof ChargeRequest
     */
    
    @Field(() => Address, { nullable: true })
    shipping_address?: Address;
    /**
     * The buyer\'s email address, if available. This value is optional, but this transaction is ineligible for chargeback protection if it is not provided.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    buyer_email_address?: string;
    /**
     * The ID of the order to associate with this transaction.  If you provide this value, the `amount_money` value of your request must __exactly match__ the value of the order\'s `total_money` field.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    order_id?: string;
    /**
     * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be split from here.  If you provide this value, the `amount_money` value in your additional_recipients must not be more than 90% of the `amount_money` value in the charge request. The `location_id` must be the valid location of the app owner merchant.  This field requires the `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.  This field is currently not supported in sandbox.
     * @type {Array<AdditionalRecipient>}
     * @memberof ChargeRequest
     */
    
    @Field(() => [AdditionalRecipient], { nullable: true })
    additional_recipients?: Array<AdditionalRecipient>;
    /**
     * A token generated by SqPaymentForm\'s verifyBuyer() that represents customer\'s device info and 3ds challenge result.
     * @type {string}
     * @memberof ChargeRequest
     */
    
    @Field({ nullable: true })
    verification_token?: string;
}


