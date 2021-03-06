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
 * Defines the response body returned from the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint.
 * @export
 * @class SearchCatalogItemsResponse
 */
export declare class SearchCatalogItemsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof SearchCatalogItemsResponse
     */
    errors?: Array<Error>;
    /**
     * Returned items matching the specified query expressions.
     * @type {Array<CatalogObject>}
     * @memberof SearchCatalogItemsResponse
     */
    items?: Array<CatalogObject>;
    /**
     * Pagination token used in the next request to return more of the search result.
     * @type {string}
     * @memberof SearchCatalogItemsResponse
     */
    cursor?: string;
    /**
     * Ids of returned item variations matching the specified query expression.
     * @type {Array<string>}
     * @memberof SearchCatalogItemsResponse
     */
    matched_variation_ids?: Array<string>;
}
