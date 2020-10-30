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



/**
 * Possible types of CatalogObjects returned from the Catalog, each containing type-specific properties in the `*_data` field corresponding to the object type.
 * @export
 * @enum {string}
 */
export enum CatalogObjectType {
    ITEM = 'ITEM',
    IMAGE = 'IMAGE',
    CATEGORY = 'CATEGORY',
    ITEMVARIATION = 'ITEM_VARIATION',
    TAX = 'TAX',
    DISCOUNT = 'DISCOUNT',
    MODIFIERLIST = 'MODIFIER_LIST',
    MODIFIER = 'MODIFIER',
    PRICINGRULE = 'PRICING_RULE',
    PRODUCTSET = 'PRODUCT_SET',
    TIMEPERIOD = 'TIME_PERIOD',
    MEASUREMENTUNIT = 'MEASUREMENT_UNIT',
    SUBSCRIPTIONPLAN = 'SUBSCRIPTION_PLAN',
    ITEMOPTION = 'ITEM_OPTION',
    ITEMOPTIONVAL = 'ITEM_OPTION_VAL',
    CUSTOMATTRIBUTEDEFINITION = 'CUSTOM_ATTRIBUTE_DEFINITION',
    QUICKAMOUNTSSETTINGS = 'QUICK_AMOUNTS_SETTINGS'
}


