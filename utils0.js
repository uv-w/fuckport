/**
 * Utils
 * Created by uv-w on 2017/5/2.
 **/
const execa = require('execa')
const cli_color = require('cli-color')
const _ = require('lodash')

module.exports = {
  execa
  ,cli_color
  ,_
  ,is_window: process.platform == 'win32'
  ,valid_port: port => /^(0|[1-9]\d*)$/.test(port) && port <= 65535


}