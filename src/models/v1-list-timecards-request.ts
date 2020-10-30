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
 * 
 * @export
 * @class V1ListTimecardsRequest
 */
@ObjectType()
export class V1ListTimecardsRequest {
    /**
     * The order in which timecards are listed in the response, based on their created_at field. See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    order?: string;
    /**
     * If provided, the endpoint returns only timecards for the employee with the specified ID.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    employee_id?: string;
    /**
     * If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    begin_clockin_time?: string;
    /**
     * If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    end_clockin_time?: string;
    /**
     * If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    begin_clockout_time?: string;
    /**
     * If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    end_clockout_time?: string;
    /**
     * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    begin_updated_at?: string;
    /**
     * If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    end_updated_at?: string;
    /**
     * If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don\'t provide this parameter, both valid and deleted timecards are returned.
     * @type {boolean}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    deleted?: boolean;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     * @type {number}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     * @type {string}
     * @memberof V1ListTimecardsRequest
     */
    
    @Field({ nullable: true })
    batch_token?: string;
}


