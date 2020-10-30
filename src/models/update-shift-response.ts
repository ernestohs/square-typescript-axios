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

/**
 * The response to a request to update a `Shift`. Contains the updated `Shift` object. May contain a set of `Error` objects if the request resulted in errors.
 * @export
 * @class UpdateShiftResponse
 */
@ObjectType()
export class UpdateShiftResponse {
    /**
     * 
     * @type {Shift}
     * @memberof UpdateShiftResponse
     */
    @Field(() => Shift) 
    shift?: Shift;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof UpdateShiftResponse
     */
    @Field() 
    errors?: Array<Error>;
}


