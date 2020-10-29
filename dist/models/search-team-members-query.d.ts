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
import { SearchTeamMembersFilter } from './search-team-members-filter';
/**
 * Represents the parameters in a search for `TeamMember` objects.
 * @export
 * @interface SearchTeamMembersQuery
 */
export interface SearchTeamMembersQuery {
    /**
     *
     * @type {SearchTeamMembersFilter}
     * @memberof SearchTeamMembersQuery
     */
    filter?: SearchTeamMembersFilter;
}
