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
 * Sets the Day of the week and hour of the day that a business starts a work week. Used for the calculation of overtime pay.
 * @export
 * @class WorkweekConfig
 */
@ObjectType()
export class WorkweekConfig {
    /**
     * UUID for this object
     * @type {string}
     * @memberof WorkweekConfig
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The day of the week on which a business week cuts over for compensation purposes. See [Weekday](#type-weekday) for possible values
     * @type {string}
     * @memberof WorkweekConfig
     */
    
    @Field({ nullable: false })
    start_of_week: string;
    /**
     * The local time at which a business week cuts over. Represented as a string in `HH:MM` format (`HH:MM:SS` is also accepted, but seconds are truncated).
     * @type {string}
     * @memberof WorkweekConfig
     */
    
    @Field({ nullable: false })
    start_of_day_local_time: string;
    /**
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write; potentially overwriting data from another write.
     * @type {number}
     * @memberof WorkweekConfig
     */
    
    @Field({ nullable: true })
    version?: number;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC
     * @type {string}
     * @memberof WorkweekConfig
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC
     * @type {string}
     * @memberof WorkweekConfig
     */
    
    @Field({ nullable: true })
    updated_at?: string;
}


