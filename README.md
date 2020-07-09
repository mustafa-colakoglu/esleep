# esleep

Easy sleep function

## Installing

npm install esleep

## Usage

```javascript
const esleep = require("esleep");
(async () => {
  const now = Date.now();
  await esleep(1000);
  console.log(Date.now() - now);
})();
```
