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
import { Money } from './money';
import { TenderCardDetails } from './tender-card-details';
import { TenderCashDetails } from './tender-cash-details';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a tender (i.e., a method of payment) used in a Square transaction.
 * @export
 * @class Tender
 */
@ObjectType()
export class Tender {
    /**
     * The tender\'s unique ID.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The ID of the transaction\'s associated location.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * The ID of the tender\'s associated transaction.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    transaction_id?: string;
    /**
     * The timestamp for when the tender was created, in RFC 3339 format.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * An optional note associated with the tender at the time of payment.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    note?: string;
    /**
     * 
     * @type {Money}
     * @memberof Tender
     */
    
    @Field(() => Money, { nullable: true })
    amount_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Tender
     */
    
    @Field(() => Money, { nullable: true })
    tip_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Tender
     */
    
    @Field(() => Money, { nullable: true })
    processing_fee_money?: Money;
    /**
     * If the tender is associated with a customer or represents a customer\'s card on file, this is the ID of the associated customer.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    customer_id?: string;
    /**
     * The type of tender, such as `CARD` or `CASH`. See [TenderType](#type-tendertype) for possible values
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: false })
    type: string;
    /**
     * 
     * @type {TenderCardDetails}
     * @memberof Tender
     */
    
    @Field(() => TenderCardDetails, { nullable: true })
    card_details?: TenderCardDetails;
    /**
     * 
     * @type {TenderCashDetails}
     * @memberof Tender
     */
    
    @Field(() => TenderCashDetails, { nullable: true })
    cash_details?: TenderCashDetails;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this tender. For example, fees assessed on the purchase by a third party integration.
     * @type {Array<AdditionalRecipient>}
     * @memberof Tender
     */
    
    @Field(() => [AdditionalRecipient], { nullable: true })
    additional_recipients?: Array<AdditionalRecipient>;
    /**
     * The ID of the `Payment` that corresponds to this tender. This value is only present for payments created with the v2 Payments API.
     * @type {string}
     * @memberof Tender
     */
    
    @Field({ nullable: true })
    payment_id?: string;
}


