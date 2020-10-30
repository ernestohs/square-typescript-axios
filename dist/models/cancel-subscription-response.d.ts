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
/**
 * Defines fields that are included in a  [CancelSubscription](#endpoint-subscriptions-cancelsubscription) response.
 * @export
 * @class CancelSubscriptionResponse
 */
export declare class CancelSubscriptionResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CancelSubscriptionResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {Subscription}
     * @memberof CancelSubscriptionResponse
     */
    subscription?: Subscription;
}
