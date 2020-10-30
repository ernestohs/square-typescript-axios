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
 * Represents a create request for a `TeamMember` object.
 * @export
 * @class CreateTeamMemberRequest
 */
@ObjectType()
export class CreateTeamMemberRequest {
    /**
     * A unique string that identifies this CreateTeamMember request. Keys can be any valid string but must be unique for every request. See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. <br> <b>Min Length 1    Max Length 45</b>
     * @type {string}
     * @memberof CreateTeamMemberRequest
     */
    
    @Field({ nullable: true })
    idempotency_key?: string;
    /**
     * 
     * @type {TeamMember}
     * @memberof CreateTeamMemberRequest
     */
    
    @Field(() => TeamMember, { nullable: true })
    team_member?: TeamMember;
}


