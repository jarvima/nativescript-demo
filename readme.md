NativeScript readme
===================

## First thoughts
- setup and get going docs good
- no docs on absolute layout
- comprehensive docs lacking
- is it good for gaming?

- installation is huge - takes forever - including homebrew and java jdk
- ran setup
- had error: You need to have Android SDK 22 or later and the latest Android Support Repository installed on your system.
- ran setup again
- still had error
- installed Android Studio
- started getting this error: Cannot resolve the specified connected device by the provided index or identifier. To list currently connected devices and verify that the specified index or identifier exists, run 'tns device'.
- `tns device` shows no devices
- ran `tns update` to upgrade to 3.1.3
- still getting same error
- needed to install android device through Android Studio to get it to work

## Get up and running
- npm install -g nativescript
- tns run android
- tns run ios

## Debugging
`tns debug ios` opens NativeScript Inspector - looks Safari based
couldn't get debug ios to run in Chrome

## Interesting observations
tried to set up custom component - wouldn't display - segmentation fault error
- custom component tag apparently needs to be inside of a layout container

------
tap event bindings not set up if the element isn't visible `tap="someAction"`
set up in `onNavigatedTo`:
```javascript
  btn.on(buttonModule.Button.tapEvent, viewModel.someAction);
```
Nvm, components tap diffent than pages tap.
```xml
  tap="someAction"
```
versus
```xml
  tap="{{ someAction }}"
```

------------
Xcode updated
tns run ios stopped working
had to restart and then launch Xcode to get updates
tns run ios brought up iPhone X
to get iPhone 6
`tns device ios --available-devices`
`tns debug ios --device 4B14AD8D-BB63-4565-919C-B20B1143C28C`
kill process ctrl+Z
`tns debug ios` -- finally debugging iPhone 6 like before


-------------------
Looks like there is more to application.start than just module name.
`main-page` is set up in several config files.
```
  application.start({ moduleName: "main-page" })
```

## Modules
Useful for sharing code and data
Make `require` paths relative to current directory.

Unlike other JavaScript modules:
Just `exports` not `module.exports`.
Does not work:
```javascript
  exports = { foo: foo }; // failure: foo is not a function
```
Does work:
```javascript
  exports.foo = foo;
  exports.bar = bar;
```

## http
response example:
```javascript
  {
    content: {
      raw: NSData,
      toFile: function,
      toImage: function,
      toJSON: function,
      toString: function
    },
    headers: {
      Content-Type: "application/json; charset=utf-8"
    },
    statusCode: 200
  }
  
  // common usage
  var result = response.content.toJSON();
```

## Research
- getViewById