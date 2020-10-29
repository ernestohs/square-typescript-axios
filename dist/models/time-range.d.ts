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
 * Represents a generic time range. The start and end values are represented in RFC 3339 format. Time ranges are customized to be inclusive or exclusive based on the needs of a particular endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges are handled.
 * @export
 * @interface TimeRange
 */
export interface TimeRange {
    /**
     * A datetime value in RFC 3339 format indicating when the time range starts.
     * @type {string}
     * @memberof TimeRange
     */
    start_at?: string;
    /**
     * A datetime value in RFC 3339 format indicating when the time range ends.
     * @type {string}
     * @memberof TimeRange
     */
    end_at?: string;
}
