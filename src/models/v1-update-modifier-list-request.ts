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
 * V1UpdateModifierListRequest
 * @export
 * @class V1UpdateModifierListRequest
 */
@ObjectType()
export class V1UpdateModifierListRequest {
    /**
     * The modifier list\'s name.
     * @type {string}
     * @memberof V1UpdateModifierListRequest
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * Indicates whether multiple options from the modifier list can be applied to a single item. See [V1UpdateModifierListRequestSelectionType](#type-v1updatemodifierlistrequestselectiontype) for possible values
     * @type {string}
     * @memberof V1UpdateModifierListRequest
     */
    
    @Field({ nullable: true })
    selection_type?: string;
}


