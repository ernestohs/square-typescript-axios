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


import { MeasurementUnitCustom } from './measurement-unit-custom';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a unit of measurement to use with a quantity, such as ounces or inches. Exactly one of the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
 * @export
 * @class MeasurementUnit
 */
@ObjectType()
export class MeasurementUnit {
    /**
     * 
     * @type {MeasurementUnitCustom}
     * @memberof MeasurementUnit
     */
    
    @Field(() => MeasurementUnitCustom, { nullable: true })
    custom_unit?: MeasurementUnitCustom;
    /**
     * Represents a standard area unit. See [MeasurementUnitArea](#type-measurementunitarea) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    area_unit?: string;
    /**
     * Represents a standard length unit. See [MeasurementUnitLength](#type-measurementunitlength) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    length_unit?: string;
    /**
     * Represents a standard volume unit. See [MeasurementUnitVolume](#type-measurementunitvolume) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    volume_unit?: string;
    /**
     * Represents a standard unit of weight or mass. See [MeasurementUnitWeight](#type-measurementunitweight) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    weight_unit?: string;
    /**
     * Reserved for API integrations that lack the ability to specify a real measurement unit See [MeasurementUnitGeneric](#type-measurementunitgeneric) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    generic_unit?: string;
    /**
     * Represents a standard unit of time. See [MeasurementUnitTime](#type-measurementunittime) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    time_unit?: string;
    /**
     * Represents the type of the measurement unit. See [MeasurementUnitUnitType](#type-measurementunitunittype) for possible values
     * @type {string}
     * @memberof MeasurementUnit
     */
    
    @Field({ nullable: true })
    type?: string;
}


