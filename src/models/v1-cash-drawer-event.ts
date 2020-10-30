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


import { V1Money } from './v1-money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * V1CashDrawerEvent
 * @export
 * @class V1CashDrawerEvent
 */
@ObjectType()
export class V1CashDrawerEvent {
    /**
     * The event\'s unique ID.
     * @type {string}
     * @memberof V1CashDrawerEvent
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The ID of the employee that created the event.
     * @type {string}
     * @memberof V1CashDrawerEvent
     */
    
    @Field({ nullable: true })
    employee_id?: string;
    /**
     * The type of event that occurred. See [V1CashDrawerEventEventType](#type-v1cashdrawereventeventtype) for possible values
     * @type {string}
     * @memberof V1CashDrawerEvent
     */
    
    @Field({ nullable: true })
    event_type?: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1CashDrawerEvent
     */
    
    @Field(() => V1Money, { nullable: true })
    event_money?: V1Money;
    /**
     * The time when the event occurred, in ISO 8601 format.
     * @type {string}
     * @memberof V1CashDrawerEvent
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * An optional description of the event, entered by the employee that created it.
     * @type {string}
     * @memberof V1CashDrawerEvent
     */
    
    @Field({ nullable: true })
    description?: string;
}


