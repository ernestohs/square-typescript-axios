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


import { LoyaltyEventQuery } from './loyalty-event-query';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A request to search for loyalty events.
 * @export
 * @class SearchLoyaltyEventsRequest
 */
@ObjectType()
export class SearchLoyaltyEventsRequest {
    /**
     * 
     * @type {LoyaltyEventQuery}
     * @memberof SearchLoyaltyEventsRequest
     */
    
    @Field(() => LoyaltyEventQuery, { nullable: true })
    query?: LoyaltyEventQuery;
    /**
     * The maximum number of results to include in the response.  The last page might contain fewer events.  The default is 30 events.
     * @type {number}
     * @memberof SearchLoyaltyEventsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query. For more information, see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination).
     * @type {string}
     * @memberof SearchLoyaltyEventsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
}


