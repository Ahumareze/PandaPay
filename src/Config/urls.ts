const apiKey = 'AIzaSyAQamIcZTH6mKFVSpALwYCqs5Ymtgbidmg';
const signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey;
const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiKey;

const dataBaseUrl = 'https://pandapay-26396-default-rtdb.firebaseio.com/';

export {apiKey, loginUrl, signupUrl, dataBaseUrl};