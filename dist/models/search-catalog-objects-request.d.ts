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
import { CatalogQuery } from './catalog-query';
/**
 *
 * @export
 * @interface SearchCatalogObjectsRequest
 */
export interface SearchCatalogObjectsRequest {
    /**
     * The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * @type {string}
     * @memberof SearchCatalogObjectsRequest
     */
    cursor?: string;
    /**
     * The desired set of object types to appear in the search results. The legal values are taken from the CatalogObjectType enum: `\"ITEM\"`, `\"ITEM_VARIATION\"`, `\"CATEGORY\"`, `\"DISCOUNT\"`, `\"TAX\"`, `\"MODIFIER\"`, or `\"MODIFIER_LIST\"`. See [CatalogObjectType](#type-catalogobjecttype) for possible values
     * @type {Array<string>}
     * @memberof SearchCatalogObjectsRequest
     */
    object_types?: Array<string>;
    /**
     * If `true`, deleted objects will be included in the results. Deleted objects will have their `is_deleted` field set to `true`.
     * @type {boolean}
     * @memberof SearchCatalogObjectsRequest
     */
    include_deleted_objects?: boolean;
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:  If a CatalogItem is returned in the object field of the response, its associated CatalogCategory, CatalogTax objects, CatalogImage objects and CatalogModifierList objects will be included in the `related_objects` field of the response.  If a CatalogItemVariation is returned in the object field of the response, its parent CatalogItem will be included in the `related_objects` field of the response.
     * @type {boolean}
     * @memberof SearchCatalogObjectsRequest
     */
    include_related_objects?: boolean;
    /**
     * Return objects modified after this [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates), in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. The timestamp is exclusive - objects with a timestamp equal to `begin_time` will not be included in the response.
     * @type {string}
     * @memberof SearchCatalogObjectsRequest
     */
    begin_time?: string;
    /**
     *
     * @type {CatalogQuery}
     * @memberof SearchCatalogObjectsRequest
     */
    query?: CatalogQuery;
    /**
     * A limit on the number of results to be returned in a single page. The limit is advisory - the implementation may return more or fewer results. If the supplied limit is negative, zero, or is higher than the maximum limit of 1,000, it will be ignored.
     * @type {number}
     * @memberof SearchCatalogObjectsRequest
     */
    limit?: number;
}
