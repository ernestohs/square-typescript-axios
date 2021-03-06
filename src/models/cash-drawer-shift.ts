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


import { CashDrawerDevice } from './cash-drawer-device';
import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * This model gives the details of a cash drawer shift. The cash_payment_money, cash_refund_money, cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective event types.
 * @export
 * @class CashDrawerShift
 */
@ObjectType()
export class CashDrawerShift {
    /**
     * The shift unique ID.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The shift current state. See [CashDrawerShiftState](#type-cashdrawershiftstate) for possible values
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    state?: string;
    /**
     * The time when the shift began, in ISO 8601 format.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    opened_at?: string;
    /**
     * The time when the shift ended, in ISO 8601 format.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    ended_at?: string;
    /**
     * The time when the shift was closed, in ISO 8601 format.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    closed_at?: string;
    /**
     * The IDs of all employees that were logged into Square Point of Sale at any point while the cash drawer shift was open.
     * @type {Array<string>}
     * @memberof CashDrawerShift
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    employee_ids?: Array<string>;
    /**
     * The ID of the employee that started the cash drawer shift.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    opening_employee_id?: string;
    /**
     * The ID of the employee that ended the cash drawer shift.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    ending_employee_id?: string;
    /**
     * The ID of the employee that closed the cash drawer shift by auditing the cash drawer contents.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    closing_employee_id?: string;
    /**
     * The free-form text description of a cash drawer by an employee.
     * @type {string}
     * @memberof CashDrawerShift
     */
    
    @Field({ nullable: true })
    description?: string;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    opened_cash_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    cash_payment_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    cash_refunds_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    cash_paid_in_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    cash_paid_out_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    expected_cash_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShift
     */
    
    @Field(() => Money, { nullable: true })
    closed_cash_money?: Money;
    /**
     * 
     * @type {CashDrawerDevice}
     * @memberof CashDrawerShift
     */
    
    @Field(() => CashDrawerDevice, { nullable: true })
    device?: CashDrawerDevice;
}


