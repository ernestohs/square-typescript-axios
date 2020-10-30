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


import { ShiftQuery } from './shift-query';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A request for a filtered and sorted set of `Shift` objects.
 * @export
 * @class SearchShiftsRequest
 */
@ObjectType()
export class SearchShiftsRequest {
    /**
     * 
     * @type {ShiftQuery}
     * @memberof SearchShiftsRequest
     */
    
    @Field(() => ShiftQuery, { nullable: true })
    query?: ShiftQuery;
    /**
     * number of resources in a page (200 by default).
     * @type {number}
     * @memberof SearchShiftsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * opaque cursor for fetching the next page.
     * @type {string}
     * @memberof SearchShiftsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
}


