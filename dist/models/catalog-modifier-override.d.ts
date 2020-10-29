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
 * Options to control how to override the default behavior of the specified modifier.
 * @export
 * @interface CatalogModifierOverride
 */
export interface CatalogModifierOverride {
    /**
     * The ID of the `CatalogModifier` whose default behavior is being overridden.
     * @type {string}
     * @memberof CatalogModifierOverride
     */
    modifier_id: string;
    /**
     * If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`.
     * @type {boolean}
     * @memberof CatalogModifierOverride
     */
    on_by_default?: boolean;
}