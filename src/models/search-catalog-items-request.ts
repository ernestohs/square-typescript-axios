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


import { CustomAttributeFilter } from './custom-attribute-filter';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the request body for the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint.
 * @export
 * @class SearchCatalogItemsRequest
 */
@ObjectType()
export class SearchCatalogItemsRequest {
    /**
     * The text filter expression to return items or item variations containing specified text in the `name`, `description`, or `abbreviation` attribute value of an item, or in the `name`, `sku`, or `upc` attribute value of an item variation.
     * @type {string}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    text_filter?: string;
    /**
     * The category id query expression to return items containing the specified category IDs.
     * @type {Array<string>}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    category_ids?: Array<string>;
    /**
     * The stock-level query expression to return item variations with the specified stock levels. See [SearchCatalogItemsRequestStockLevel](#type-searchcatalogitemsrequeststocklevel) for possible values
     * @type {Array<string>}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    stock_levels?: Array<string>;
    /**
     * The enabled-location query expression to return items and item variations having specified enabled locations.
     * @type {Array<string>}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    enabled_location_ids?: Array<string>;
    /**
     * The pagination token, returned in the previous response, used to fetch the next batch of pending results.
     * @type {string}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    cursor?: string;
    /**
     * The maximum number of results to return per page. The default value is 100.
     * @type {number}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    limit?: number;
    /**
     * The order to sort the results by item names. The default sort order is ascending (`ASC`). See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    sort_order?: string;
    /**
     * The product types query expression to return items or item variations having the specified product types. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
     * @type {Array<string>}
     * @memberof SearchCatalogItemsRequest
     */
    @Field() 
    product_types?: Array<string>;
    /**
     * The customer-attribute filter to return items or item variations matching the specified custom attribute expressions. A maximum number of 10 custom attribute expressions are supported in a single call to the `SearchCatalogItems` endpoint.
     * @type {Array<CustomAttributeFilter>}
     * @memberof SearchCatalogItemsRequest
     */
    @Field(() => [CustomAttributeFilter]) 
    custom_attribute_filters?: Array<CustomAttributeFilter>;
}


