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


import { TeamMemberWage } from './team-member-wage';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A response to a request to get a `TeamMemberWage`. Contains the requested `TeamMemberWage` objects. May contain a set of `Error` objects if the request resulted in errors.
 * @export
 * @class GetTeamMemberWageResponse
 */
@ObjectType()
export class GetTeamMemberWageResponse {
    /**
     * 
     * @type {TeamMemberWage}
     * @memberof GetTeamMemberWageResponse
     */
    
    @Field(() => TeamMemberWage, { nullable: true })
    team_member_wage?: TeamMemberWage;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof GetTeamMemberWageResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
}


