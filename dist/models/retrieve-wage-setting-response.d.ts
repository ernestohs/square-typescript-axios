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
import { WageSetting } from './wage-setting';
/**
 * Represents a response from a retrieve request, containing the specified `WageSetting` object or error messages.
 * @export
 * @interface RetrieveWageSettingResponse
 */
export interface RetrieveWageSettingResponse {
    /**
     *
     * @type {WageSetting}
     * @memberof RetrieveWageSettingResponse
     */
    wage_setting?: WageSetting;
    /**
     * The errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveWageSettingResponse
     */
    errors?: Array<Error>;
}
