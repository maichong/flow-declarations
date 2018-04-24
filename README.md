# flow-declarations

High quality type declarations for flow.js.



## Install

```bash
npm install --save-dev flow-declarations
```



## Usage

Edit your `.flowconfig` , add declarations directory to the `libs` , for example

```
[ignore]
.*/build/.*
.*/dist/.*
.*/node_modules/.*

[libs]
node_modules/flow-declarations/koa
node_modules/flow-declarations/koa-router
node_modules/flow-declarations/lodash
node_modules/flow-declarations/socket.io

[options]
esproposal.export_star_as=enable

```





## Contribute

[Maichong Cloud](https://maichong.io)

[Liang Xingchen](https://github.com/liangxingchen)

## License

This project is licensed under the terms of the MIT license
