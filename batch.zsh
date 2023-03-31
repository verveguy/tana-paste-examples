#!/bin/zsh

set -x
for file in ~/Downloads/reflect-markdown/Calendar/*
do
    name=$(basename ${file})
    node ./reflect.mjs < ${file} > processed/Calendar/${name}
done
