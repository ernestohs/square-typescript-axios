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


import { CashDrawerShiftEvent } from './cash-drawer-shift-event';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class ListCashDrawerShiftEventsResponse
 */
@ObjectType()
export class ListCashDrawerShiftEventsResponse {
    /**
     * All of the events (payments, refunds, etc.) for a cash drawer during the shift.
     * @type {Array<CashDrawerShiftEvent>}
     * @memberof ListCashDrawerShiftEventsResponse
     */
    @Field(() => [CashDrawerShiftEvent]) 
    events?: Array<CashDrawerShiftEvent>;
    /**
     * Opaque cursor for fetching the next page. Cursor is not present in the last page of results.
     * @type {string}
     * @memberof ListCashDrawerShiftEventsResponse
     */
    @Field() 
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListCashDrawerShiftEventsResponse
     */
    @Field() 
    errors?: Array<Error>;
}

