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


import { InventoryChange } from './inventory-change';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class BatchRetrieveInventoryChangesResponse
 */
@ObjectType()
export class BatchRetrieveInventoryChangesResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof BatchRetrieveInventoryChangesResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * The current calculated inventory changes for the requested objects and locations.
     * @type {Array<InventoryChange>}
     * @memberof BatchRetrieveInventoryChangesResponse
     */
    @Field(() => [InventoryChange]) 
    changes?: Array<InventoryChange>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     * @type {string}
     * @memberof BatchRetrieveInventoryChangesResponse
     */
    @Field() 
    cursor?: string;
}

