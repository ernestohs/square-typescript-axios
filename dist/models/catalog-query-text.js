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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogQueryText = void 0;
var graphql_1 = require("@nestjs/graphql");
/**
 * The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case.
 * @export
 * @class CatalogQueryText
 */
var CatalogQueryText = /** @class */ (function () {
    function CatalogQueryText() {
    }
    CatalogQueryText = __decorate([
        graphql_1.ObjectType()
    ], CatalogQueryText);
    return CatalogQueryText;
}());
exports.CatalogQueryText = CatalogQueryText;