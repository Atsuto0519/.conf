#!/bin/sh

for i in "$@" ; 
do
    convert ${i} `echo "$i" | sed 's/\.[^\.]*$//'`.eps
done
