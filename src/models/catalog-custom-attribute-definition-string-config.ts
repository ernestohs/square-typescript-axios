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
 * Configuration associated with Custom Attribute Definitions of type `STRING`.
 * @export
 * @class CatalogCustomAttributeDefinitionStringConfig
 */
@ObjectType()
export class CatalogCustomAttributeDefinitionStringConfig {
    /**
     * If true, each Custom Attribute instance associated with this Custom Attribute Definition must have a unique value within the seller\'s catalog. For example, this may be used for a value like a SKU that should not be duplicated within a seller\'s catalog. May not be modified after the definition has been created.
     * @type {boolean}
     * @memberof CatalogCustomAttributeDefinitionStringConfig
     */
    
    @Field({ nullable: true })
    enforce_uniqueness?: boolean;
}


