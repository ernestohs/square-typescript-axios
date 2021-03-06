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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { AddGroupToCustomerResponse } from '../models';
import { CreateCustomerCardRequest } from '../models';
import { CreateCustomerCardResponse } from '../models';
import { CreateCustomerRequest } from '../models';
import { CreateCustomerResponse } from '../models';
import { DeleteCustomerCardResponse } from '../models';
import { DeleteCustomerResponse } from '../models';
import { ListCustomersResponse } from '../models';
import { RemoveGroupFromCustomerResponse } from '../models';
import { RetrieveCustomerResponse } from '../models';
import { SearchCustomersRequest } from '../models';
import { SearchCustomersResponse } from '../models';
import { UpdateCustomerRequest } from '../models';
import { UpdateCustomerResponse } from '../models';
/**
 * CustomersApi - axios parameter creator
 * @export
 */
export declare const CustomersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Adds a group membership to a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary AddGroupToCustomer
     * @param {string} customerId The ID of the customer to add to a group.
     * @param {string} groupId The ID of the customer group to add the customer to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addGroupToCustomer: (customerId: string, groupId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - `given_name` - `family_name` - `company_name` - `email_address` - `phone_number`
     * @summary CreateCustomer
     * @param {CreateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomer: (body: CreateCustomerRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Adds a card on file to an existing customer.  As with charges, calls to `CreateCustomerCard` are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.
     * @summary CreateCustomerCard
     * @param {string} customerId The Square ID of the customer profile the card is linked to.
     * @param {CreateCustomerCardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomerCard: (customerId: string, body: CreateCustomerCardRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to delete merged profiles.
     * @summary DeleteCustomer
     * @param {string} customerId The ID of the customer to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomer: (customerId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Removes a card on file from a customer.
     * @summary DeleteCustomerCard
     * @param {string} customerId The ID of the customer that the card on file belongs to.
     * @param {string} cardId The ID of the card on file to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomerCard: (customerId: string, cardId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Lists customer profiles associated with a Square account.  Under normal operating conditions, newly created or updated customer profiles become available for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary ListCustomers
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     * @param {string} [sortField] Indicates how Customers should be sorted.  Default: &#x60;DEFAULT&#x60;.
     * @param {string} [sortOrder] Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.  Default: &#x60;ASC&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCustomers: (cursor?: string, sortField?: string, sortOrder?: string, options?: any) => Promise<RequestArgs>;
    /**
     * Removes a group membership from a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary RemoveGroupFromCustomer
     * @param {string} customerId The ID of the customer to remove from the group.
     * @param {string} groupId The ID of the customer group to remove the customer from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeGroupFromCustomer: (customerId: string, groupId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns details for a single customer.
     * @summary RetrieveCustomer
     * @param {string} customerId The ID of the customer to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveCustomer: (customerId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Searches the customer profiles associated with a Square account using a supported query filter.  Calling `SearchCustomers` without any explicit query filter returns all customer profiles ordered alphabetically based on `given_name` and `family_name`.  Under normal operating conditions, newly created or updated customer profiles become available for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary SearchCustomers
     * @param {SearchCustomersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCustomers: (body: SearchCustomersRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to update merged profiles.  You cannot edit a customer\'s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-Customers-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-Customers-createcustomercard) endpoint.
     * @summary UpdateCustomer
     * @param {string} customerId The ID of the customer to update.
     * @param {UpdateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCustomer: (customerId: string, body: UpdateCustomerRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * CustomersApi - functional programming interface
 * @export
 */
export declare const CustomersApiFp: (configuration?: Configuration) => {
    /**
     * Adds a group membership to a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary AddGroupToCustomer
     * @param {string} customerId The ID of the customer to add to a group.
     * @param {string} groupId The ID of the customer group to add the customer to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addGroupToCustomer(customerId: string, groupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AddGroupToCustomerResponse>>;
    /**
     * Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - `given_name` - `family_name` - `company_name` - `email_address` - `phone_number`
     * @summary CreateCustomer
     * @param {CreateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomer(body: CreateCustomerRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCustomerResponse>>;
    /**
     * Adds a card on file to an existing customer.  As with charges, calls to `CreateCustomerCard` are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.
     * @summary CreateCustomerCard
     * @param {string} customerId The Square ID of the customer profile the card is linked to.
     * @param {CreateCustomerCardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCustomerCardResponse>>;
    /**
     * Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to delete merged profiles.
     * @summary DeleteCustomer
     * @param {string} customerId The ID of the customer to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomer(customerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteCustomerResponse>>;
    /**
     * Removes a card on file from a customer.
     * @summary DeleteCustomerCard
     * @param {string} customerId The ID of the customer that the card on file belongs to.
     * @param {string} cardId The ID of the card on file to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomerCard(customerId: string, cardId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteCustomerCardResponse>>;
    /**
     * Lists customer profiles associated with a Square account.  Under normal operating conditions, newly created or updated customer profiles become available for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary ListCustomers
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     * @param {string} [sortField] Indicates how Customers should be sorted.  Default: &#x60;DEFAULT&#x60;.
     * @param {string} [sortOrder] Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.  Default: &#x60;ASC&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCustomers(cursor?: string, sortField?: string, sortOrder?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCustomersResponse>>;
    /**
     * Removes a group membership from a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary RemoveGroupFromCustomer
     * @param {string} customerId The ID of the customer to remove from the group.
     * @param {string} groupId The ID of the customer group to remove the customer from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeGroupFromCustomer(customerId: string, groupId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RemoveGroupFromCustomerResponse>>;
    /**
     * Returns details for a single customer.
     * @summary RetrieveCustomer
     * @param {string} customerId The ID of the customer to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveCustomer(customerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveCustomerResponse>>;
    /**
     * Searches the customer profiles associated with a Square account using a supported query filter.  Calling `SearchCustomers` without any explicit query filter returns all customer profiles ordered alphabetically based on `given_name` and `family_name`.  Under normal operating conditions, newly created or updated customer profiles become available for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary SearchCustomers
     * @param {SearchCustomersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCustomers(body: SearchCustomersRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchCustomersResponse>>;
    /**
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to update merged profiles.  You cannot edit a customer\'s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-Customers-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-Customers-createcustomercard) endpoint.
     * @summary UpdateCustomer
     * @param {string} customerId The ID of the customer to update.
     * @param {UpdateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCustomer(customerId: string, body: UpdateCustomerRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateCustomerResponse>>;
};
/**
 * CustomersApi - factory interface
 * @export
 */
export declare const CustomersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Adds a group membership to a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary AddGroupToCustomer
     * @param {string} customerId The ID of the customer to add to a group.
     * @param {string} groupId The ID of the customer group to add the customer to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addGroupToCustomer(customerId: string, groupId: string, options?: any): AxiosPromise<AddGroupToCustomerResponse>;
    /**
     * Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - `given_name` - `family_name` - `company_name` - `email_address` - `phone_number`
     * @summary CreateCustomer
     * @param {CreateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomer(body: CreateCustomerRequest, options?: any): AxiosPromise<CreateCustomerResponse>;
    /**
     * Adds a card on file to an existing customer.  As with charges, calls to `CreateCustomerCard` are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.
     * @summary CreateCustomerCard
     * @param {string} customerId The Square ID of the customer profile the card is linked to.
     * @param {CreateCustomerCardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest, options?: any): AxiosPromise<CreateCustomerCardResponse>;
    /**
     * Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to delete merged profiles.
     * @summary DeleteCustomer
     * @param {string} customerId The ID of the customer to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomer(customerId: string, options?: any): AxiosPromise<DeleteCustomerResponse>;
    /**
     * Removes a card on file from a customer.
     * @summary DeleteCustomerCard
     * @param {string} customerId The ID of the customer that the card on file belongs to.
     * @param {string} cardId The ID of the card on file to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCustomerCard(customerId: string, cardId: string, options?: any): AxiosPromise<DeleteCustomerCardResponse>;
    /**
     * Lists customer profiles associated with a Square account.  Under normal operating conditions, newly created or updated customer profiles become available for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary ListCustomers
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     * @param {string} [sortField] Indicates how Customers should be sorted.  Default: &#x60;DEFAULT&#x60;.
     * @param {string} [sortOrder] Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.  Default: &#x60;ASC&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCustomers(cursor?: string, sortField?: string, sortOrder?: string, options?: any): AxiosPromise<ListCustomersResponse>;
    /**
     * Removes a group membership from a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary RemoveGroupFromCustomer
     * @param {string} customerId The ID of the customer to remove from the group.
     * @param {string} groupId The ID of the customer group to remove the customer from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeGroupFromCustomer(customerId: string, groupId: string, options?: any): AxiosPromise<RemoveGroupFromCustomerResponse>;
    /**
     * Returns details for a single customer.
     * @summary RetrieveCustomer
     * @param {string} customerId The ID of the customer to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveCustomer(customerId: string, options?: any): AxiosPromise<RetrieveCustomerResponse>;
    /**
     * Searches the customer profiles associated with a Square account using a supported query filter.  Calling `SearchCustomers` without any explicit query filter returns all customer profiles ordered alphabetically based on `given_name` and `family_name`.  Under normal operating conditions, newly created or updated customer profiles become available for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary SearchCustomers
     * @param {SearchCustomersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCustomers(body: SearchCustomersRequest, options?: any): AxiosPromise<SearchCustomersResponse>;
    /**
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to update merged profiles.  You cannot edit a customer\'s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-Customers-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-Customers-createcustomercard) endpoint.
     * @summary UpdateCustomer
     * @param {string} customerId The ID of the customer to update.
     * @param {UpdateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCustomer(customerId: string, body: UpdateCustomerRequest, options?: any): AxiosPromise<UpdateCustomerResponse>;
};
/**
 * CustomersApi - object-oriented interface
 * @export
 * @class CustomersApi
 * @extends {BaseAPI}
 */
export declare class CustomersApi extends BaseAPI {
    /**
     * Adds a group membership to a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary AddGroupToCustomer
     * @param {string} customerId The ID of the customer to add to a group.
     * @param {string} groupId The ID of the customer group to add the customer to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    addGroupToCustomer(customerId: string, groupId: string, options?: any): Promise<import("axios").AxiosResponse<AddGroupToCustomerResponse>>;
    /**
     * Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - `given_name` - `family_name` - `company_name` - `email_address` - `phone_number`
     * @summary CreateCustomer
     * @param {CreateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    createCustomer(body: CreateCustomerRequest, options?: any): Promise<import("axios").AxiosResponse<CreateCustomerResponse>>;
    /**
     * Adds a card on file to an existing customer.  As with charges, calls to `CreateCustomerCard` are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.
     * @summary CreateCustomerCard
     * @param {string} customerId The Square ID of the customer profile the card is linked to.
     * @param {CreateCustomerCardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest, options?: any): Promise<import("axios").AxiosResponse<CreateCustomerCardResponse>>;
    /**
     * Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to delete merged profiles.
     * @summary DeleteCustomer
     * @param {string} customerId The ID of the customer to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    deleteCustomer(customerId: string, options?: any): Promise<import("axios").AxiosResponse<DeleteCustomerResponse>>;
    /**
     * Removes a card on file from a customer.
     * @summary DeleteCustomerCard
     * @param {string} customerId The ID of the customer that the card on file belongs to.
     * @param {string} cardId The ID of the card on file to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    deleteCustomerCard(customerId: string, cardId: string, options?: any): Promise<import("axios").AxiosResponse<DeleteCustomerCardResponse>>;
    /**
     * Lists customer profiles associated with a Square account.  Under normal operating conditions, newly created or updated customer profiles become available for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary ListCustomers
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     * @param {string} [sortField] Indicates how Customers should be sorted.  Default: &#x60;DEFAULT&#x60;.
     * @param {string} [sortOrder] Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.  Default: &#x60;ASC&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    listCustomers(cursor?: string, sortField?: string, sortOrder?: string, options?: any): Promise<import("axios").AxiosResponse<ListCustomersResponse>>;
    /**
     * Removes a group membership from a customer.   The customer is identified by the `customer_id` value  and the customer group is identified by the `group_id` value.
     * @summary RemoveGroupFromCustomer
     * @param {string} customerId The ID of the customer to remove from the group.
     * @param {string} groupId The ID of the customer group to remove the customer from.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    removeGroupFromCustomer(customerId: string, groupId: string, options?: any): Promise<import("axios").AxiosResponse<RemoveGroupFromCustomerResponse>>;
    /**
     * Returns details for a single customer.
     * @summary RetrieveCustomer
     * @param {string} customerId The ID of the customer to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    retrieveCustomer(customerId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveCustomerResponse>>;
    /**
     * Searches the customer profiles associated with a Square account using a supported query filter.  Calling `SearchCustomers` without any explicit query filter returns all customer profiles ordered alphabetically based on `given_name` and `family_name`.  Under normal operating conditions, newly created or updated customer profiles become available for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated profiles can take closer to one minute or longer, especially during network incidents and outages.
     * @summary SearchCustomers
     * @param {SearchCustomersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    searchCustomers(body: SearchCustomersRequest, options?: any): Promise<import("axios").AxiosResponse<SearchCustomersResponse>>;
    /**
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new `customer_id`. You must use the new `customer_id` to update merged profiles.  You cannot edit a customer\'s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-Customers-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-Customers-createcustomercard) endpoint.
     * @summary UpdateCustomer
     * @param {string} customerId The ID of the customer to update.
     * @param {UpdateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    updateCustomer(customerId: string, body: UpdateCustomerRequest, options?: any): Promise<import("axios").AxiosResponse<UpdateCustomerResponse>>;
}
