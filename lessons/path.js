const path = require('path');

console.log('склеить участки пути', path.join(__dirname, '..'));
const fullpath = path.resolve(__dirname, 'first', 'second', 'third');

console.log('Parsing', path.parse(fullpath))
console.log('Разделитель в ОС: ', path.sep)
console.log('check for absalute path: ', path.isAbsolute('first/second'))
console.log('file name: ', path.basename(fullpath));
console.log('file extension: ', path.extname(fullpath))


//-----------------------------------------------------------------------------------------

const siteURL = 'http://localhost:5000/users?id=5153'

const url = new URL(siteURL);

console.log(url)