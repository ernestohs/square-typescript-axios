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
import { Money } from './money';
/**
 * Defines parameters in a  [CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint request.
 * @export
 * @class CreateSubscriptionRequest
 */
export declare class CreateSubscriptionRequest {
    /**
     * A unique string that identifies this `CreateSubscription` request. If you do not provide a unique string (or provide an empty string as the value), the endpoint treats each request as independent.  For more information, see [Idempotency keys](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    idempotency_key: string;
    /**
     * The ID of the location the subscription is associated with.
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    location_id: string;
    /**
     * The ID of the subscription plan. For more information, see  [Subscription Plan Overview](https://developer.squareup.com/docs/docs/subscriptions/overview).
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    plan_id: string;
    /**
     * The ID of the `customer` profile.
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    customer_id: string;
    /**
     * The start date of the subscription, in YYYY-MM-DD format. For example, 2013-01-15. If the start date is left empty, the subscription begins  immediately.
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    start_date?: string;
    /**
     * The date when the subscription should be canceled, in  YYYY-MM-DD format (for example, 2025-02-29). This overrides the plan configuration  if it comes before the date the subscription would otherwise end.
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    canceled_date?: string;
    /**
     * The tax to add when billing the subscription. The percentage is expressed in decimal form, using a `\'.\'` as the decimal separator and without a `\'%\'` sign. For example, a value of 7.5 corresponds to 7.5%.
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    tax_percentage?: string;
    /**
     *
     * @type {Money}
     * @memberof CreateSubscriptionRequest
     */
    price_override_money?: Money;
    /**
     * The ID of the `customer](#type-customer) [card` to charge. If not specified, Square sends an invoice via email. For an example to create a customer and add a card on file, see [Subscriptions Walkthrough](https://developer.squareup.com/docs/docs/subscriptions-api/walkthrough).
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    card_id?: string;
    /**
     * The timezone that is used in date calculations for the subscription. If unset, defaults to the location timezone. If a timezone is not configured for the location, defaults to \"America/New_York\". Format: the IANA Timezone Database identifier for the location timezone. For a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
     * @type {string}
     * @memberof CreateSubscriptionRequest
     */
    timezone?: string;
}