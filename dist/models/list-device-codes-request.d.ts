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
/**
 *
 * @export
 * @interface ListDeviceCodesRequest
 */
export interface ListDeviceCodesRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
     * @type {string}
     * @memberof ListDeviceCodesRequest
     */
    cursor?: string;
    /**
     * If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
     * @type {string}
     * @memberof ListDeviceCodesRequest
     */
    location_id?: string;
    /**
     * If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty. See [ProductType](#type-producttype) for possible values
     * @type {string}
     * @memberof ListDeviceCodesRequest
     */
    product_type?: string;
    /**
     * If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status `PAIRED` and `UNPAIRED` if empty. See [DeviceCodeStatus](#type-devicecodestatus) for possible values
     * @type {Array<string>}
     * @memberof ListDeviceCodesRequest
     */
    status?: Array<string>;
}
