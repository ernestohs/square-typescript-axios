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
 * The hourly wage rate that an employee will earn on a `Shift` for doing the job specified by the `title` property of this object. Deprecated at verison 2020-08-26. Use `TeamMemberWage` instead.
 * @export
 * @class EmployeeWage
 */
@ObjectType()
export class EmployeeWage {
    /**
     * UUID for this object.
     * @type {string}
     * @memberof EmployeeWage
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The `Employee` that this wage is assigned to.
     * @type {string}
     * @memberof EmployeeWage
     */
    
    @Field({ nullable: true })
    employee_id?: string;
    /**
     * The job title that this wage relates to.
     * @type {string}
     * @memberof EmployeeWage
     */
    
    @Field({ nullable: true })
    title?: string;
    /**
     * 
     * @type {Money}
     * @memberof EmployeeWage
     */
    
    @Field(() => Money, { nullable: true })
    hourly_rate?: Money;
}


