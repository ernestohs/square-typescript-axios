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


import { Address } from './address';
import { ChargeRequestAdditionalRecipient } from './charge-request-additional-recipient';
import { CreateOrderRequest } from './create-order-request';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the parameters that can be included in the body of a request to the __CreateCheckout__ endpoint.
 * @export
 * @class CreateCheckoutRequest
 */
@ObjectType()
export class CreateCheckoutRequest {
    /**
     * A unique string that identifies this checkout among others you\'ve created. It can be any valid string but must be unique for every order sent to Square Checkout for a given location ID.  The idempotency key is used to avoid processing the same order more than once. If you\'re unsure whether a particular checkout was created successfully, you can reattempt it with the same idempotency key and all the same other parameters without worrying about creating duplicates.  We recommend using a random number/string generator native to the language you are working in to generate strings for your idempotency keys.  See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information.
     * @type {string}
     * @memberof CreateCheckoutRequest
     */
    @Field() 
    idempotency_key: string;
    /**
     * 
     * @type {CreateOrderRequest}
     * @memberof CreateCheckoutRequest
     */
    @Field(() => CreateOrderRequest) 
    order: CreateOrderRequest;
    /**
     * If `true`, Square Checkout will collect shipping information on your behalf and store that information with the transaction information in your Square Dashboard.  Default: `false`.
     * @type {boolean}
     * @memberof CreateCheckoutRequest
     */
    @Field() 
    ask_for_shipping_address?: boolean;
    /**
     * The email address to display on the Square Checkout confirmation page and confirmation email that the buyer can use to contact the merchant.  If this value is not set, the confirmation page and email will display the primary email address associated with the merchant\'s Square account.  Default: none; only exists if explicitly set.
     * @type {string}
     * @memberof CreateCheckoutRequest
     */
    @Field() 
    merchant_support_email?: string;
    /**
     * If provided, the buyer\'s email is pre-populated on the checkout page as an editable text field.  Default: none; only exists if explicitly set.
     * @type {string}
     * @memberof CreateCheckoutRequest
     */
    @Field() 
    pre_populate_buyer_email?: string;
    /**
     * 
     * @type {Address}
     * @memberof CreateCheckoutRequest
     */
    @Field(() => Address) 
    pre_populate_shipping_address?: Address;
    /**
     * The URL to redirect to after checkout is completed with `checkoutId`, Square\'s `orderId`, `transactionId`, and `referenceId` appended as URL parameters. For example, if the provided redirect_url is `http://www.example.com/order-complete`, a successful transaction redirects the customer to:  `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`  If you do not provide a redirect URL, Square Checkout will display an order confirmation page on your behalf; however Square strongly recommends that you provide a redirect URL so you can verify the transaction results and finalize the order through your existing/normal confirmation workflow.  Default: none; only exists if explicitly set.
     * @type {string}
     * @memberof CreateCheckoutRequest
     */
    @Field() 
    redirect_url?: string;
    /**
     * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be split from here.  If you provide this value, the `amount_money` value in your additional_recipients must not be more than 90% of the `total_money` calculated by Square for your order. The `location_id` must be the valid location of the app owner merchant.  This field requires `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.  This field is currently not supported in sandbox.
     * @type {Array<ChargeRequestAdditionalRecipient>}
     * @memberof CreateCheckoutRequest
     */
    @Field(() => [ChargeRequestAdditionalRecipient]) 
    additional_recipients?: Array<ChargeRequestAdditionalRecipient>;
    /**
     * An optional note to associate with the checkout object.  This value cannot exceed 60 characters.
     * @type {string}
     * @memberof CreateCheckoutRequest
     */
    @Field() 
    note?: string;
}


