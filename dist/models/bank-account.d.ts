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
 * Represents a bank account. For more information about  linking a bank account to a Square account, see  [Bank Accounts API](/docs/bank-accounts-api).
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
    /**
     * The unique, Square-issued identifier for the bank account.
     * @type {string}
     * @memberof BankAccount
     */
    id: string;
    /**
     * The last few digits of the account number.
     * @type {string}
     * @memberof BankAccount
     */
    account_number_suffix: string;
    /**
     * The ISO 3166 Alpha-2 country code where the bank account is based. See [Country](#type-country) for possible values
     * @type {string}
     * @memberof BankAccount
     */
    country: string;
    /**
     * The 3-character ISO 4217 currency code indicating the operating currency of the bank account. For example, the currency code for US dollars is `USD`. See [Currency](#type-currency) for possible values
     * @type {string}
     * @memberof BankAccount
     */
    currency: string;
    /**
     * The financial purpose of the associated bank account. See [BankAccountType](#type-bankaccounttype) for possible values
     * @type {string}
     * @memberof BankAccount
     */
    account_type: string;
    /**
     * Name of the account holder. This name must match the name  on the targeted bank account record.
     * @type {string}
     * @memberof BankAccount
     */
    holder_name: string;
    /**
     * Primary identifier for the bank. For more information, see  [Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api).
     * @type {string}
     * @memberof BankAccount
     */
    primary_bank_identification_number: string;
    /**
     * Secondary identifier for the bank. For more information, see  [Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api).
     * @type {string}
     * @memberof BankAccount
     */
    secondary_bank_identification_number?: string;
    /**
     * Reference identifier that will be displayed to UK bank account owners when collecting direct debit authorization. Only required for UK bank accounts.
     * @type {string}
     * @memberof BankAccount
     */
    debit_mandate_reference_id?: string;
    /**
     * Client-provided identifier for linking the banking account to an entity in a third-party system (for example, a bank account number or a user identifier).
     * @type {string}
     * @memberof BankAccount
     */
    reference_id?: string;
    /**
     * The location to which the bank account belongs.
     * @type {string}
     * @memberof BankAccount
     */
    location_id?: string;
    /**
     * Read-only. The current verification status of this BankAccount object. See [BankAccountStatus](#type-bankaccountstatus) for possible values
     * @type {string}
     * @memberof BankAccount
     */
    status: string;
    /**
     * Indicates whether it is possible for Square to send money to this bank account.
     * @type {boolean}
     * @memberof BankAccount
     */
    creditable: boolean;
    /**
     * Indicates whether it is possible for Square to take money from this  bank account.
     * @type {boolean}
     * @memberof BankAccount
     */
    debitable: boolean;
    /**
     * A Square-assigned, unique identifier for the bank account based on the account information. The account fingerprint can be used to compare account entries and determine if the they represent the same real-world bank account.
     * @type {string}
     * @memberof BankAccount
     */
    fingerprint?: string;
    /**
     * The current version of the `BankAccount`.
     * @type {number}
     * @memberof BankAccount
     */
    version?: number;
    /**
     * Read only. Name of actual financial institution.  For example \"Bank of America\".
     * @type {string}
     * @memberof BankAccount
     */
    bank_name?: string;
}
