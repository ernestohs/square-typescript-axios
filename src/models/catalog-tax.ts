/* tslint:disable */
/* eslint-disable */
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



import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A tax applicable to an item.
 * @export
 * @class CatalogTax
 */
@ObjectType()
export class CatalogTax {
    /**
     * The tax\'s name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogTax
     */
    @Field() 
    name?: string;
    /**
     * Whether the tax is calculated based on a payment\'s subtotal or total. See [TaxCalculationPhase](#type-taxcalculationphase) for possible values
     * @type {string}
     * @memberof CatalogTax
     */
    @Field() 
    calculation_phase?: string;
    /**
     * Whether the tax is `ADDITIVE` or `INCLUSIVE`. See [TaxInclusionType](#type-taxinclusiontype) for possible values
     * @type {string}
     * @memberof CatalogTax
     */
    @Field() 
    inclusion_type?: string;
    /**
     * The percentage of the tax in decimal form, using a `\'.\'` as the decimal separator and without a `\'%\'` sign. A value of `7.5` corresponds to 7.5%.
     * @type {string}
     * @memberof CatalogTax
     */
    @Field() 
    percentage?: string;
    /**
     * If `true`, the fee applies to custom amounts entered into the Square Point of Sale app that are not associated with a particular `CatalogItem`.
     * @type {boolean}
     * @memberof CatalogTax
     */
    @Field() 
    applies_to_custom_amounts?: boolean;
    /**
     * A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`).
     * @type {boolean}
     * @memberof CatalogTax
     */
    @Field() 
    enabled?: boolean;
}


