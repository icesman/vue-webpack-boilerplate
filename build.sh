npm run build

rm -rf ../static

mv static ../

cd ../

mv static/*.html templates/
