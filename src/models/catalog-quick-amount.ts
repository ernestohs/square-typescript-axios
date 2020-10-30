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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Represents a Quick Amount in the Catalog.
 * @export
 * @class CatalogQuickAmount
 */
@ObjectType()
export class CatalogQuickAmount {
    /**
     * Represents the type of the Quick Amount. See [CatalogQuickAmountType](#type-catalogquickamounttype) for possible values
     * @type {string}
     * @memberof CatalogQuickAmount
     */
    
    @Field({ nullable: false })
    type: string;
    /**
     * 
     * @type {Money}
     * @memberof CatalogQuickAmount
     */
    
    @Field(() => Money, { nullable: false })
    amount: Money;
    /**
     * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100]. MANUAL type amount will always have score = 100.
     * @type {number}
     * @memberof CatalogQuickAmount
     */
    
    @Field({ nullable: true })
    score?: number;
    /**
     * The order in which this Quick Amount should be displayed.
     * @type {number}
     * @memberof CatalogQuickAmount
     */
    
    @Field({ nullable: true })
    ordinal?: number;
}


