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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { BulkCreateTeamMembersRequest } from '../models';
import { BulkCreateTeamMembersResponse } from '../models';
import { BulkUpdateTeamMembersRequest } from '../models';
import { BulkUpdateTeamMembersResponse } from '../models';
import { CreateTeamMemberRequest } from '../models';
import { CreateTeamMemberResponse } from '../models';
import { RetrieveTeamMemberResponse } from '../models';
import { RetrieveWageSettingResponse } from '../models';
import { SearchTeamMembersRequest } from '../models';
import { SearchTeamMembersResponse } from '../models';
import { UpdateTeamMemberRequest } from '../models';
import { UpdateTeamMemberResponse } from '../models';
import { UpdateWageSettingRequest } from '../models';
import { UpdateWageSettingResponse } from '../models';
/**
 * TeamApi - axios parameter creator
 * @export
 */
export declare const TeamApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).
     * @summary BulkCreateTeamMembers
     * @param {BulkCreateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkCreateTeamMembers: (body: BulkCreateTeamMembersRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).
     * @summary BulkUpdateTeamMembers
     * @param {BulkUpdateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkUpdateTeamMembers: (body: BulkUpdateTeamMembersRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Creates a single `TeamMember` object. The `TeamMember` will be returned on successful creates. You must provide the following values in your request to this endpoint: - `given_name` - `family_name`  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).
     * @summary CreateTeamMember
     * @param {CreateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMember: (body: CreateTeamMemberRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Retrieve a `TeamMember` object for the given `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).
     * @summary RetrieveTeamMember
     * @param {string} teamMemberId The ID of the team member to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveTeamMember: (teamMemberId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Retrieve a `WageSetting` object for a team member specified by `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).
     * @summary RetrieveWageSetting
     * @param {string} teamMemberId The ID of the team member to retrieve wage setting for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveWageSetting: (teamMemberId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a paginated list of `TeamMember` objects for a business. The list to be returned can be filtered by: - location IDs **and** - `status`
     * @summary SearchTeamMembers
     * @param {SearchTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamMembers: (body: SearchTeamMembersRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Updates a single `TeamMember` object. The `TeamMember` will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).
     * @summary UpdateTeamMember
     * @param {string} teamMemberId The ID of the team member to update.
     * @param {UpdateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamMember: (teamMemberId: string, body: UpdateTeamMemberRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Creates or updates a `WageSetting` object. The object is created if a `WageSetting` with the specified `team_member_id` does not exist. Otherwise, it fully replaces the `WageSetting` object for the team member. The `WageSetting` will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).
     * @summary UpdateWageSetting
     * @param {string} teamMemberId The ID of the team member to update the &#x60;WageSetting&#x60; object for.
     * @param {UpdateWageSettingRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWageSetting: (teamMemberId: string, body: UpdateWageSettingRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * TeamApi - functional programming interface
 * @export
 */
export declare const TeamApiFp: (configuration?: Configuration) => {
    /**
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).
     * @summary BulkCreateTeamMembers
     * @param {BulkCreateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkCreateTeamMembers(body: BulkCreateTeamMembersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BulkCreateTeamMembersResponse>>;
    /**
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).
     * @summary BulkUpdateTeamMembers
     * @param {BulkUpdateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkUpdateTeamMembers(body: BulkUpdateTeamMembersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BulkUpdateTeamMembersResponse>>;
    /**
     * Creates a single `TeamMember` object. The `TeamMember` will be returned on successful creates. You must provide the following values in your request to this endpoint: - `given_name` - `family_name`  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).
     * @summary CreateTeamMember
     * @param {CreateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMember(body: CreateTeamMemberRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTeamMemberResponse>>;
    /**
     * Retrieve a `TeamMember` object for the given `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).
     * @summary RetrieveTeamMember
     * @param {string} teamMemberId The ID of the team member to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveTeamMember(teamMemberId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveTeamMemberResponse>>;
    /**
     * Retrieve a `WageSetting` object for a team member specified by `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).
     * @summary RetrieveWageSetting
     * @param {string} teamMemberId The ID of the team member to retrieve wage setting for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveWageSetting(teamMemberId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveWageSettingResponse>>;
    /**
     * Returns a paginated list of `TeamMember` objects for a business. The list to be returned can be filtered by: - location IDs **and** - `status`
     * @summary SearchTeamMembers
     * @param {SearchTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamMembers(body: SearchTeamMembersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchTeamMembersResponse>>;
    /**
     * Updates a single `TeamMember` object. The `TeamMember` will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).
     * @summary UpdateTeamMember
     * @param {string} teamMemberId The ID of the team member to update.
     * @param {UpdateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamMember(teamMemberId: string, body: UpdateTeamMemberRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateTeamMemberResponse>>;
    /**
     * Creates or updates a `WageSetting` object. The object is created if a `WageSetting` with the specified `team_member_id` does not exist. Otherwise, it fully replaces the `WageSetting` object for the team member. The `WageSetting` will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).
     * @summary UpdateWageSetting
     * @param {string} teamMemberId The ID of the team member to update the &#x60;WageSetting&#x60; object for.
     * @param {UpdateWageSettingRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWageSetting(teamMemberId: string, body: UpdateWageSettingRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateWageSettingResponse>>;
};
/**
 * TeamApi - factory interface
 * @export
 */
export declare const TeamApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).
     * @summary BulkCreateTeamMembers
     * @param {BulkCreateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkCreateTeamMembers(body: BulkCreateTeamMembersRequest, options?: any): AxiosPromise<BulkCreateTeamMembersResponse>;
    /**
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).
     * @summary BulkUpdateTeamMembers
     * @param {BulkUpdateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkUpdateTeamMembers(body: BulkUpdateTeamMembersRequest, options?: any): AxiosPromise<BulkUpdateTeamMembersResponse>;
    /**
     * Creates a single `TeamMember` object. The `TeamMember` will be returned on successful creates. You must provide the following values in your request to this endpoint: - `given_name` - `family_name`  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).
     * @summary CreateTeamMember
     * @param {CreateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTeamMember(body: CreateTeamMemberRequest, options?: any): AxiosPromise<CreateTeamMemberResponse>;
    /**
     * Retrieve a `TeamMember` object for the given `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).
     * @summary RetrieveTeamMember
     * @param {string} teamMemberId The ID of the team member to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveTeamMember(teamMemberId: string, options?: any): AxiosPromise<RetrieveTeamMemberResponse>;
    /**
     * Retrieve a `WageSetting` object for a team member specified by `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).
     * @summary RetrieveWageSetting
     * @param {string} teamMemberId The ID of the team member to retrieve wage setting for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveWageSetting(teamMemberId: string, options?: any): AxiosPromise<RetrieveWageSettingResponse>;
    /**
     * Returns a paginated list of `TeamMember` objects for a business. The list to be returned can be filtered by: - location IDs **and** - `status`
     * @summary SearchTeamMembers
     * @param {SearchTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchTeamMembers(body: SearchTeamMembersRequest, options?: any): AxiosPromise<SearchTeamMembersResponse>;
    /**
     * Updates a single `TeamMember` object. The `TeamMember` will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).
     * @summary UpdateTeamMember
     * @param {string} teamMemberId The ID of the team member to update.
     * @param {UpdateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateTeamMember(teamMemberId: string, body: UpdateTeamMemberRequest, options?: any): AxiosPromise<UpdateTeamMemberResponse>;
    /**
     * Creates or updates a `WageSetting` object. The object is created if a `WageSetting` with the specified `team_member_id` does not exist. Otherwise, it fully replaces the `WageSetting` object for the team member. The `WageSetting` will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).
     * @summary UpdateWageSetting
     * @param {string} teamMemberId The ID of the team member to update the &#x60;WageSetting&#x60; object for.
     * @param {UpdateWageSettingRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWageSetting(teamMemberId: string, body: UpdateWageSettingRequest, options?: any): AxiosPromise<UpdateWageSettingResponse>;
};
/**
 * TeamApi - object-oriented interface
 * @export
 * @class TeamApi
 * @extends {BaseAPI}
 */
export declare class TeamApi extends BaseAPI {
    /**
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).
     * @summary BulkCreateTeamMembers
     * @param {BulkCreateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    bulkCreateTeamMembers(body: BulkCreateTeamMembersRequest, options?: any): Promise<import("axios").AxiosResponse<BulkCreateTeamMembersResponse>>;
    /**
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).
     * @summary BulkUpdateTeamMembers
     * @param {BulkUpdateTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    bulkUpdateTeamMembers(body: BulkUpdateTeamMembersRequest, options?: any): Promise<import("axios").AxiosResponse<BulkUpdateTeamMembersResponse>>;
    /**
     * Creates a single `TeamMember` object. The `TeamMember` will be returned on successful creates. You must provide the following values in your request to this endpoint: - `given_name` - `family_name`  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).
     * @summary CreateTeamMember
     * @param {CreateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    createTeamMember(body: CreateTeamMemberRequest, options?: any): Promise<import("axios").AxiosResponse<CreateTeamMemberResponse>>;
    /**
     * Retrieve a `TeamMember` object for the given `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).
     * @summary RetrieveTeamMember
     * @param {string} teamMemberId The ID of the team member to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    retrieveTeamMember(teamMemberId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveTeamMemberResponse>>;
    /**
     * Retrieve a `WageSetting` object for a team member specified by `TeamMember.id`. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).
     * @summary RetrieveWageSetting
     * @param {string} teamMemberId The ID of the team member to retrieve wage setting for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    retrieveWageSetting(teamMemberId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveWageSettingResponse>>;
    /**
     * Returns a paginated list of `TeamMember` objects for a business. The list to be returned can be filtered by: - location IDs **and** - `status`
     * @summary SearchTeamMembers
     * @param {SearchTeamMembersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    searchTeamMembers(body: SearchTeamMembersRequest, options?: any): Promise<import("axios").AxiosResponse<SearchTeamMembersResponse>>;
    /**
     * Updates a single `TeamMember` object. The `TeamMember` will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).
     * @summary UpdateTeamMember
     * @param {string} teamMemberId The ID of the team member to update.
     * @param {UpdateTeamMemberRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    updateTeamMember(teamMemberId: string, body: UpdateTeamMemberRequest, options?: any): Promise<import("axios").AxiosResponse<UpdateTeamMemberResponse>>;
    /**
     * Creates or updates a `WageSetting` object. The object is created if a `WageSetting` with the specified `team_member_id` does not exist. Otherwise, it fully replaces the `WageSetting` object for the team member. The `WageSetting` will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).
     * @summary UpdateWageSetting
     * @param {string} teamMemberId The ID of the team member to update the &#x60;WageSetting&#x60; object for.
     * @param {UpdateWageSettingRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    updateWageSetting(teamMemberId: string, body: UpdateWageSettingRequest, options?: any): Promise<import("axios").AxiosResponse<UpdateWageSettingResponse>>;
}
