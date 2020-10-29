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
/**
 * Defines the body parameters that can be provided in a request to the __CreateMobileAuthorizationCode__ endpoint.
 * @export
 * @interface CreateMobileAuthorizationCodeRequest
 */
export interface CreateMobileAuthorizationCodeRequest {
    /**
     * The Square location ID the authorization code should be tied to.
     * @type {string}
     * @memberof CreateMobileAuthorizationCodeRequest
     */
    location_id?: string;
}
