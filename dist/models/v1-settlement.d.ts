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
import { V1SettlementEntry } from './v1-settlement-entry';
/**
 * V1Settlement
 * @export
 * @class V1Settlement
 */
export declare class V1Settlement {
    /**
     * The settlement\'s unique identifier.
     * @type {string}
     * @memberof V1Settlement
     */
    id?: string;
    /**
     * The settlement\'s current status. See [V1SettlementStatus](#type-v1settlementstatus) for possible values
     * @type {string}
     * @memberof V1Settlement
     */
    status?: string;
    /**
     *
     * @type {V1Money}
     * @memberof V1Settlement
     */
    total_money?: V1Money;
    /**
     * The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format.
     * @type {string}
     * @memberof V1Settlement
     */
    initiated_at?: string;
    /**
     * The Square-issued unique identifier for the bank account associated with the settlement.
     * @type {string}
     * @memberof V1Settlement
     */
    bank_account_id?: string;
    /**
     * The entries included in this settlement.
     * @type {Array<V1SettlementEntry>}
     * @memberof V1Settlement
     */
    entries?: Array<V1SettlementEntry>;
}