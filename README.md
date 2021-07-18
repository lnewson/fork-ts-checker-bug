# fork-ts-checker-webpack-plugin workspaces bug

## How to reproduce

1. Run `yarn` to install packages and setup the workspace.
2. Run `yarn dev` to start webpack
3. Edit `packages/a/src/index.ts` and change the `change me` text to anything.

Upon doing the above, you'll end up with an exception like so:
```
/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:2479
            throw e;
            ^

Error: Debug Failure. False expression: /private/tmp/fork-ts-checker-bug/node_modules/my-b-project/lib/index.d.ts linked to nonexistent file /private/tmp/fork-ts-checker-bug/packages/b/lib/index.d.ts
    at realPath (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:40897:18)
    at tryResolve (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:40874:32)
    at /private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:40857:69
    at Object.forEach (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:384:30)
    at nodeModuleNameResolverWorker (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:40857:25)
    at nodeModuleNameResolver (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:40849:16)
    at Object.resolveModuleName (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:40620:30)
    at loader_3 (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:116478:99)
    at Object.loadWithLocalCache (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:109259:42)
    at Object.compilerHost.resolveModuleNames (/private/tmp/fork-ts-checker-bug/node_modules/typescript/lib/typescript.js:116480:27)
RpcIpcMessagePortClosedError: Process 21927 exited with code "1" [null]
```
