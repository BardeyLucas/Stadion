import { ListJeux } from './backend.mjs';

try {
const records = await ListJeux();
console.log(records);
} catch (e) {
console.error(e) ;
}