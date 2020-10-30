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
import { CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection } from './catalog-custom-attribute-definition-selection-config-custom-attribute-selection';
/**
 * Configuration associated with `SELECTION`-type custom attribute definitions.
 * @export
 * @class CatalogCustomAttributeDefinitionSelectionConfig
 */
export declare class CatalogCustomAttributeDefinitionSelectionConfig {
    /**
     * The maximum number of selections that can be set. The maximum value for this attribute is 100. The default value is 1. The value can be modified, but changing the value will not affect existing custom attribute values on objects. Clients need to handle custom attributes with more selected values than allowed by this limit.
     * @type {number}
     * @memberof CatalogCustomAttributeDefinitionSelectionConfig
     */
    max_allowed_selections?: number;
    /**
     * The set of valid `CatalogCustomAttributeSelections`. Up to a maximum of 100 selections can be defined. Can be modified.
     * @type {Array<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection>}
     * @memberof CatalogCustomAttributeDefinitionSelectionConfig
     */
    allowed_selections?: Array<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection>;
}
