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
 * A record of an employee\'s break during a shift.
 * @export
 * @class Break
 */
@ObjectType()
export class Break {
    /**
     * UUID for this object
     * @type {string}
     * @memberof Break
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
     * @type {string}
     * @memberof Break
     */
    
    @Field({ nullable: false })
    start_at: string;
    /**
     * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
     * @type {string}
     * @memberof Break
     */
    
    @Field({ nullable: true })
    end_at?: string;
    /**
     * The `BreakType` this `Break` was templated on.
     * @type {string}
     * @memberof Break
     */
    
    @Field({ nullable: false })
    break_type_id: string;
    /**
     * A human-readable name.
     * @type {string}
     * @memberof Break
     */
    
    @Field({ nullable: false })
    name: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
     * @type {string}
     * @memberof Break
     */
    
    @Field({ nullable: false })
    expected_duration: string;
    /**
     * Whether this break counts towards time worked for compensation purposes.
     * @type {boolean}
     * @memberof Break
     */
    
    @Field({ nullable: false })
    is_paid: boolean;
}


