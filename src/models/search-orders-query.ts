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


import { SearchOrdersFilter } from './search-orders-filter';
import { SearchOrdersSort } from './search-orders-sort';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Contains query criteria for the search.
 * @export
 * @class SearchOrdersQuery
 */
@ObjectType()
export class SearchOrdersQuery {
    /**
     * 
     * @type {SearchOrdersFilter}
     * @memberof SearchOrdersQuery
     */
    
    @Field(() => SearchOrdersFilter, { nullable: true })
    filter?: SearchOrdersFilter;
    /**
     * 
     * @type {SearchOrdersSort}
     * @memberof SearchOrdersQuery
     */
    
    @Field(() => SearchOrdersSort, { nullable: true })
    sort?: SearchOrdersSort;
}


