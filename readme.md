# detect-ms-browser

Microsoft browser version detection in JavaScript

[![npm version](https://img.shields.io/npm/v/detect-ms-browser.svg)](https://www.npmjs.com/package/detect-ms-browser)

## Install

```bash
npm install detect-ms-browser
```

## Usage

```js
const detect = require("detect-ms-browser");

console.log(detect);
// { isMS: true, isIE: true, isEdge: false, version: 9 }
```

## Tips

Not including `IE Mobile` and `Edge Mobile`.
