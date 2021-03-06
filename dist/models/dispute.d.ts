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
import { DisputedPayment } from './disputed-payment';
import { Money } from './money';
/**
 * Represents a dispute a cardholder initiated with their bank.
 * @export
 * @class Dispute
 */
export declare class Dispute {
    /**
     * Unique ID for this `Dispute`, generated by Square.
     * @type {string}
     * @memberof Dispute
     */
    dispute_id?: string;
    /**
     *
     * @type {Money}
     * @memberof Dispute
     */
    amount_money?: Money;
    /**
     * The dispute reason why cardholder initiated dispute with their bank. See [DisputeReason](#type-disputereason) for possible values
     * @type {string}
     * @memberof Dispute
     */
    reason?: string;
    /**
     * The current state of this dispute. See [DisputeState](#type-disputestate) for possible values
     * @type {string}
     * @memberof Dispute
     */
    state?: string;
    /**
     * The time when the next action is due, in RFC 3339 format.
     * @type {string}
     * @memberof Dispute
     */
    due_at?: string;
    /**
     *
     * @type {DisputedPayment}
     * @memberof Dispute
     */
    disputed_payment?: DisputedPayment;
    /**
     * The IDs of the evidence associated with the dispute.
     * @type {Array<string>}
     * @memberof Dispute
     */
    evidence_ids?: Array<string>;
    /**
     * The card brand used in the disputed payment. See [CardBrand](#type-cardbrand) for possible values
     * @type {string}
     * @memberof Dispute
     */
    card_brand?: string;
    /**
     * Timestamp when the dispute was created, in RFC 3339 format.
     * @type {string}
     * @memberof Dispute
     */
    created_at?: string;
    /**
     * Timestamp when dispute was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof Dispute
     */
    updated_at?: string;
    /**
     * ID of the dispute in the card brand system, generated by the card brand.
     * @type {string}
     * @memberof Dispute
     */
    brand_dispute_id?: string;
    /**
     * Timestamp when the dispute was reported, in RFC 3339 format.
     * @type {string}
     * @memberof Dispute
     */
    reported_date?: string;
    /**
     * The current version of the `Dispute`.
     * @type {number}
     * @memberof Dispute
     */
    version?: number;
    /**
     * The ID of location where dispute originated.
     * @type {string}
     * @memberof Dispute
     */
    location_id?: string;
}
