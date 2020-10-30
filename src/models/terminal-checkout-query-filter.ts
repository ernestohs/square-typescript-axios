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


import { TimeRange } from './time-range';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class TerminalCheckoutQueryFilter
 */
@ObjectType()
export class TerminalCheckoutQueryFilter {
    /**
     * `TerminalCheckout`s associated with a specific device. If no device is specified then all `TerminalCheckout`s for the merchant will be displayed.
     * @type {string}
     * @memberof TerminalCheckoutQueryFilter
     */
    
    @Field({ nullable: true })
    device_id?: string;
    /**
     * 
     * @type {TimeRange}
     * @memberof TerminalCheckoutQueryFilter
     */
    
    @Field(() => TimeRange, { nullable: true })
    created_at?: TimeRange;
    /**
     * Filtered results with the desired status of the `TerminalCheckout` Options: PENDING, IN\\_PROGRESS, CANCELED, COMPLETED
     * @type {string}
     * @memberof TerminalCheckoutQueryFilter
     */
    
    @Field({ nullable: true })
    status?: string;
}


