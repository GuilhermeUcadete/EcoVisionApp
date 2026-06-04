export const API_URL = "https://api.ecovisionai.com";

export async function getEnvironmentalData(){

try{

const response = await fetch(API_URL);

const data = await response.json();

return data;

}catch(error){

console.log(error);

}

}