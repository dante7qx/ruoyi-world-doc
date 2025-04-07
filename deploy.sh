#! /bin/bash

source="./docs/.vuepress/dist"
target="/Users/dante/Documents/Project/blog-world/dante7qx.github.io"

npm run build

rm -rf $target/*
mv $source/* $target/
rm -rf $source

cd $target
git add .
git ci -a -m "修改文档"
git push -u origin main

