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


import { Location } from './location';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Request object for the [CreateLocation](#endpoint-createlocation) endpoint.
 * @export
 * @class CreateLocationRequest
 */
@ObjectType()
export class CreateLocationRequest {
    /**
     * 
     * @type {Location}
     * @memberof CreateLocationRequest
     */
    @Field(() => Location) 
    location?: Location;
}

