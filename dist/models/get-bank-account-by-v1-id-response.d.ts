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
/**
 * Response object returned by GetBankAccountByV1Id.
 * @export
 * @interface GetBankAccountByV1IdResponse
 */
export interface GetBankAccountByV1IdResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof GetBankAccountByV1IdResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {BankAccount}
     * @memberof GetBankAccountByV1IdResponse
     */
    bank_account?: BankAccount;
}
