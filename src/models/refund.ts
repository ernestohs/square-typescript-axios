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

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a refund processed for a Square transaction.
 * @export
 * @class Refund
 */
@ObjectType()
export class Refund {
    /**
     * The refund\'s unique ID.
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: false })
    id: string;
    /**
     * The ID of the refund\'s associated location.
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: false })
    location_id: string;
    /**
     * The ID of the transaction that the refunded tender is part of.
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: false })
    transaction_id: string;
    /**
     * The ID of the refunded tender.
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: false })
    tender_id: string;
    /**
     * The timestamp for when the refund was created, in RFC 3339 format.
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The reason for the refund being issued.
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: false })
    reason: string;
    /**
     * 
     * @type {Money}
     * @memberof Refund
     */
    
    @Field(() => Money, { nullable: false })
    amount_money: Money;
    /**
     * The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`, or `FAILED`). See [RefundStatus](#type-refundstatus) for possible values
     * @type {string}
     * @memberof Refund
     */
    
    @Field({ nullable: false })
    status: string;
    /**
     * 
     * @type {Money}
     * @memberof Refund
     */
    
    @Field(() => Money, { nullable: true })
    processing_fee_money?: Money;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this refund. For example, fees assessed on a refund of a purchase by a third party integration.
     * @type {Array<AdditionalRecipient>}
     * @memberof Refund
     */
    
    @Field(() => [AdditionalRecipient], { nullable: true })
    additional_recipients?: Array<AdditionalRecipient>;
}


