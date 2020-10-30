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


import { TeamMember } from './team-member';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a response from a retrieve request, containing a `TeamMember` object or error messages.
 * @export
 * @class RetrieveTeamMemberResponse
 */
@ObjectType()
export class RetrieveTeamMemberResponse {
    /**
     * 
     * @type {TeamMember}
     * @memberof RetrieveTeamMemberResponse
     */
    @Field(() => TeamMember) 
    team_member?: TeamMember;
    /**
     * The errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveTeamMemberResponse
     */
    @Field() 
    errors?: Array<Error>;
}


