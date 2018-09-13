#!/bin/bash

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'teamlck.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://norux:d7845cfd2c430cb8231a574dfb25ee09325bdcaa@github.com/teamlck/teamlck.github.io master

cd -

