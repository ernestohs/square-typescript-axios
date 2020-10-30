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
 * Describes changes to subscription and billing states.
 * @export
 * @class SubscriptionEvent
 */
@ObjectType()
export class SubscriptionEvent {
    /**
     * The ID of the subscription event.
     * @type {string}
     * @memberof SubscriptionEvent
     */
    @Field() 
    id: string;
    /**
     * Type of the subscription event. See [SubscriptionEventSubscriptionEventType](#type-subscriptioneventsubscriptioneventtype) for possible values
     * @type {string}
     * @memberof SubscriptionEvent
     */
    @Field() 
    subscription_event_type: string;
    /**
     * The date, in YYYY-MM-DD format (for example, 2013-01-15), when the subscription event went into effect.
     * @type {string}
     * @memberof SubscriptionEvent
     */
    @Field() 
    effective_date: string;
    /**
     * The ID of the subscription plan associated with the subscription.
     * @type {string}
     * @memberof SubscriptionEvent
     */
    @Field() 
    plan_id: string;
}


