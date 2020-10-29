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
import { LoyaltyProgram } from './loyalty-program';
/**
 * A response that contains all loyalty programs.
 * @export
 * @interface ListLoyaltyProgramsResponse
 */
export interface ListLoyaltyProgramsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListLoyaltyProgramsResponse
     */
    errors?: Array<Error>;
    /**
     * A list of `LoyaltyProgram` for the merchant.
     * @type {Array<LoyaltyProgram>}
     * @memberof ListLoyaltyProgramsResponse
     */
    programs?: Array<LoyaltyProgram>;
}