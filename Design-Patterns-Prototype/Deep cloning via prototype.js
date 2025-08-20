function cloneDeep(obj){
   return JSON.parse(JSON.stringify(obj));
}
const original = { user: 'joão', config: {dark: true}};
const clone = clone = cloneDeep(original);
clone.config.dark = false;
console.log(original.config.dark);