./node_modules/.bin/node-sass style.scss -o . -w &
./node_modules/.bin/pug -o . -w index.pug &
./node_modules/.bin/browser-sync -s -f "*.html,*.css"
