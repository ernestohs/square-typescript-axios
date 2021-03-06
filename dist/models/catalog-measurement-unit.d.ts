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
 * Represents the unit used to measure a `CatalogItemVariation` and specifies the precision for decimal quantities.
 * @export
 * @class CatalogMeasurementUnit
 */
export declare class CatalogMeasurementUnit {
    /**
     *
     * @type {MeasurementUnit}
     * @memberof CatalogMeasurementUnit
     */
    measurement_unit?: MeasurementUnit;
    /**
     * An integer between 0 and 5 that represents the maximum number of positions allowed after the decimal in quantities measured with this unit. For example:  - if the precision is 0, the quantity can be 1, 2, 3, etc. - if the precision is 1, the quantity can be 0.1, 0.2, etc. - if the precision is 2, the quantity can be 0.01, 0.12, etc.  Default: 3
     * @type {number}
     * @memberof CatalogMeasurementUnit
     */
    precision?: number;
}
