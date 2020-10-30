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


import { CustomerSegment } from './customer-segment';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the fields included in the response body for requests to __RetrieveCustomerSegment__.  One of `errors` or `segment` is present in a given response (never both).
 * @export
 * @class RetrieveCustomerSegmentResponse
 */
@ObjectType()
export class RetrieveCustomerSegmentResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveCustomerSegmentResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * 
     * @type {CustomerSegment}
     * @memberof RetrieveCustomerSegmentResponse
     */
    @Field(() => CustomerSegment) 
    segment?: CustomerSegment;
}

