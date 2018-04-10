/* compare two objects even from different reference */  
function objCompare (obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (const key in obj1) {
      	if (obj2[key] === undefined) return false;
     	else {
    		if (typeof obj1[key] === 'string') {
              	if (obj1[key].toLowerCase() === obj2[key].toLowerCase()) return true;
    		} 
			else if (typeof obj1[key] === 'number' || typeof obj1[key] === 'boolean') {
      			if (obj1[key] === obj2[key]) return true;
    		} 
            else if (typeof obj1[key] === 'object') return this.objCompare(obj1[key], obj2[key]);
            else if (Array.isArray(obj1[key])) return this.objCompare(this.convertToObj(obj1[key]), this.convertToObj(obj2[key]));
  		}
    }
}


/* convert array to object */
function convertToObj(arr) {
	var obj = {};
	arr.forEach((item, index) => obj[index] = item);
	return obj;
}
