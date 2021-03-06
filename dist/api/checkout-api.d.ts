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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { CreateCheckoutRequest } from '../models';
import { CreateCheckoutResponse } from '../models';
/**
 * CheckoutApi - axios parameter creator
 * @export
 */
export declare const CheckoutApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
     * @summary CreateCheckout
     * @param {string} locationId The ID of the business location to associate the checkout with.
     * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCheckout: (locationId: string, body: CreateCheckoutRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * CheckoutApi - functional programming interface
 * @export
 */
export declare const CheckoutApiFp: (configuration?: Configuration) => {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
     * @summary CreateCheckout
     * @param {string} locationId The ID of the business location to associate the checkout with.
     * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCheckout(locationId: string, body: CreateCheckoutRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCheckoutResponse>>;
};
/**
 * CheckoutApi - factory interface
 * @export
 */
export declare const CheckoutApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
     * @summary CreateCheckout
     * @param {string} locationId The ID of the business location to associate the checkout with.
     * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCheckout(locationId: string, body: CreateCheckoutRequest, options?: any): AxiosPromise<CreateCheckoutResponse>;
};
/**
 * CheckoutApi - object-oriented interface
 * @export
 * @class CheckoutApi
 * @extends {BaseAPI}
 */
export declare class CheckoutApi extends BaseAPI {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
     * @summary CreateCheckout
     * @param {string} locationId The ID of the business location to associate the checkout with.
     * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CheckoutApi
     */
    createCheckout(locationId: string, body: CreateCheckoutRequest, options?: any): Promise<import("axios").AxiosResponse<CreateCheckoutResponse>>;
}
