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


import { EmployeeWage } from './employee-wage';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * The response to a request for a set of `EmployeeWage` objects. Contains  a set of `EmployeeWage`.
 * @export
 * @class ListEmployeeWagesResponse
 */
@ObjectType()
export class ListEmployeeWagesResponse {
    /**
     * A page of Employee Wage results.
     * @type {Array<EmployeeWage>}
     * @memberof ListEmployeeWagesResponse
     */
    
    @Field(() => [EmployeeWage], { nullable: true })
    employee_wages?: Array<EmployeeWage>;
    /**
     * Value supplied in the subsequent request to fetch the next next page of Employee Wage results.
     * @type {string}
     * @memberof ListEmployeeWagesResponse
     */
    
    @Field({ nullable: true })
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListEmployeeWagesResponse
     */
    
    errors?: Array<Error>;
}


