# fuckport [![PyPI](https://img.shields.io/pypi/status/Django.svg?style=plastic)](https://github.com/uv-w/fuckport)
> Kill ports  
> Get an available port  
> Get ports's PIDS
>Cross platform

[![Build Status](https://travis-ci.org/uv-w/fuckport.svg?branch=master)](https://travis-ci.org/uv-w/fuckport)
[![npm version](https://badge.fury.io/js/fuckport.svg)](https://badge.fury.io/js/fuckport)
[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/fuckport/Lobby)  [![language](https://img.shields.io/badge/language-node-blue.svg)](https://img.shields.io/badge/language-swift-orange.svg)
[![issues](https://img.shields.io/github/issues/uv-w/fuckport.svg)](https://github.com/uv-w/fuckport/issues)
[![forks](https://img.shields.io/github/forks/uv-w/fuckport.svg)](https://github.com/uv-w/fuckport/network)
[![stars](https://img.shields.io/github/stars/uv-w/fuckport.svg)](https://github.com/uv-w/fuckport/stargazers)
[![license](https://img.shields.io/badge/license-GPL-blue.svg)](https://raw.githubusercontent.com/uv-w/fuckport/master/LICENSE)

## Rationale

* List port info :  

	$ `lsof -i :<port>` for Unix  
	$ `netstat -ano|findstr "<port>"` for Windows

* Kill pid :  

  $ `kill -9 <pid>` for Unix  
	$ `taskkill /F /pid "<pid>"` for Windows


## Installation

	$ npm i --save fuckport

## Usage

```js

const fuckport = require('fuckport')

//获取一个随机可用的端口
funckport.getPort().then(port => console.log(port))
//=>eg: 3000

//获取一个可用端口，优先返回传入的端口（如果已被占用则返回一个随机可用端口）
funckport.getPort(8080).then(port => console.log(port))
//=>eg: 8080 or 3000 ...

//获取一个可用端口，返回传入的端口(如果占用中则kill掉)
funckport.getPort(8080, true).then(port => console.log(port))
//=>eg: 8080

//获取一组端口的对应pid信息，返回pid数组(未被占用返回-1)
funckport.getPortsPids([8080, 8089, 3000]]).then(pids => console.log(pids))
//=>eg: [43533, -1, 34556]


//解除一组端口的占用 返回pid数组
funckport.killPorts([8080, 8089, 3000]]).then(pids => console.log(pids))
//=>eg: [ -1, -1, 536 ]
```
## Test
	$ npm test

## Commit
	$ npm run commit 'a test commit msg' && git push

## License
LGPL
