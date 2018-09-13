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

git push -f https://github.com/teamlck/teamlck.github.io master

cd -

