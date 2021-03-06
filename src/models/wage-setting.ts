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


import { JobAssignment } from './job-assignment';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * An object representing a team member\'s wage information.
 * @export
 * @class WageSetting
 */
@ObjectType()
export class WageSetting {
    /**
     * The unique ID of the `TeamMember` whom this wage setting describes.
     * @type {string}
     * @memberof WageSetting
     */
    
    @Field({ nullable: true })
    team_member_id?: string;
    /**
     * <b>Required</b> The ordered list of jobs that the team member is assigned to. The first job assignment is considered the team member\'s \"Primary Job\". <br> <b>Min Length 1    Max Length 12</b>
     * @type {Array<JobAssignment>}
     * @memberof WageSetting
     */
    
    @Field(() => [JobAssignment], { nullable: true })
    job_assignments?: Array<JobAssignment>;
    /**
     * Whether the team member is exempt from the overtime rules of the seller country.
     * @type {boolean}
     * @memberof WageSetting
     */
    
    @Field({ nullable: true })
    is_overtime_exempt?: boolean;
    /**
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write, potentially overwriting data from another write. Read about [optimistic concurrency](https://developer.squareup.com/docs/docs/working-with-apis/optimistic-concurrency) in Square APIs for more information.
     * @type {number}
     * @memberof WageSetting
     */
    
    @Field({ nullable: true })
    version?: number;
    /**
     * The timestamp in RFC 3339 format describing when the wage setting object was created. Ex: \"2018-10-04T04:00:00-07:00\" or \"2019-02-05T12:00:00Z\"
     * @type {string}
     * @memberof WageSetting
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The timestamp in RFC 3339 format describing when the wage setting object was last updated. Ex: \"2018-10-04T04:00:00-07:00\" or \"2019-02-05T12:00:00Z\"
     * @type {string}
     * @memberof WageSetting
     */
    
    @Field({ nullable: true })
    updated_at?: string;
}


