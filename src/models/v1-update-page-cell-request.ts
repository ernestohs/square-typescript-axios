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


import { V1PageCell } from './v1-page-cell';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1UpdatePageCellRequest
 */
@ObjectType()
export class V1UpdatePageCellRequest {
    /**
     * 
     * @type {V1PageCell}
     * @memberof V1UpdatePageCellRequest
     */
    @Field(() => V1PageCell) 
    body: V1PageCell;
}

