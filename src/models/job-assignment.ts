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
 * An object describing a job that a team member is assigned to.
 * @export
 * @class JobAssignment
 */
@ObjectType()
export class JobAssignment {
    /**
     * The title of the job.
     * @type {string}
     * @memberof JobAssignment
     */
    @Field() 
    job_title: string;
    /**
     * The current pay type for the job assignment used to calculate the pay amount in a pay period. See [JobAssignmentPayType](#type-jobassignmentpaytype) for possible values
     * @type {string}
     * @memberof JobAssignment
     */
    @Field() 
    pay_type: string;
    /**
     * 
     * @type {Money}
     * @memberof JobAssignment
     */
    @Field(() => Money) 
    hourly_rate?: Money;
    /**
     * 
     * @type {Money}
     * @memberof JobAssignment
     */
    @Field(() => Money) 
    annual_rate?: Money;
    /**
     * The planned hours per week for the job. Set if the job `PayType` is `SALARY`.
     * @type {number}
     * @memberof JobAssignment
     */
    @Field() 
    weekly_hours?: number;
}


