# Capacitor breaks Jest tests

This repository illustrates how Capacitor breaks tests done through Jest and how one might work around this in an Angular context using Injection Token.

Without the Injection Token workaround the tests will fail because Typescript will not be able to resolve capacitor dependencies.

The workaround for this illustrated here is to encapsulate the dependencies using Injection Token.

To see the initial problem:

```bash
git checkout git@github.com:HoverBaum/Capacitor-breaks-Jests-test.git
cs Capacitor-breaks-Jests-test
git checkout e70b5b106911b51973c83748fc3184208a30037b
npm i
npm test
```

Alternatively one could add a section to thier readme as well as stencil tot heir dependencies and use the stencil pre-processor. As illustrated in the "pre-processor" branch of this repository.