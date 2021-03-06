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
import GraphQLJSON from 'graphql-type-json';

/**
 * A request for a set of `WorkweekConfig` objects
 * @export
 * @class ListWorkweekConfigsRequest
 */
@ObjectType()
export class ListWorkweekConfigsRequest {
    /**
     * Maximum number of Workweek Configs to return per page.
     * @type {number}
     * @memberof ListWorkweekConfigsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * Pointer to the next page of Workweek Config results to fetch.
     * @type {string}
     * @memberof ListWorkweekConfigsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
}


