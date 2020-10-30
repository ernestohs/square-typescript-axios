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


import { InventoryCount } from './inventory-count';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class BatchChangeInventoryResponse
 */
@ObjectType()
export class BatchChangeInventoryResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof BatchChangeInventoryResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * The current counts for all objects referenced in the request.
     * @type {Array<InventoryCount>}
     * @memberof BatchChangeInventoryResponse
     */
    @Field(() => [InventoryCount]) 
    counts?: Array<InventoryCount>;
}


