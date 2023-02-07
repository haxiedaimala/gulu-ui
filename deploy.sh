rm -rf dist &&
yarn build:website &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:haxiedaimala/vue-gulu-UI.git &&
git push -f -u origin main &&
cd -
echo https://haxiedaimala.github.io/vue-gulu-UI/index.html