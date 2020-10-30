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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A discount applicable to items.
 * @export
 * @class CatalogDiscount
 */
@ObjectType()
export class CatalogDiscount {
    /**
     * The discount name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogDiscount
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale. See [CatalogDiscountType](#type-catalogdiscounttype) for possible values
     * @type {string}
     * @memberof CatalogDiscount
     */
    
    @Field({ nullable: true })
    discount_type?: string;
    /**
     * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type` is `VARIABLE_PERCENTAGE`.  Do not use this field for amount-based or variable discounts.
     * @type {string}
     * @memberof CatalogDiscount
     */
    
    @Field({ nullable: true })
    percentage?: string;
    /**
     * 
     * @type {Money}
     * @memberof CatalogDiscount
     */
    
    @Field(() => Money, { nullable: true })
    amount_money?: Money;
    /**
     * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment in the Square Point of Sale app.
     * @type {boolean}
     * @memberof CatalogDiscount
     */
    
    @Field({ nullable: true })
    pin_required?: boolean;
    /**
     * The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code.
     * @type {string}
     * @memberof CatalogDiscount
     */
    
    @Field({ nullable: true })
    label_color?: string;
    /**
     * Indicates whether this discount should reduce the price used to calculate tax.  Most discounts should use `MODIFY_TAX_BASIS`. However, in some circumstances taxes must be calculated based on an item\'s price, ignoring a particular discount. For example, in many US jurisdictions, a manufacturer coupon or instant rebate reduces the price a customer pays but does not reduce the sale price used to calculate how much sales tax is due. In this case, the discount representing that manufacturer coupon should have `DO_NOT_MODIFY_TAX_BASIS` for this field.  If you are unsure whether you need to use this field, consult your tax professional. See [CatalogDiscountModifyTaxBasis](#type-catalogdiscountmodifytaxbasis) for possible values
     * @type {string}
     * @memberof CatalogDiscount
     */
    
    @Field({ nullable: true })
    modify_tax_basis?: string;
}


