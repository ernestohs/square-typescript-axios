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


import { CustomerCreationSourceFilter } from './customer-creation-source-filter';
import { CustomerTextFilter } from './customer-text-filter';
import { FilterValue } from './filter-value';
import { TimeRange } from './time-range';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a set of `CustomerQuery` filters used to limit the set of `Customers` returned by `SearchCustomers`.
 * @export
 * @class CustomerFilter
 */
@ObjectType()
export class CustomerFilter {
    /**
     * 
     * @type {CustomerCreationSourceFilter}
     * @memberof CustomerFilter
     */
    @Field(() => CustomerCreationSourceFilter) 
    creation_source?: CustomerCreationSourceFilter;
    /**
     * 
     * @type {TimeRange}
     * @memberof CustomerFilter
     */
    @Field(() => TimeRange) 
    created_at?: TimeRange;
    /**
     * 
     * @type {TimeRange}
     * @memberof CustomerFilter
     */
    @Field(() => TimeRange) 
    updated_at?: TimeRange;
    /**
     * 
     * @type {CustomerTextFilter}
     * @memberof CustomerFilter
     */
    @Field(() => CustomerTextFilter) 
    email_address?: CustomerTextFilter;
    /**
     * 
     * @type {CustomerTextFilter}
     * @memberof CustomerFilter
     */
    @Field(() => CustomerTextFilter) 
    phone_number?: CustomerTextFilter;
    /**
     * 
     * @type {CustomerTextFilter}
     * @memberof CustomerFilter
     */
    @Field(() => CustomerTextFilter) 
    reference_id?: CustomerTextFilter;
    /**
     * 
     * @type {FilterValue}
     * @memberof CustomerFilter
     */
    @Field(() => FilterValue) 
    group_ids?: FilterValue;
}


