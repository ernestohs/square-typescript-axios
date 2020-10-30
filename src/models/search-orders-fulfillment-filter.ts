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
 * Filter based on [Order Fulfillment](#type-orderfulfillment) information.
 * @export
 * @class SearchOrdersFulfillmentFilter
 */
@ObjectType()
export class SearchOrdersFulfillmentFilter {
    /**
     * List of `fulfillment types` to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values
     * @type {Array<string>}
     * @memberof SearchOrdersFulfillmentFilter
     */
    @Field() 
    fulfillment_types?: Array<string>;
    /**
     * List of `fulfillment states` to filter for. Will return orders if any of its fulfillments match any of the fulfillment states listed in this field. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values
     * @type {Array<string>}
     * @memberof SearchOrdersFulfillmentFilter
     */
    @Field() 
    fulfillment_states?: Array<string>;
}


