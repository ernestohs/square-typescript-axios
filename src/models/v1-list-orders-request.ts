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
 * 
 * @export
 * @class V1ListOrdersRequest
 */
@ObjectType()
export class V1ListOrdersRequest {
    /**
     * TThe order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof V1ListOrdersRequest
     */
    
    @Field({ nullable: true })
    order?: string;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     * @type {number}
     * @memberof V1ListOrdersRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     * @type {string}
     * @memberof V1ListOrdersRequest
     */
    
    @Field({ nullable: true })
    batch_token?: string;
}


