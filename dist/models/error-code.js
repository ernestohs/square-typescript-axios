"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
/**
 * Indicates the specific error that occurred during a request to a Square API.
 * @export
 * @enum {string}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INTERNALSERVERERROR"] = "INTERNAL_SERVER_ERROR";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["ACCESSTOKENEXPIRED"] = "ACCESS_TOKEN_EXPIRED";
    ErrorCode["ACCESSTOKENREVOKED"] = "ACCESS_TOKEN_REVOKED";
    ErrorCode["CLIENTDISABLED"] = "CLIENT_DISABLED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["INSUFFICIENTSCOPES"] = "INSUFFICIENT_SCOPES";
    ErrorCode["APPLICATIONDISABLED"] = "APPLICATION_DISABLED";
    ErrorCode["V1APPLICATION"] = "V1_APPLICATION";
    ErrorCode["V1ACCESSTOKEN"] = "V1_ACCESS_TOKEN";
    ErrorCode["CARDPROCESSINGNOTENABLED"] = "CARD_PROCESSING_NOT_ENABLED";
    ErrorCode["BADREQUEST"] = "BAD_REQUEST";
    ErrorCode["MISSINGREQUIREDPARAMETER"] = "MISSING_REQUIRED_PARAMETER";
    ErrorCode["INCORRECTTYPE"] = "INCORRECT_TYPE";
    ErrorCode["INVALIDTIME"] = "INVALID_TIME";
    ErrorCode["INVALIDTIMERANGE"] = "INVALID_TIME_RANGE";
    ErrorCode["INVALIDVALUE"] = "INVALID_VALUE";
    ErrorCode["INVALIDCURSOR"] = "INVALID_CURSOR";
    ErrorCode["UNKNOWNQUERYPARAMETER"] = "UNKNOWN_QUERY_PARAMETER";
    ErrorCode["CONFLICTINGPARAMETERS"] = "CONFLICTING_PARAMETERS";
    ErrorCode["EXPECTEDJSONBODY"] = "EXPECTED_JSON_BODY";
    ErrorCode["INVALIDSORTORDER"] = "INVALID_SORT_ORDER";
    ErrorCode["VALUEREGEXMISMATCH"] = "VALUE_REGEX_MISMATCH";
    ErrorCode["VALUETOOSHORT"] = "VALUE_TOO_SHORT";
    ErrorCode["VALUETOOLONG"] = "VALUE_TOO_LONG";
    ErrorCode["VALUETOOLOW"] = "VALUE_TOO_LOW";
    ErrorCode["VALUETOOHIGH"] = "VALUE_TOO_HIGH";
    ErrorCode["VALUEEMPTY"] = "VALUE_EMPTY";
    ErrorCode["ARRAYLENGTHTOOLONG"] = "ARRAY_LENGTH_TOO_LONG";
    ErrorCode["ARRAYLENGTHTOOSHORT"] = "ARRAY_LENGTH_TOO_SHORT";
    ErrorCode["ARRAYEMPTY"] = "ARRAY_EMPTY";
    ErrorCode["EXPECTEDBOOLEAN"] = "EXPECTED_BOOLEAN";
    ErrorCode["EXPECTEDINTEGER"] = "EXPECTED_INTEGER";
    ErrorCode["EXPECTEDFLOAT"] = "EXPECTED_FLOAT";
    ErrorCode["EXPECTEDSTRING"] = "EXPECTED_STRING";
    ErrorCode["EXPECTEDOBJECT"] = "EXPECTED_OBJECT";
    ErrorCode["EXPECTEDARRAY"] = "EXPECTED_ARRAY";
    ErrorCode["EXPECTEDMAP"] = "EXPECTED_MAP";
    ErrorCode["EXPECTEDBASE64ENCODEDBYTEARRAY"] = "EXPECTED_BASE64_ENCODED_BYTE_ARRAY";
    ErrorCode["INVALIDARRAYVALUE"] = "INVALID_ARRAY_VALUE";
    ErrorCode["INVALIDENUMVALUE"] = "INVALID_ENUM_VALUE";
    ErrorCode["INVALIDCONTENTTYPE"] = "INVALID_CONTENT_TYPE";
    ErrorCode["INVALIDFORMVALUE"] = "INVALID_FORM_VALUE";
    ErrorCode["CUSTOMERNOTFOUND"] = "CUSTOMER_NOT_FOUND";
    ErrorCode["ONEINSTRUMENTEXPECTED"] = "ONE_INSTRUMENT_EXPECTED";
    ErrorCode["NOFIELDSSET"] = "NO_FIELDS_SET";
    ErrorCode["TOOMANYMAPENTRIES"] = "TOO_MANY_MAP_ENTRIES";
    ErrorCode["MAPKEYLENGTHTOOSHORT"] = "MAP_KEY_LENGTH_TOO_SHORT";
    ErrorCode["MAPKEYLENGTHTOOLONG"] = "MAP_KEY_LENGTH_TOO_LONG";
    ErrorCode["CARDEXPIRED"] = "CARD_EXPIRED";
    ErrorCode["INVALIDEXPIRATION"] = "INVALID_EXPIRATION";
    ErrorCode["INVALIDEXPIRATIONYEAR"] = "INVALID_EXPIRATION_YEAR";
    ErrorCode["INVALIDEXPIRATIONDATE"] = "INVALID_EXPIRATION_DATE";
    ErrorCode["UNSUPPORTEDCARDBRAND"] = "UNSUPPORTED_CARD_BRAND";
    ErrorCode["UNSUPPORTEDENTRYMETHOD"] = "UNSUPPORTED_ENTRY_METHOD";
    ErrorCode["INVALIDENCRYPTEDCARD"] = "INVALID_ENCRYPTED_CARD";
    ErrorCode["INVALIDCARD"] = "INVALID_CARD";
    ErrorCode["GENERICDECLINE"] = "GENERIC_DECLINE";
    ErrorCode["CVVFAILURE"] = "CVV_FAILURE";
    ErrorCode["ADDRESSVERIFICATIONFAILURE"] = "ADDRESS_VERIFICATION_FAILURE";
    ErrorCode["INVALIDACCOUNT"] = "INVALID_ACCOUNT";
    ErrorCode["CURRENCYMISMATCH"] = "CURRENCY_MISMATCH";
    ErrorCode["INSUFFICIENTFUNDS"] = "INSUFFICIENT_FUNDS";
    ErrorCode["INSUFFICIENTPERMISSIONS"] = "INSUFFICIENT_PERMISSIONS";
    ErrorCode["CARDHOLDERINSUFFICIENTPERMISSIONS"] = "CARDHOLDER_INSUFFICIENT_PERMISSIONS";
    ErrorCode["INVALIDLOCATION"] = "INVALID_LOCATION";
    ErrorCode["TRANSACTIONLIMIT"] = "TRANSACTION_LIMIT";
    ErrorCode["VOICEFAILURE"] = "VOICE_FAILURE";
    ErrorCode["PANFAILURE"] = "PAN_FAILURE";
    ErrorCode["EXPIRATIONFAILURE"] = "EXPIRATION_FAILURE";
    ErrorCode["CARDNOTSUPPORTED"] = "CARD_NOT_SUPPORTED";
    ErrorCode["INVALIDPIN"] = "INVALID_PIN";
    ErrorCode["INVALIDPOSTALCODE"] = "INVALID_POSTAL_CODE";
    ErrorCode["INVALIDFEES"] = "INVALID_FEES";
    ErrorCode["MANUALLYENTEREDPAYMENTNOTSUPPORTED"] = "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED";
    ErrorCode["PAYMENTLIMITEXCEEDED"] = "PAYMENT_LIMIT_EXCEEDED";
    ErrorCode["GIFTCARDAVAILABLEAMOUNT"] = "GIFT_CARD_AVAILABLE_AMOUNT";
    ErrorCode["DELAYEDTRANSACTIONEXPIRED"] = "DELAYED_TRANSACTION_EXPIRED";
    ErrorCode["DELAYEDTRANSACTIONCANCELED"] = "DELAYED_TRANSACTION_CANCELED";
    ErrorCode["DELAYEDTRANSACTIONCAPTURED"] = "DELAYED_TRANSACTION_CAPTURED";
    ErrorCode["DELAYEDTRANSACTIONFAILED"] = "DELAYED_TRANSACTION_FAILED";
    ErrorCode["CARDTOKENEXPIRED"] = "CARD_TOKEN_EXPIRED";
    ErrorCode["CARDTOKENUSED"] = "CARD_TOKEN_USED";
    ErrorCode["AMOUNTTOOHIGH"] = "AMOUNT_TOO_HIGH";
    ErrorCode["UNSUPPORTEDINSTRUMENTTYPE"] = "UNSUPPORTED_INSTRUMENT_TYPE";
    ErrorCode["REFUNDAMOUNTINVALID"] = "REFUND_AMOUNT_INVALID";
    ErrorCode["REFUNDALREADYPENDING"] = "REFUND_ALREADY_PENDING";
    ErrorCode["PAYMENTNOTREFUNDABLE"] = "PAYMENT_NOT_REFUNDABLE";
    ErrorCode["REFUNDDECLINED"] = "REFUND_DECLINED";
    ErrorCode["INVALIDCARDDATA"] = "INVALID_CARD_DATA";
    ErrorCode["SOURCEUSED"] = "SOURCE_USED";
    ErrorCode["SOURCEEXPIRED"] = "SOURCE_EXPIRED";
    ErrorCode["LOCATIONMISMATCH"] = "LOCATION_MISMATCH";
    ErrorCode["IDEMPOTENCYKEYREUSED"] = "IDEMPOTENCY_KEY_REUSED";
    ErrorCode["UNEXPECTEDVALUE"] = "UNEXPECTED_VALUE";
    ErrorCode["SANDBOXNOTSUPPORTED"] = "SANDBOX_NOT_SUPPORTED";
    ErrorCode["INVALIDEMAILADDRESS"] = "INVALID_EMAIL_ADDRESS";
    ErrorCode["INVALIDPHONENUMBER"] = "INVALID_PHONE_NUMBER";
    ErrorCode["CHECKOUTEXPIRED"] = "CHECKOUT_EXPIRED";
    ErrorCode["BADCERTIFICATE"] = "BAD_CERTIFICATE";
    ErrorCode["INVALIDSQUAREVERSIONFORMAT"] = "INVALID_SQUARE_VERSION_FORMAT";
    ErrorCode["APIVERSIONINCOMPATIBLE"] = "API_VERSION_INCOMPATIBLE";
    ErrorCode["CARDDECLINED"] = "CARD_DECLINED";
    ErrorCode["VERIFYCVVFAILURE"] = "VERIFY_CVV_FAILURE";
    ErrorCode["VERIFYAVSFAILURE"] = "VERIFY_AVS_FAILURE";
    ErrorCode["CARDDECLINEDCALLISSUER"] = "CARD_DECLINED_CALL_ISSUER";
    ErrorCode["CARDDECLINEDVERIFICATIONREQUIRED"] = "CARD_DECLINED_VERIFICATION_REQUIRED";
    ErrorCode["BADEXPIRATION"] = "BAD_EXPIRATION";
    ErrorCode["CHIPINSERTIONREQUIRED"] = "CHIP_INSERTION_REQUIRED";
    ErrorCode["ALLOWABLEPINTRIESEXCEEDED"] = "ALLOWABLE_PIN_TRIES_EXCEEDED";
    ErrorCode["RESERVATIONDECLINED"] = "RESERVATION_DECLINED";
    ErrorCode["NOTFOUND"] = "NOT_FOUND";
    ErrorCode["APPLEPAYMENTPROCESSINGCERTIFICATEHASHNOTFOUND"] = "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND";
    ErrorCode["METHODNOTALLOWED"] = "METHOD_NOT_ALLOWED";
    ErrorCode["NOTACCEPTABLE"] = "NOT_ACCEPTABLE";
    ErrorCode["REQUESTTIMEOUT"] = "REQUEST_TIMEOUT";
    ErrorCode["CONFLICT"] = "CONFLICT";
    ErrorCode["GONE"] = "GONE";
    ErrorCode["REQUESTENTITYTOOLARGE"] = "REQUEST_ENTITY_TOO_LARGE";
    ErrorCode["UNSUPPORTEDMEDIATYPE"] = "UNSUPPORTED_MEDIA_TYPE";
    ErrorCode["UNPROCESSABLEENTITY"] = "UNPROCESSABLE_ENTITY";
    ErrorCode["RATELIMITED"] = "RATE_LIMITED";
    ErrorCode["NOTIMPLEMENTED"] = "NOT_IMPLEMENTED";
    ErrorCode["BADGATEWAY"] = "BAD_GATEWAY";
    ErrorCode["SERVICEUNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    ErrorCode["TEMPORARYERROR"] = "TEMPORARY_ERROR";
    ErrorCode["GATEWAYTIMEOUT"] = "GATEWAY_TIMEOUT";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));