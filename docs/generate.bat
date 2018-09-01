@echo off
cd %~dp0
jsdoc -c config.json --verbose --readme ../README.md