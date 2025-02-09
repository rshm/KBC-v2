[//]: # (npm run electron)


[//]: # generate dist() and build
npm run electron:build

To ensure your native dependencies are always matched electron version, simply add script `"postinstall": "electron-builder install-app-deps" to your `package.json`
