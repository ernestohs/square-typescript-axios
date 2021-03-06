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
import { CreateTeamMemberRequest } from './create-team-member-request';
/**
 * Represents a bulk create request for `TeamMember` objects.
 * @export
 * @class BulkCreateTeamMembersRequest
 */
export declare class BulkCreateTeamMembersRequest {
    /**
     * The data which will be used to create the `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`.
     * @type {{ [key: string]: CreateTeamMemberRequest; }}
     * @memberof BulkCreateTeamMembersRequest
     */
    team_members: {
        [key: string]: CreateTeamMemberRequest;
    };
}
