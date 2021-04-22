TYPED JS [![Build Status](https://travis-ci.org/igorzg/typed-js.svg?branch=master)](https://travis-ci.org/igorzg/typed-js)
====

# Support
Dynamic type checker for nodejs >= v4.0.0
It support only class syntax in order to have type checking all classes must be inherited from Type class

# Type Inheritance
All class members must be defined in constructor super call otherwise if you try to assign member to initialized object
Type object will throw an type error. After object initialization object is prevented from extension
```javascript
class User extends Type {
    constructor(name, password) {
        super({
            username: Type.STRING,
            password: Type.STRING
        });
        this.username = name;
        this.password = password;
    }
    getUserName() {
        return this.username;
    }
    setUserName(user) {
        this.username = user;
    }
}
var user = new User('Igor', 'Ivanovic');
user.getUserName(); // Igor
user.setUserName(1) // Throws type error
user.assign = 1 // Throws type error , all members must be defined at super call with proper type
// Predefined function inside of type
user.destroy(); // clear all references to initialized object
```

# Constants
```javascript
Type.OBJECT = "object";
Type.STRING = "string";
Type.ARRAY = "array";
Type.REGEX = "regexp";
Type.NUMBER = "number";
Type.BOOLEAN = "boolean";
Type.FUNCTION = "function";
Type.DATE = "date";
Type.UNDEFINED = "undefined";
Type.NULL = "null";
```
# Type Functions
### Type.isNull(value)
Check if value is nullable
```javascript
Type.isNull(null); // true
```
### Type.isObject(value)
Check if value is object
```javascript
Type.isObject({}); // true
Type.isObject([]); // true
```
### Type.isRegExp(value)
Check if value is regular expression object
```javascript
Type.isRegExp({}); // false
Type.isRegExp(/abc/i); // true
```
### Type.isDate(value)
Check if value is date object
```javascript
Type.isDate({}); // false
Type.isDate(new Date); // true
```
### Type.isFunction(value)
Check if value is function object
```javascript
Type.isFunction({}); // false
Type.isFunction(function () {}); // true
```
### Type.isArray(value)
Check if value is array object
```javascript
Type.isArray({}); // false
Type.isArray([]); // true
```
### Type.isNumber(value)
Check if value is number
```javascript
Type.isNumber(1); // true
Type.isNumber(NaN); // true
Type.isNumber([]); // false
```
### Type.isString(value)
Check if value is string
```javascript
Type.isString(1); // false
Type.isString(""); // true
```
### Type.isBoolean(value)
Check if value is boolean
```javascript
Type.isBoolean(1); // false
Type.isBoolean(true); // true
```
### Type.isUndefined(value)
Check if value is undefined
```javascript
Type.isUndefined(null); // false
Type.isUndefined(undefined); // true
```
### Type.isInitialized(value)
Check if value is initialized, null is not considered as initialized
```javascript
Type.isInitialized(null); // false
Type.isInitialized(undefined); // false
```
### Type.getType(value)
Get type of value
```javascript
Type.getType(null); // null
Type.getType(undefined); // undefined
Type.getType({}); // object
Type.getType([]); // array
```
### Type.assert(type, value)
Get type of value. Type should be valid type constant
```javascript
Type.assert(Type.NULL, null); // true
Type.assert(Type.OBJECT, undefined); // false
Type.assert(Type.OBJECT, {}); // true
Type.assert(Type.ARRAY, []); // true
```

