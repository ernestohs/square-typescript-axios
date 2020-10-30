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
import { MeasurementUnit } from './measurement-unit';
/**
 * Contains the name and abbreviation for standard measurement unit.
 * @export
 * @class StandardUnitDescription
 */
export declare class StandardUnitDescription {
    /**
     *
     * @type {MeasurementUnit}
     * @memberof StandardUnitDescription
     */
    unit?: MeasurementUnit;
    /**
     * UI display name of the measurement unit. For example, \'Pound\'.
     * @type {string}
     * @memberof StandardUnitDescription
     */
    name?: string;
    /**
     * UI display abbreviation for the measurement unit. For example, \'lb\'.
     * @type {string}
     * @memberof StandardUnitDescription
     */
    abbreviation?: string;
}