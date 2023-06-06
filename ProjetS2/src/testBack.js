import { ListJeux } from './backend.js';

try {
const records = await ListJeux();
console.log(records);
} catch (e) {
console.error(e) ;
}