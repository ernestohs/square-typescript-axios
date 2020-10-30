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


import { BankAccount } from './bank-account';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Response object returned by ListBankAccounts.
 * @export
 * @class ListBankAccountsResponse
 */
@ObjectType()
export class ListBankAccountsResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof ListBankAccountsResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * List of BankAccounts associated with this account.
     * @type {Array<BankAccount>}
     * @memberof ListBankAccountsResponse
     */
    @Field(() => [BankAccount]) 
    bank_accounts?: Array<BankAccount>;
    /**
     * When a response is truncated, it includes a cursor that you can  use in a subsequent request to fetch next set of bank accounts. If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @type {string}
     * @memberof ListBankAccountsResponse
     */
    @Field() 
    cursor?: string;
}


