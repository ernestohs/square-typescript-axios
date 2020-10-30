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


import { TerminalRefund } from './terminal-refund';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class GetTerminalRefundResponse
 */
@ObjectType()
export class GetTerminalRefundResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof GetTerminalRefundResponse
     */
    
    errors?: Array<Error>;
    /**
     * 
     * @type {TerminalRefund}
     * @memberof GetTerminalRefundResponse
     */
    
    @Field(() => TerminalRefund, { nullable: true })
    refund?: TerminalRefund;
}


