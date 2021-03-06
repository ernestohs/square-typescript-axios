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


import { V1Timecard } from './v1-timecard';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class V1ListTimecardsResponse
 */
@ObjectType()
export class V1ListTimecardsResponse {
    /**
     * 
     * @type {Array<V1Timecard>}
     * @memberof V1ListTimecardsResponse
     */
    
    @Field(() => [V1Timecard], { nullable: true })
    items?: Array<V1Timecard>;
}


