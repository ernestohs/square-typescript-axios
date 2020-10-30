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
 * A request for a set of `TeamMemberWage` objects
 * @export
 * @class ListTeamMemberWagesRequest
 */
@ObjectType()
export class ListTeamMemberWagesRequest {
    /**
     * Filter wages returned to only those that are associated with the specified team member.
     * @type {string}
     * @memberof ListTeamMemberWagesRequest
     */
    
    @Field({ nullable: true })
    team_member_id?: string;
    /**
     * Maximum number of Team Member Wages to return per page. Can range between 1 and 200. The default is the maximum at 200.
     * @type {number}
     * @memberof ListTeamMemberWagesRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * Pointer to the next page of Employee Wage results to fetch.
     * @type {string}
     * @memberof ListTeamMemberWagesRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
}


