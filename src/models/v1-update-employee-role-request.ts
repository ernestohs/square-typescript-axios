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


import { V1EmployeeRole } from './v1-employee-role';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1UpdateEmployeeRoleRequest
 */
@ObjectType()
export class V1UpdateEmployeeRoleRequest {
    /**
     * 
     * @type {V1EmployeeRole}
     * @memberof V1UpdateEmployeeRoleRequest
     */
    
    @Field(() => V1EmployeeRole, { nullable: false })
    body: V1EmployeeRole;
}


