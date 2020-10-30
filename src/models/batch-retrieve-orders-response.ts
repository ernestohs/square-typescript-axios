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


import { Order } from './order';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the fields that are included in the response body of a request to the BatchRetrieveOrders endpoint.
 * @export
 * @class BatchRetrieveOrdersResponse
 */
@ObjectType()
export class BatchRetrieveOrdersResponse {
    /**
     * The requested orders. This will omit any requested orders that do not exist.
     * @type {Array<Order>}
     * @memberof BatchRetrieveOrdersResponse
     */
    
    @Field(() => [Order], { nullable: true })
    orders?: Array<Order>;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof BatchRetrieveOrdersResponse
     */
    
    errors?: Array<Error>;
}


