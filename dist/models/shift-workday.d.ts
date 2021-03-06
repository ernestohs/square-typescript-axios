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
import { DateRange } from './date-range';
/**
 * A `Shift` search query filter parameter that sets a range of days that a `Shift` must start or end in before passing the filter condition.
 * @export
 * @class ShiftWorkday
 */
export declare class ShiftWorkday {
    /**
     *
     * @type {DateRange}
     * @memberof ShiftWorkday
     */
    date_range?: DateRange;
    /**
     * The strategy on which the dates are applied. See [ShiftWorkdayMatcher](#type-shiftworkdaymatcher) for possible values
     * @type {string}
     * @memberof ShiftWorkday
     */
    match_shifts_by?: string;
    /**
     * Location-specific timezones convert workdays to datetime filters. Every location included in the query must have a timezone, or this field must be provided as a fallback. Format: the IANA timezone database identifier for the relevant timezone.
     * @type {string}
     * @memberof ShiftWorkday
     */
    default_timezone?: string;
}
