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
import GraphQLJSON from 'graphql-type-json';

/**
 * Defines parameters for a CreateDisputeEvidenceText request.
 * @export
 * @class CreateDisputeEvidenceTextRequest
 */
@ObjectType()
export class CreateDisputeEvidenceTextRequest {
    /**
     * Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
     * @type {string}
     * @memberof CreateDisputeEvidenceTextRequest
     */
    
    @Field({ nullable: false })
    idempotency_key: string;
    /**
     * The type of evidence you are uploading. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
     * @type {string}
     * @memberof CreateDisputeEvidenceTextRequest
     */
    
    @Field({ nullable: true })
    evidence_type?: string;
    /**
     * The evidence string.
     * @type {string}
     * @memberof CreateDisputeEvidenceTextRequest
     */
    
    @Field({ nullable: false })
    evidence_text: string;
}


