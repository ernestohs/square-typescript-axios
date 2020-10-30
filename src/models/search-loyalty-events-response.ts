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


import { LoyaltyEvent } from './loyalty-event';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A response that contains loyalty events that satisfy the search  criteria, in order by the `created_at` date.
 * @export
 * @class SearchLoyaltyEventsResponse
 */
@ObjectType()
export class SearchLoyaltyEventsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof SearchLoyaltyEventsResponse
     */
    
    errors?: Array<Error>;
    /**
     * The loyalty events that satisfy the search criteria.
     * @type {Array<LoyaltyEvent>}
     * @memberof SearchLoyaltyEventsResponse
     */
    
    @Field(() => [LoyaltyEvent], { nullable: true })
    events?: Array<LoyaltyEvent>;
    /**
     * The pagination cursor to be used in a subsequent  request. If empty, this is the final response.  For more information,  see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination).
     * @type {string}
     * @memberof SearchLoyaltyEventsResponse
     */
    
    @Field({ nullable: true })
    cursor?: string;
}


