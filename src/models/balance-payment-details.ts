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
 * Reflects the current status of a balance payment.
 * @export
 * @class BalancePaymentDetails
 */
@ObjectType()
export class BalancePaymentDetails {
    /**
     * ID for the account used to fund the payment.
     * @type {string}
     * @memberof BalancePaymentDetails
     */
    
    @Field({ nullable: true })
    account_id?: string;
    /**
     * The balance payment’s current state. Can be `COMPLETED` or `FAILED`.
     * @type {string}
     * @memberof BalancePaymentDetails
     */
    
    @Field({ nullable: true })
    status?: string;
}


