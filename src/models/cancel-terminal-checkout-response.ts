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


import { TerminalCheckout } from './terminal-checkout';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class CancelTerminalCheckoutResponse
 */
@ObjectType()
export class CancelTerminalCheckoutResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CancelTerminalCheckoutResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {TerminalCheckout}
     * @memberof CancelTerminalCheckoutResponse
     */
    
    @Field(() => TerminalCheckout, { nullable: true })
    checkout?: TerminalCheckout;
}


