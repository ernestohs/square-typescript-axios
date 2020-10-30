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


import { CustomerGroup } from './customer-group';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the body parameters that can be provided in a request to the [UpdateCustomerGroup](#endpoint-updatecustomergroup) endpoint.
 * @export
 * @class UpdateCustomerGroupRequest
 */
@ObjectType()
export class UpdateCustomerGroupRequest {
    /**
     * 
     * @type {CustomerGroup}
     * @memberof UpdateCustomerGroupRequest
     */
    @Field(() => CustomerGroup) 
    group: CustomerGroup;
}


