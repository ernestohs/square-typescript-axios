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
 * Represents a group of customer profiles that match one or more predefined filter criteria.   Segments (also known as Smart Groups) are defined and created within Customer Directory in the Square Dashboard or Point of Sale.
 * @export
 * @interface CustomerSegment
 */
export interface CustomerSegment {
    /**
     * Unique Square-generated ID for the segment.
     * @type {string}
     * @memberof CustomerSegment
     */
    id?: string;
    /**
     * Name of the segment.
     * @type {string}
     * @memberof CustomerSegment
     */
    name: string;
    /**
     * The timestamp when the segment was created, in RFC 3339 format.
     * @type {string}
     * @memberof CustomerSegment
     */
    created_at?: string;
    /**
     * The timestamp when the segment was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof CustomerSegment
     */
    updated_at?: string;
}
