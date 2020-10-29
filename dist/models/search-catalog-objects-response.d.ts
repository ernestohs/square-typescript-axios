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
import { CatalogObject } from './catalog-object';
/**
 *
 * @export
 * @interface SearchCatalogObjectsResponse
 */
export interface SearchCatalogObjectsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof SearchCatalogObjectsResponse
     */
    errors?: Array<Error>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * @type {string}
     * @memberof SearchCatalogObjectsResponse
     */
    cursor?: string;
    /**
     * The CatalogObjects returned.
     * @type {Array<CatalogObject>}
     * @memberof SearchCatalogObjectsResponse
     */
    objects?: Array<CatalogObject>;
    /**
     * A list of CatalogObjects referenced by the objects in the `objects` field.
     * @type {Array<CatalogObject>}
     * @memberof SearchCatalogObjectsResponse
     */
    related_objects?: Array<CatalogObject>;
    /**
     * When the associated product catalog was last updated. Will match the value for `end_time` or `cursor` if either field is included in the `SearchCatalog` request.
     * @type {string}
     * @memberof SearchCatalogObjectsResponse
     */
    latest_time?: string;
}
