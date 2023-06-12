rm -rf dist &&
###
 # @Author: your Name
 # @Date: 2022-12-07 15:26:27
 # @LastEditors: your Name
 # @LastEditTime: 2023-06-12 09:52:55
 # @Description: 
### 
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update deploy' &&
git remote add origin git@github.com:songwen02/mini-el.git &&
git branch -m main &&
git push -f -u origin main &&
cd ..