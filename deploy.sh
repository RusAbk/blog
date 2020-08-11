#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

git init
git config user.email "rusabk@yandex.ru"
git config user.name "Ruslan Abkadirov"
git add -A
git commit -m 'deploy'

git push -f https://github.com/Ruslanabk/ruslanabk.github.io.git master

cd -
