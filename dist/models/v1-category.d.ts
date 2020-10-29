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
 * V1Category
 * @export
 * @interface V1Category
 */
export interface V1Category {
    /**
     * The category\'s unique ID.
     * @type {string}
     * @memberof V1Category
     */
    id?: string;
    /**
     * The category\'s name.
     * @type {string}
     * @memberof V1Category
     */
    name?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     * @type {string}
     * @memberof V1Category
     */
    v2_id?: string;
}
