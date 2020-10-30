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


import { DisputeEvidence } from './dispute-evidence';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines fields in a ListDisputeEvidence response.
 * @export
 * @class ListDisputeEvidenceResponse
 */
@ObjectType()
export class ListDisputeEvidenceResponse {
    /**
     * The list of evidence previously uploaded to the specified dispute.
     * @type {Array<DisputeEvidence>}
     * @memberof ListDisputeEvidenceResponse
     */
    
    @Field(() => [DisputeEvidence], { nullable: true })
    evidence?: Array<DisputeEvidence>;
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof ListDisputeEvidenceResponse
     */
    
    errors?: Array<Error>;
}


