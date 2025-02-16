[//]: # (npm run electron)

# Clean up directory before build
rm -rf build dist

# Generate installable file in windows
npm run electron:build

To ensure your native dependencies are always matched electron version, simply add script `"postinstall": "electron-builder install-app-deps" to your `package.json`
