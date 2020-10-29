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
 * The information needed to define a custom unit, provided by the seller.
 * @export
 * @interface MeasurementUnitCustom
 */
export interface MeasurementUnitCustom {
    /**
     * The name of the custom unit, for example \"bushel\".
     * @type {string}
     * @memberof MeasurementUnitCustom
     */
    name: string;
    /**
     * The abbreviation of the custom unit, such as \"bsh\" (bushel). This appears in the cart for the Point of Sale app, and in reports.
     * @type {string}
     * @memberof MeasurementUnitCustom
     */
    abbreviation: string;
}
