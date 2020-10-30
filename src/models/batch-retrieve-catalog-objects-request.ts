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
 * 
 * @export
 * @class BatchRetrieveCatalogObjectsRequest
 */
@ObjectType()
export class BatchRetrieveCatalogObjectsRequest {
    /**
     * The IDs of the CatalogObjects to be retrieved.
     * @type {Array<string>}
     * @memberof BatchRetrieveCatalogObjectsRequest
     */
    
    object_ids: Array<string>;
    /**
     * If `true`, the response will include additional objects that are related to the requested objects, as follows:  If the `objects` field of the response contains a CatalogItem, its associated CatalogCategory objects, CatalogTax objects, CatalogImage objects and CatalogModifierLists will be returned in the `related_objects` field of the response. If the `objects` field of the response contains a CatalogItemVariation, its parent CatalogItem will be returned in the `related_objects` field of the response.
     * @type {boolean}
     * @memberof BatchRetrieveCatalogObjectsRequest
     */
    
    @Field({ nullable: true })
    include_related_objects?: boolean;
}


