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


import { Shift } from './shift';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A response to request to get a `Shift`. Contains the requested `Shift` object. May contain a set of `Error` objects if the request resulted in errors.
 * @export
 * @class GetShiftResponse
 */
@ObjectType()
export class GetShiftResponse {
    /**
     * 
     * @type {Shift}
     * @memberof GetShiftResponse
     */
    
    @Field(() => Shift, { nullable: true })
    shift?: Shift;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof GetShiftResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
}


