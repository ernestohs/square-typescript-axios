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
import { Money } from './money';
/**
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender. Support is currently limited to USD, CAD and GBP currencies
 * @export
 * @interface ChargeRequestAdditionalRecipient
 */
export interface ChargeRequestAdditionalRecipient {
    /**
     * The location ID for a recipient (other than the merchant) receiving a portion of the tender.
     * @type {string}
     * @memberof ChargeRequestAdditionalRecipient
     */
    location_id: string;
    /**
     * The description of the additional recipient.
     * @type {string}
     * @memberof ChargeRequestAdditionalRecipient
     */
    description: string;
    /**
     *
     * @type {Money}
     * @memberof ChargeRequestAdditionalRecipient
     */
    amount_money: Money;
}