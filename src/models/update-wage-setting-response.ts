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


import { WageSetting } from './wage-setting';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a response from an update request, containing the updated `WageSetting` object or error messages.
 * @export
 * @class UpdateWageSettingResponse
 */
@ObjectType()
export class UpdateWageSettingResponse {
    /**
     * 
     * @type {WageSetting}
     * @memberof UpdateWageSettingResponse
     */
    
    @Field(() => WageSetting, { nullable: true })
    wage_setting?: WageSetting;
    /**
     * The errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof UpdateWageSettingResponse
     */
    
    errors?: Array<Error>;
}


