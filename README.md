# Fetch Readme 📖

Fetch a raw readme.md from a public github repository.

[![npm (scoped)](https://img.shields.io/npm/v/@varandas/fetch-readme.svg)](https://www.npmjs.com/package/@varandas/fetch-readme)
[![npm](https://img.shields.io/npm/dm/@varandas/fetch-readme.svg)](https://npmcharts.com/compare/@varandas/fetch-readme)

[![Build Status](https://travis-ci.org/AndreVarandas/fetch-readme.svg?branch=master)](https://travis-ci.org/AndreVarandas/fetch-readme)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/AndreVarandas/fetch-readme/master.svg?style=flat-square)](https://codecov.io/gh/AndreVarandas/fetch-readme/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Green Keeper](https://badges.greenkeeper.io/andrevarandas/fetch-readme.svg?style=flat)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AndreVarandas/fetch-readme/blob/master/LICENSE)

### Install

With Yarn
- `yarn add @varandas/fetch-readme`

With npm
- `npm i --save @varandas/fetch-readme` 

### Usage

```javascript
// Usage for commonjs
const { fetchReadme } = require('@varandas/fetch-readme');

fetchReadme({
  username: 'Microsoft',
  repository: 'TypeScript'
}).then(readme => console.log(readme));

// OR ES2015
import { fetchReadme } from '@varandas/fetch-readme'

(async () => {
  const readme = await fetchReadme({
    username: 'Microsoft',
    repository: 'TypeScript'
  })
  console.log(readme)  
})()
```

### Configuration Options

Both username and repository properties are required.
`branch` defaults to `master` and `readme` to `README.md`.

```javascript
const config = {
    username: 'andrevarandas',
    repository: 'the-repository-name',
    branch: 'develop',
    readme: 'readme.md'
}
```

**Note** The readme file name is case sensitive.

[LICENSE - MIT - André Varandas](LICENSE)
