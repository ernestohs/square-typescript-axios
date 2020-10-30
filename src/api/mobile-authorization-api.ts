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
import { CreateMobileAuthorizationCodeRequest } from '../models';
// @ts-ignore
import { CreateMobileAuthorizationCodeResponse } from '../models';
/**
 * MobileAuthorizationApi - axios parameter creator
 * @export
 */
export const MobileAuthorizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generates code to authorize a mobile application to connect to a Square card reader  Authorization codes are one-time-use and expire __60 minutes__ after being issued.  __Important:__ The `Authorization` header you provide to this endpoint must have the following format:  ``` Authorization: Bearer ACCESS_TOKEN ```  Replace `ACCESS_TOKEN` with a [valid production authorization credential](/docs/build-basics/access-tokens).
         * @summary CreateMobileAuthorizationCode
         * @param {CreateMobileAuthorizationCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMobileAuthorizationCode: async (body: CreateMobileAuthorizationCodeRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createMobileAuthorizationCode.');
            }
            const localVarPath = `/mobile/authorization-code`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["PAYMENTS_WRITE_IN_PERSON"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MobileAuthorizationApi - functional programming interface
 * @export
 */
export const MobileAuthorizationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Generates code to authorize a mobile application to connect to a Square card reader  Authorization codes are one-time-use and expire __60 minutes__ after being issued.  __Important:__ The `Authorization` header you provide to this endpoint must have the following format:  ``` Authorization: Bearer ACCESS_TOKEN ```  Replace `ACCESS_TOKEN` with a [valid production authorization credential](/docs/build-basics/access-tokens).
         * @summary CreateMobileAuthorizationCode
         * @param {CreateMobileAuthorizationCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMobileAuthorizationCode(body: CreateMobileAuthorizationCodeRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateMobileAuthorizationCodeResponse>> {
            const localVarAxiosArgs = await MobileAuthorizationApiAxiosParamCreator(configuration).createMobileAuthorizationCode(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MobileAuthorizationApi - factory interface
 * @export
 */
export const MobileAuthorizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Generates code to authorize a mobile application to connect to a Square card reader  Authorization codes are one-time-use and expire __60 minutes__ after being issued.  __Important:__ The `Authorization` header you provide to this endpoint must have the following format:  ``` Authorization: Bearer ACCESS_TOKEN ```  Replace `ACCESS_TOKEN` with a [valid production authorization credential](/docs/build-basics/access-tokens).
         * @summary CreateMobileAuthorizationCode
         * @param {CreateMobileAuthorizationCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMobileAuthorizationCode(body: CreateMobileAuthorizationCodeRequest, options?: any): AxiosPromise<CreateMobileAuthorizationCodeResponse> {
            return MobileAuthorizationApiFp(configuration).createMobileAuthorizationCode(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MobileAuthorizationApi - object-oriented interface
 * @export
 * @class MobileAuthorizationApi
 * @extends {BaseAPI}
 */
export class MobileAuthorizationApi extends BaseAPI {
    /**
     * Generates code to authorize a mobile application to connect to a Square card reader  Authorization codes are one-time-use and expire __60 minutes__ after being issued.  __Important:__ The `Authorization` header you provide to this endpoint must have the following format:  ``` Authorization: Bearer ACCESS_TOKEN ```  Replace `ACCESS_TOKEN` with a [valid production authorization credential](/docs/build-basics/access-tokens).
     * @summary CreateMobileAuthorizationCode
     * @param {CreateMobileAuthorizationCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MobileAuthorizationApi
     */
    public createMobileAuthorizationCode(body: CreateMobileAuthorizationCodeRequest, options?: any) {
        return MobileAuthorizationApiFp(this.configuration).createMobileAuthorizationCode(body, options).then((request) => request(this.axios, this.basePath));
    }
}
