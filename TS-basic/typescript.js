"use strict";
exports.__esModule = true;
var TypeScript = /** @class */ (function () {
    function TypeScript(name) {
        this.name = name;
    }
    TypeScript.prototype.getName = function () {
        return this.name;
    };
    return TypeScript;
}());
var typeScriptInstance = new TypeScript("TypeScript");
console.log("NAME: ".concat(typeScriptInstance.getName()));
