# React-Component-Starter
> Starter project for released React components

[![Travis](https://img.shields.io/travis/aurbano/react-component-starter.svg)](https://travis-ci.org/aurbano/react-component-starter)
[![npm](https://img.shields.io/npm/v/react-cs.svg)](https://www.npmjs.com/package/react-cs)
[![Coverage Status](https://coveralls.io/repos/github/aurbano/react-component-starter/badge.svg?branch=master)](https://coveralls.io/github/aurbano/react-component-starter?branch=master)
[![npm](https://img.shields.io/npm/dm/react-cs.svg)](https://www.npmjs.com/package/react-cs)
[![npm](https://img.shields.io/npm/l/react-cs.svg)](https://www.npmjs.com/package/react-cs)
[![Codacy grade](https://img.shields.io/codacy/grade/7e026955dc4549aa85b38cdb70c92c04.svg)](https://www.codacy.com/app/aurbano/react-component-starter)

This is a template for releasing React components. It contains configuration for testing, building, and setting up an example page.

## Getting started

Download this repository into yours, and replace all mentions of `react-component-starter` and `react-cs` with the name of your npm package.

Place your component source files in `src/`, and make sure that the main component file is called `index.js`.

## Testing

Tests can be added as necessary to the `test/` directory, there is an example one provided already.

Everything is configured already to send coverage reports to `codacy` and `coveralls`, so all you need is to go to their website and add the repository.

For codacy you'll need to add the `CODACY_PROJECT_TOKEN` env variable to your `.travis.yml` file:

```console
$ travis encrypt CODACY_PROJECT_TOKEN={token here} --add
```

## Building

All the build steps have been set into the following:

```console
$ npm run build
```

This will run the source through Babel, remove flow types (and generate the appropriate `.flow.js` files) and place everything in the `dist` folder. It will also minify your `index.js` file for disting.

If you have multiple files you want minified you'll have to change the `build:minify` script in your `package.json` file.

## Example page

One of the biggest time saving features (for me at least) is a pre-configured example page. Just place anything you want in `example/app` and it will be built using `create-react-app`.

To deploy that to `gh-pages` simply run `npm run deploy` (this will build your example app first as well).
