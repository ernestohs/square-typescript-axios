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
 * Represents an error encountered during a request to the Connect API.  See [Handling errors](#handlingerrors) for more information.
 * @export
 * @class ModelError
 */
@ObjectType()
export class ModelError {
    /**
     * The high-level category for the error. See `ErrorCategory` for possible values. See [ErrorCategory](#type-errorcategory) for possible values
     * @type {string}
     * @memberof ModelError
     */
    @Field() 
    category: string;
    /**
     * The specific code of the error. See `ErrorCode` for possible values See [ErrorCode](#type-errorcode) for possible values
     * @type {string}
     * @memberof ModelError
     */
    @Field() 
    code: string;
    /**
     * A human-readable description of the error for debugging purposes.
     * @type {string}
     * @memberof ModelError
     */
    @Field() 
    detail?: string;
    /**
     * The name of the field provided in the original request (if any) that the error pertains to.
     * @type {string}
     * @memberof ModelError
     */
    @Field() 
    field?: string;
}

