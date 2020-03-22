const caesar = function(msg, shift) {
	let result = "";
	let asciiCode = "";
	for (let i=0;i<msg.length;i++){
		asciiCode = msg.charCodeAt(i);
		if (checkCapitalization(asciiCode) === -1 ){
			result += msg[i];
			continue;
		}
		
		result += String.fromCharCode(asciiCode + shift);
	}
	return result;
}

const checkCapitalization = function(charCode){
 if(charCode >= 65 && charCode <=90){
	return true;
 }
 else if(charCode>=97 && charCode <=122){
	return false;
 }
 else {
	 return -1
 }
}
module.exports = caesar
