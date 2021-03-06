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


import { InventoryAdjustment } from './inventory-adjustment';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class RetrieveInventoryAdjustmentResponse
 */
@ObjectType()
export class RetrieveInventoryAdjustmentResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveInventoryAdjustmentResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {InventoryAdjustment}
     * @memberof RetrieveInventoryAdjustmentResponse
     */
    
    @Field(() => InventoryAdjustment, { nullable: true })
    adjustment?: InventoryAdjustment;
}


