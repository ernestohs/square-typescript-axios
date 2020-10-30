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
 * Defines the fields that are included in requests to the [PayOrder](#endpoint-payorder) endpoint.
 * @export
 * @class PayOrderRequest
 */
@ObjectType()
export class PayOrderRequest {
    /**
     * A value you specify that uniquely identifies this request among requests you\'ve sent. If you\'re unsure whether a particular payment request was completed successfully, you can reattempt it with the same idempotency key without worrying about duplicate payments.  See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
     * @type {string}
     * @memberof PayOrderRequest
     */
    
    @Field({ nullable: false })
    idempotency_key: string;
    /**
     * The version of the order being paid. If not supplied, the latest version will be paid.
     * @type {number}
     * @memberof PayOrderRequest
     */
    
    @Field({ nullable: true })
    order_version?: number;
    /**
     * The IDs of the `payments` to collect. The payment total must match the order total.
     * @type {Array<string>}
     * @memberof PayOrderRequest
     */
    
    payment_ids?: Array<string>;
}


