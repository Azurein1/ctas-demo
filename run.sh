echo ">>> git pull"
git pull

echo ">>> npm install"
npm install

echo ">>> ng build --prod"
ng build --prod

echo ">>> cd dist"
cd dist

echo ">>> rm -rf /usr/src/nginx/html/nspm/"
rm -rf /usr/src/nginx/html/nspm/
echo ">>> cp -r nspm/ /usr/src/nginx/html/nspm/"
cp -r nspm/ /usr/src/nginx/html/nspm/
echo ">>> nginx -s reload"
nginx -s reload

