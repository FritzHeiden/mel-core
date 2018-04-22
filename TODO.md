# ToDo

## Download or Stream Tracks
Use http to transfer the track files

## webpack target
There appears to be no suitable target for pure JavaScript bundles.

- [Webpack Targets](https://webpack.js.org/concepts/targets/)
- [Maybe upcoming feature?](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4#d179)

Sticking with ```target: 'node'``` in the mean time.

# Done

## ID3 Reader
There are ID3 libraries available on npm. Better use of those than 
write one on my own. 

## polyfills
babel-polyfill can only be used in non tool/library modules.
The answer to that is [transform-runtime](https://babeljs.io/docs/plugins/transform-runtime).

The babel-loader necessarily needs ```exclude: /node_modules/```:
```js
{
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
}
```

## Relative path in node module
Find some way that allows to access module internal files relatively,
so the module folder can be moved around without path problems.

There is no way to do this yet. For now the web app is simply copied
to the mel-server's dist folder, where mel-core expects it to be.