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
 * Represents one of a business\'s employees.
 * @export
 * @class V1Employee
 */
@ObjectType()
export class V1Employee {
    /**
     * The employee\'s unique ID.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    id?: string;
    /**
     * The employee\'s first name.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    first_name: string;
    /**
     * The employee\'s last name.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    last_name: string;
    /**
     * The ids of the employee\'s associated roles. Currently, you can specify only one or zero roles per employee.
     * @type {Array<string>}
     * @memberof V1Employee
     */
    @Field() 
    role_ids?: Array<string>;
    /**
     * The IDs of the locations the employee is allowed to clock in at.
     * @type {Array<string>}
     * @memberof V1Employee
     */
    @Field() 
    authorized_location_ids?: Array<string>;
    /**
     * The employee\'s email address.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    email?: string;
    /**
     * CWhether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants update this field from the Square Dashboard. See [V1EmployeeStatus](#type-v1employeestatus) for possible values
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    status?: string;
    /**
     * An ID the merchant can set to associate the employee with an entity in another system.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    external_id?: string;
    /**
     * The time when the employee entity was created, in ISO 8601 format.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    created_at?: string;
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format.
     * @type {string}
     * @memberof V1Employee
     */
    @Field() 
    updated_at?: string;
}

