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


import { MeasurementUnit } from './measurement-unit';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Contains the measurement unit for a quantity and a precision which specifies the number of digits after the decimal point for decimal quantities.
 * @export
 * @class OrderQuantityUnit
 */
@ObjectType()
export class OrderQuantityUnit {
    /**
     * 
     * @type {MeasurementUnit}
     * @memberof OrderQuantityUnit
     */
    
    @Field(() => MeasurementUnit, { nullable: true })
    measurement_unit?: MeasurementUnit;
    /**
     * For non-integer quantities, represents the number of digits after the decimal point that are recorded for this quantity.  For example, a precision of 1 allows quantities like `\"1.0\"` and `\"1.1\"`, but not `\"1.01\"`.  Min: 0. Max: 5.
     * @type {number}
     * @memberof OrderQuantityUnit
     */
    
    @Field({ nullable: true })
    precision?: number;
}


