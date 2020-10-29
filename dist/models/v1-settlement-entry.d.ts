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
import { V1Money } from './v1-money';
/**
 * V1SettlementEntry
 * @export
 * @interface V1SettlementEntry
 */
export interface V1SettlementEntry {
    /**
     * The settlement\'s unique identifier.
     * @type {string}
     * @memberof V1SettlementEntry
     */
    payment_id?: string;
    /**
     * The settlement\'s current status. See [V1SettlementEntryType](#type-v1settlemententrytype) for possible values
     * @type {string}
     * @memberof V1SettlementEntry
     */
    type?: string;
    /**
     *
     * @type {V1Money}
     * @memberof V1SettlementEntry
     */
    amount_money?: V1Money;
    /**
     *
     * @type {V1Money}
     * @memberof V1SettlementEntry
     */
    fee_money?: V1Money;
}
