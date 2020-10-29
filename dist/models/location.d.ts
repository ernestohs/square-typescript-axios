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
import { Address } from './address';
import { BusinessHours } from './business-hours';
import { Coordinates } from './coordinates';
/**
 *
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * The Square-issued ID of the location.
     * @type {string}
     * @memberof Location
     */
    id?: string;
    /**
     * The name of the location. This information appears in the dashboard as the nickname.
     * @type {string}
     * @memberof Location
     */
    name?: string;
    /**
     *
     * @type {Address}
     * @memberof Location
     */
    address?: Address;
    /**
     * The [IANA Timezone](https://www.iana.org/time-zones) identifier for the timezone of the location.
     * @type {string}
     * @memberof Location
     */
    timezone?: string;
    /**
     * The Square features that are enabled for the location. See `LocationCapability` for possible values. See [LocationCapability](#type-locationcapability) for possible values
     * @type {Array<string>}
     * @memberof Location
     */
    capabilities?: Array<string>;
    /**
     * The status of the location, either active or inactive. See [LocationStatus](#type-locationstatus) for possible values
     * @type {string}
     * @memberof Location
     */
    status?: string;
    /**
     * The time when the location was created, in RFC 3339 format.
     * @type {string}
     * @memberof Location
     */
    created_at?: string;
    /**
     * The ID of the merchant that owns the location.
     * @type {string}
     * @memberof Location
     */
    merchant_id?: string;
    /**
     * The country of the location, in ISO 3166-1-alpha-2 format.  See `Country` for possible values. See [Country](#type-country) for possible values
     * @type {string}
     * @memberof Location
     */
    country?: string;
    /**
     * The language associated with the location, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).
     * @type {string}
     * @memberof Location
     */
    language_code?: string;
    /**
     * The currency used for all transactions at this location, in ISO 4217 format. See `Currency` for possible values. See [Currency](#type-currency) for possible values
     * @type {string}
     * @memberof Location
     */
    currency?: string;
    /**
     * The phone number of the location in human readable format.
     * @type {string}
     * @memberof Location
     */
    phone_number?: string;
    /**
     * The business name of the location This is the name visible to the customers of the location. For example, this name appears on customer receipts.
     * @type {string}
     * @memberof Location
     */
    business_name?: string;
    /**
     * The type of the location, either physical or mobile. See [LocationType](#type-locationtype) for possible values
     * @type {string}
     * @memberof Location
     */
    type?: string;
    /**
     * The website URL of the location.
     * @type {string}
     * @memberof Location
     */
    website_url?: string;
    /**
     *
     * @type {BusinessHours}
     * @memberof Location
     */
    business_hours?: BusinessHours;
    /**
     * The email of the location. This email is visible to the customers of the location. For example, the email appears on customer receipts.
     * @type {string}
     * @memberof Location
     */
    business_email?: string;
    /**
     * The description of the location.
     * @type {string}
     * @memberof Location
     */
    description?: string;
    /**
     * The Twitter username of the location without the \'&#64;\' symbol.
     * @type {string}
     * @memberof Location
     */
    twitter_username?: string;
    /**
     * The Instagram username of the location without the \'&#64;\' symbol.
     * @type {string}
     * @memberof Location
     */
    instagram_username?: string;
    /**
     * The Facebook profile URL of the location. The URL should begin with \'facebook.com/\'.
     * @type {string}
     * @memberof Location
     */
    facebook_url?: string;
    /**
     *
     * @type {Coordinates}
     * @memberof Location
     */
    coordinates?: Coordinates;
    /**
     * The URL of the logo image for the location. The Seller must choose this logo in the Seller dashboard (Receipts section) for the logo to appear on transactions (such as receipts, invoices) that Square generates on behalf of the Seller. This image should have an aspect ratio close to 1:1 and is recommended to be at least 200x200 pixels.
     * @type {string}
     * @memberof Location
     */
    logo_url?: string;
    /**
     * The URL of the Point of Sale background image for the location.
     * @type {string}
     * @memberof Location
     */
    pos_background_url?: string;
    /**
     * The merchant category code (MCC) of the location, as standardized by ISO 18245. The MCC describes the kind of goods or services sold at the location.
     * @type {string}
     * @memberof Location
     */
    mcc?: string;
    /**
     * The URL of a full-format logo image for the location. The Seller must choose this logo in the Seller dashboard (Receipts section) for the logo to appear on transactions (such as receipts, invoices) that Square generates on behalf of the Seller. This image can have an aspect ratio of 2:1 or greater and is recommended to be at least 1280x648 pixels.
     * @type {string}
     * @memberof Location
     */
    full_format_logo_url?: string;
}
