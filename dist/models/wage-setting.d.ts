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
/**
 * An object representing a team member\'s wage information.
 * @export
 * @interface WageSetting
 */
export interface WageSetting {
    /**
     * The unique ID of the `TeamMember` whom this wage setting describes.
     * @type {string}
     * @memberof WageSetting
     */
    team_member_id?: string;
    /**
     * <b>Required</b> The ordered list of jobs that the team member is assigned to. The first job assignment is considered the team member\'s \"Primary Job\". <br> <b>Min Length 1    Max Length 12</b>
     * @type {Array<JobAssignment>}
     * @memberof WageSetting
     */
    job_assignments?: Array<JobAssignment>;
    /**
     * Whether the team member is exempt from the overtime rules of the seller country.
     * @type {boolean}
     * @memberof WageSetting
     */
    is_overtime_exempt?: boolean;
    /**
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write, potentially overwriting data from another write. Read about [optimistic concurrency](https://developer.squareup.com/docs/docs/working-with-apis/optimistic-concurrency) in Square APIs for more information.
     * @type {number}
     * @memberof WageSetting
     */
    version?: number;
    /**
     * The timestamp in RFC 3339 format describing when the wage setting object was created. Ex: \"2018-10-04T04:00:00-07:00\" or \"2019-02-05T12:00:00Z\"
     * @type {string}
     * @memberof WageSetting
     */
    created_at?: string;
    /**
     * The timestamp in RFC 3339 format describing when the wage setting object was last updated. Ex: \"2018-10-04T04:00:00-07:00\" or \"2019-02-05T12:00:00Z\"
     * @type {string}
     * @memberof WageSetting
     */
    updated_at?: string;
}
