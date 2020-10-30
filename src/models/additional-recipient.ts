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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents an additional recipient (other than the merchant) receiving a portion of this tender.
 * @export
 * @class AdditionalRecipient
 */
@ObjectType()
export class AdditionalRecipient {
    /**
     * The location ID for a recipient (other than the merchant) receiving a portion of this tender.
     * @type {string}
     * @memberof AdditionalRecipient
     */
    @Field() 
    location_id: string;
    /**
     * The description of the additional recipient.
     * @type {string}
     * @memberof AdditionalRecipient
     */
    @Field() 
    description: string;
    /**
     * 
     * @type {Money}
     * @memberof AdditionalRecipient
     */
    @Field(() => Money) 
    amount_money: Money;
    /**
     * The unique ID for this `AdditionalRecipientReceivable`, assigned by the server.
     * @type {string}
     * @memberof AdditionalRecipient
     */
    @Field() 
    receivable_id?: string;
}


