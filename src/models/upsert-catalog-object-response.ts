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


import { CatalogIdMapping } from './catalog-id-mapping';
import { CatalogObject } from './catalog-object';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class UpsertCatalogObjectResponse
 */
@ObjectType()
export class UpsertCatalogObjectResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof UpsertCatalogObjectResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * 
     * @type {CatalogObject}
     * @memberof UpsertCatalogObjectResponse
     */
    @Field(() => CatalogObject) 
    catalog_object?: CatalogObject;
    /**
     * The mapping between client and server IDs for this upsert.
     * @type {Array<CatalogIdMapping>}
     * @memberof UpsertCatalogObjectResponse
     */
    @Field(() => [CatalogIdMapping]) 
    id_mappings?: Array<CatalogIdMapping>;
}


