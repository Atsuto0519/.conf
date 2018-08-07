#!/bin/sh

convert $1 `sed 's/\.[^\.]*$//' $1`
