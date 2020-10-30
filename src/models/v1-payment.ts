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


import { Device } from './device';
import { V1Money } from './v1-money';
import { V1PaymentItemization } from './v1-payment-itemization';
import { V1PaymentSurcharge } from './v1-payment-surcharge';
import { V1PaymentTax } from './v1-payment-tax';
import { V1Refund } from './v1-refund';
import { V1Tender } from './v1-tender';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A payment represents a paid transaction between a Square merchant and a customer. Payment details are usually available from Connect API endpoints within a few minutes after the transaction completes.  Each Payment object includes several fields that end in `_money`. These fields describe the various amounts of money that contribute to the payment total:  <ul> <li> Monetary values are <b>positive</b> if they represent an <em>increase</em> in the amount of money the merchant receives (e.g., <code>tax_money</code>, <code>tip_money</code>). </li> <li> Monetary values are <b>negative</b> if they represent an <em>decrease</em> in the amount of money the merchant receives (e.g., <code>discount_money</code>, <code>refunded_money</code>). </li> </ul>
 * @export
 * @class V1Payment
 */
@ObjectType()
export class V1Payment {
    /**
     * The payment\'s unique identifier.
     * @type {string}
     * @memberof V1Payment
     */
    @Field() 
    id?: string;
    /**
     * The unique identifier of the merchant that took the payment.
     * @type {string}
     * @memberof V1Payment
     */
    @Field() 
    merchant_id?: string;
    /**
     * The time when the payment was created, in ISO 8601 format. Reflects the time of the first payment if the object represents an incomplete partial payment, and the time of the last or complete payment otherwise.
     * @type {string}
     * @memberof V1Payment
     */
    @Field() 
    created_at?: string;
    /**
     * The unique identifier of the Square account that took the payment.
     * @type {string}
     * @memberof V1Payment
     */
    @Field() 
    creator_id?: string;
    /**
     * 
     * @type {Device}
     * @memberof V1Payment
     */
    @Field(() => Device) 
    device?: Device;
    /**
     * The URL of the payment\'s detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page.
     * @type {string}
     * @memberof V1Payment
     */
    @Field() 
    payment_url?: string;
    /**
     * The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt for the first tender listed in the payment\'s tender field. Each Tender object has its own receipt_url field you can use to get the other receipts associated with a split tender payment.
     * @type {string}
     * @memberof V1Payment
     */
    @Field() 
    receipt_url?: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    inclusive_tax_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    additive_tax_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    tax_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    tip_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    discount_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    total_collected_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    processing_fee_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    net_total_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    refunded_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    swedish_rounding_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    gross_sales_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    net_sales_money?: V1Money;
    /**
     * All of the inclusive taxes associated with the payment.
     * @type {Array<V1PaymentTax>}
     * @memberof V1Payment
     */
    @Field(() => [V1PaymentTax]) 
    inclusive_tax?: Array<V1PaymentTax>;
    /**
     * All of the additive taxes associated with the payment.
     * @type {Array<V1PaymentTax>}
     * @memberof V1Payment
     */
    @Field(() => [V1PaymentTax]) 
    additive_tax?: Array<V1PaymentTax>;
    /**
     * All of the tenders associated with the payment.
     * @type {Array<V1Tender>}
     * @memberof V1Payment
     */
    @Field(() => [V1Tender]) 
    tender?: Array<V1Tender>;
    /**
     * All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange.
     * @type {Array<V1Refund>}
     * @memberof V1Payment
     */
    @Field(() => [V1Refund]) 
    refunds?: Array<V1Refund>;
    /**
     * The items purchased in the payment.
     * @type {Array<V1PaymentItemization>}
     * @memberof V1Payment
     */
    @Field(() => [V1PaymentItemization]) 
    itemizations?: Array<V1PaymentItemization>;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Payment
     */
    @Field(() => V1Money) 
    surcharge_money?: V1Money;
    /**
     * A list of all surcharges associated with the payment.
     * @type {Array<V1PaymentSurcharge>}
     * @memberof V1Payment
     */
    @Field(() => [V1PaymentSurcharge]) 
    surcharges?: Array<V1PaymentSurcharge>;
    /**
     * Indicates whether or not the payment is only partially paid for. If true, this payment will have the tenders collected so far, but the itemizations will be empty until the payment is completed.
     * @type {boolean}
     * @memberof V1Payment
     */
    @Field() 
    is_partial?: boolean;
}


