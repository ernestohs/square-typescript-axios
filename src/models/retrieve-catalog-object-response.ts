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


import { CatalogObject } from './catalog-object';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class RetrieveCatalogObjectResponse
 */
@ObjectType()
export class RetrieveCatalogObjectResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveCatalogObjectResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * 
     * @type {CatalogObject}
     * @memberof RetrieveCatalogObjectResponse
     */
    @Field(() => CatalogObject) 
    object?: CatalogObject;
    /**
     * A list of `CatalogObject`s referenced by the object in the `object` field.
     * @type {Array<CatalogObject>}
     * @memberof RetrieveCatalogObjectResponse
     */
    @Field(() => [CatalogObject]) 
    related_objects?: Array<CatalogObject>;
}


