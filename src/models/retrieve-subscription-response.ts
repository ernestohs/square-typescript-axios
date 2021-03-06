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


import { Subscription } from './subscription';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Defines the fields that are included in the response from the [RetrieveSubscription](#endpoint-subscriptions-retrievesubscription) endpoint.
 * @export
 * @class RetrieveSubscriptionResponse
 */
@ObjectType()
export class RetrieveSubscriptionResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof RetrieveSubscriptionResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {Subscription}
     * @memberof RetrieveSubscriptionResponse
     */
    
    @Field(() => Subscription, { nullable: true })
    subscription?: Subscription;
}


