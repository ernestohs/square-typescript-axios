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


import { Card } from './card';
import { DeviceDetails } from './device-details';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Reflects the current status of a card payment.
 * @export
 * @class CardPaymentDetails
 */
@ObjectType()
export class CardPaymentDetails {
    /**
     * The card payment\'s current state. It can be one of: `AUTHORIZED`, `CAPTURED`, `VOIDED`, `FAILED`.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    status?: string;
    /**
     * 
     * @type {Card}
     * @memberof CardPaymentDetails
     */
    @Field(() => Card) 
    card?: Card;
    /**
     * The method used to enter the card\'s details for the payment.  Can be `KEYED`, `SWIPED`, `EMV`, `ON_FILE`, or `CONTACTLESS`.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    entry_method?: string;
    /**
     * Status code returned from the Card Verification Value (CVV) check. Can be `CVV_ACCEPTED`, `CVV_REJECTED`, `CVV_NOT_CHECKED`.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    cvv_status?: string;
    /**
     * Status code returned from the Address Verification System (AVS) check. Can be `AVS_ACCEPTED`, `AVS_REJECTED`, `AVS_NOT_CHECKED`.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    avs_status?: string;
    /**
     * Status code returned by the card issuer that describes the payment\'s authorization status.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    auth_result_code?: string;
    /**
     * For EMV payments, identifies the EMV application used for the payment.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    application_identifier?: string;
    /**
     * For EMV payments, the human-readable name of the EMV application used for the payment.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    application_name?: string;
    /**
     * For EMV payments, the cryptogram generated for the payment.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    application_cryptogram?: string;
    /**
     * For EMV payments, method used to verify the cardholder\'s identity.  Can be one of `PIN`, `SIGNATURE`, `PIN_AND_SIGNATURE`, `ON_DEVICE`, or `NONE`.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    verification_method?: string;
    /**
     * For EMV payments, the results of the cardholder verification.  Can be one of `SUCCESS`, `FAILURE`, or `UNKNOWN`.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    verification_results?: string;
    /**
     * The statement description sent to the card networks.  Note: The actual statement description will vary and is likely to be truncated and appended with additional information on a per issuer basis.
     * @type {string}
     * @memberof CardPaymentDetails
     */
    @Field() 
    statement_description?: string;
    /**
     * 
     * @type {DeviceDetails}
     * @memberof CardPaymentDetails
     */
    @Field(() => DeviceDetails) 
    device_details?: DeviceDetails;
    /**
     * Whether or not the card is required to be physically present in order for the payment to be refunded.  If true, the card is required to be present.
     * @type {boolean}
     * @memberof CardPaymentDetails
     */
    @Field() 
    refund_requires_card_presence?: boolean;
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CardPaymentDetails
     */
    @Field() 
    errors?: Array<Error>;
}


