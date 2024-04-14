import ky from 'ky';

 
const kyClient = ky.create({
	 headers:{},
     prefixUrl: "https://api.giphy.com/v1/"
   
});

export default kyClient