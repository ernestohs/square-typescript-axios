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
 * A lightweight description of an [Order](#type-order) that is returned when `returned_entries` is true on a [SearchOrderRequest](#type-searchorderrequest)
 * @export
 * @class OrderEntry
 */
@ObjectType()
export class OrderEntry {
    /**
     * The id of the Order
     * @type {string}
     * @memberof OrderEntry
     */
    
    @Field({ nullable: true })
    order_id?: string;
    /**
     * Version number which is incremented each time an update is committed to the order. Orders that were not created through the API will not include a version and thus cannot be updated.  [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
     * @type {number}
     * @memberof OrderEntry
     */
    
    @Field({ nullable: true })
    version?: number;
    /**
     * The location id the Order belongs to.
     * @type {string}
     * @memberof OrderEntry
     */
    
    @Field({ nullable: true })
    location_id?: string;
}


