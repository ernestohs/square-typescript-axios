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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetBankAccountByV1IdResponse } from '../models';
// @ts-ignore
import { GetBankAccountResponse } from '../models';
// @ts-ignore
import { ListBankAccountsResponse } from '../models';
/**
 * BankAccountsApi - axios parameter creator
 * @export
 */
export const BankAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
         * @summary GetBankAccount
         * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBankAccount: async (bankAccountId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bankAccountId' is not null or undefined
            if (bankAccountId === null || bankAccountId === undefined) {
                throw new RequiredError('bankAccountId','Required parameter bankAccountId was null or undefined when calling getBankAccount.');
            }
            const localVarPath = `/v2/bank-accounts/{bank_account_id}`
                .replace(`{${"bank_account_id"}}`, encodeURIComponent(String(bankAccountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["BANK_ACCOUNTS_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
         * @summary GetBankAccountByV1Id
         * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBankAccountByV1Id: async (v1BankAccountId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'v1BankAccountId' is not null or undefined
            if (v1BankAccountId === null || v1BankAccountId === undefined) {
                throw new RequiredError('v1BankAccountId','Required parameter v1BankAccountId was null or undefined when calling getBankAccountByV1Id.');
            }
            const localVarPath = `/v2/bank-accounts/by-v1-id/{v1_bank_account_id}`
                .replace(`{${"v1_bank_account_id"}}`, encodeURIComponent(String(v1BankAccountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["BANK_ACCOUNTS_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
         * @summary ListBankAccounts
         * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
         * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
         * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBankAccounts: async (cursor?: string, limit?: number, locationId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/bank-accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["BANK_ACCOUNTS_READ"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (locationId !== undefined) {
                localVarQueryParameter['location_id'] = locationId;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BankAccountsApi - functional programming interface
 * @export
 */
export const BankAccountsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
         * @summary GetBankAccount
         * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBankAccount(bankAccountId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBankAccountResponse>> {
            const localVarAxiosArgs = await BankAccountsApiAxiosParamCreator(configuration).getBankAccount(bankAccountId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
         * @summary GetBankAccountByV1Id
         * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBankAccountByV1Id(v1BankAccountId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBankAccountByV1IdResponse>> {
            const localVarAxiosArgs = await BankAccountsApiAxiosParamCreator(configuration).getBankAccountByV1Id(v1BankAccountId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
         * @summary ListBankAccounts
         * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
         * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
         * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listBankAccounts(cursor?: string, limit?: number, locationId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListBankAccountsResponse>> {
            const localVarAxiosArgs = await BankAccountsApiAxiosParamCreator(configuration).listBankAccounts(cursor, limit, locationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BankAccountsApi - factory interface
 * @export
 */
export const BankAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
         * @summary GetBankAccount
         * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBankAccount(bankAccountId: string, options?: any): AxiosPromise<GetBankAccountResponse> {
            return BankAccountsApiFp(configuration).getBankAccount(bankAccountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
         * @summary GetBankAccountByV1Id
         * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBankAccountByV1Id(v1BankAccountId: string, options?: any): AxiosPromise<GetBankAccountByV1IdResponse> {
            return BankAccountsApiFp(configuration).getBankAccountByV1Id(v1BankAccountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
         * @summary ListBankAccounts
         * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
         * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
         * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBankAccounts(cursor?: string, limit?: number, locationId?: string, options?: any): AxiosPromise<ListBankAccountsResponse> {
            return BankAccountsApiFp(configuration).listBankAccounts(cursor, limit, locationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BankAccountsApi - object-oriented interface
 * @export
 * @class BankAccountsApi
 * @extends {BaseAPI}
 */
export class BankAccountsApi extends BaseAPI {
    /**
     * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
     * @summary GetBankAccount
     * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApi
     */
    public getBankAccount(bankAccountId: string, options?: any) {
        return BankAccountsApiFp(this.configuration).getBankAccount(bankAccountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
     * @summary GetBankAccountByV1Id
     * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApi
     */
    public getBankAccountByV1Id(v1BankAccountId: string, options?: any) {
        return BankAccountsApiFp(this.configuration).getBankAccountByV1Id(v1BankAccountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
     * @summary ListBankAccounts
     * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
     * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApi
     */
    public listBankAccounts(cursor?: string, limit?: number, locationId?: string, options?: any) {
        return BankAccountsApiFp(this.configuration).listBankAccounts(cursor, limit, locationId, options).then((request) => request(this.axios, this.basePath));
    }
}
