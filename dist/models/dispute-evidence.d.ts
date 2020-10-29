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
 *
 * @export
 * @interface DisputeEvidence
 */
export interface DisputeEvidence {
    /**
     * The Square-generated ID of the evidence.
     * @type {string}
     * @memberof DisputeEvidence
     */
    evidence_id?: string;
    /**
     * The ID of the dispute the evidence is associated with.
     * @type {string}
     * @memberof DisputeEvidence
     */
    dispute_id?: string;
    /**
     * The time when the next action is due, in RFC 3339 format.
     * @type {string}
     * @memberof DisputeEvidence
     */
    uploaded_at?: string;
    /**
     * The type of the evidence. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
     * @type {string}
     * @memberof DisputeEvidence
     */
    evidence_type?: string;
}
