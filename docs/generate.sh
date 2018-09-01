#!/bin/bash
path=$(dirname "$0")
cd $path
jsdoc -c config.json --verbose
