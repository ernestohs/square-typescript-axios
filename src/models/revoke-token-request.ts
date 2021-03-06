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
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class RevokeTokenRequest
 */
@ObjectType()
export class RevokeTokenRequest {
    /**
     * The Square issued ID for your application, available from the [application dashboard](https://connect.squareup.com/apps).
     * @type {string}
     * @memberof RevokeTokenRequest
     */
    
    @Field({ nullable: true })
    client_id?: string;
    /**
     * The access token of the merchant whose token you want to revoke. Do not provide a value for merchant_id if you provide this parameter.
     * @type {string}
     * @memberof RevokeTokenRequest
     */
    
    @Field({ nullable: true })
    access_token?: string;
    /**
     * The ID of the merchant whose token you want to revoke. Do not provide a value for access_token if you provide this parameter.
     * @type {string}
     * @memberof RevokeTokenRequest
     */
    
    @Field({ nullable: true })
    merchant_id?: string;
    /**
     * If `true`, terminate the given single access token, but do not terminate the entire authorization. Default: `false`
     * @type {boolean}
     * @memberof RevokeTokenRequest
     */
    
    @Field({ nullable: true })
    revoke_only_access_token?: boolean;
}


