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
import { DeviceCode } from './device-code';
/**
 *
 * @export
 * @class CreateDeviceCodeRequest
 */
export declare class CreateDeviceCodeRequest {
    /**
     * A unique string that identifies this CreateCheckout request. Keys can be any valid string but must be unique for every CreateCheckout request.  See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     * @type {string}
     * @memberof CreateDeviceCodeRequest
     */
    idempotency_key: string;
    /**
     *
     * @type {DeviceCode}
     * @memberof CreateDeviceCodeRequest
     */
    device_code: DeviceCode;
}
