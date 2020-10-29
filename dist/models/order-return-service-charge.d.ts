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
import { OrderLineItemAppliedTax } from './order-line-item-applied-tax';
/**
 * Represents the service charge applied to the original order.
 * @export
 * @interface OrderReturnServiceCharge
 */
export interface OrderReturnServiceCharge {
    /**
     * Unique ID that identifies the return service charge only within this order.
     * @type {string}
     * @memberof OrderReturnServiceCharge
     */
    uid?: string;
    /**
     * `uid` of the Service Charge from the Order containing the original charge of the service charge. `source_service_charge_uid` is `null` for unlinked returns.
     * @type {string}
     * @memberof OrderReturnServiceCharge
     */
    source_service_charge_uid?: string;
    /**
     * The name of the service charge.
     * @type {string}
     * @memberof OrderReturnServiceCharge
     */
    name?: string;
    /**
     * The catalog object ID of the associated `CatalogServiceCharge`.
     * @type {string}
     * @memberof OrderReturnServiceCharge
     */
    catalog_object_id?: string;
    /**
     * The percentage of the service charge, as a string representation of a decimal number. For example, a value of `\"7.25\"` corresponds to a percentage of 7.25%.  Exactly one of `percentage` or `amount_money` should be set.
     * @type {string}
     * @memberof OrderReturnServiceCharge
     */
    percentage?: string;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnServiceCharge
     */
    amount_money?: Money;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnServiceCharge
     */
    applied_money?: Money;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnServiceCharge
     */
    total_money?: Money;
    /**
     *
     * @type {Money}
     * @memberof OrderReturnServiceCharge
     */
    total_tax_money?: Money;
    /**
     * The calculation phase after which to apply the service charge. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values
     * @type {string}
     * @memberof OrderReturnServiceCharge
     */
    calculation_phase?: string;
    /**
     * Indicates whether the surcharge can be taxed. Service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
     * @type {boolean}
     * @memberof OrderReturnServiceCharge
     */
    taxable?: boolean;
    /**
     * The list of references to `OrderReturnTax` entities applied to the `OrderReturnServiceCharge`. Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level `OrderReturnTax` that is being applied to the `OrderReturnServiceCharge`. On reads, the amount applied is populated.
     * @type {Array<OrderLineItemAppliedTax>}
     * @memberof OrderReturnServiceCharge
     */
    applied_taxes?: Array<OrderLineItemAppliedTax>;
}
