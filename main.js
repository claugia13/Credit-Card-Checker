// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
 
let validateCred = array => { // beginning of function validateCred => should return true or false
const reversedArray = array.reverse();
  let newArray = [];
  for (i=0; i<reversedArray.length; i++ ){
      let n = reversedArray[i];
        if(i%2 != 0) { 
         n = reversedArray[i] * 2;
        if(n>9) {
        n = n-9; 
        }
        }
         newArray.push(n);
  } // end of for loop 

let reversedNewArray = newArray.reverse();
 //console.log('reversedNewArray: ' + reversedNewArray);
const summedArray = reversedNewArray.reduce((total, currentValue) => total + currentValue);
 //console.log('Summed Array: ' + summedArray); 
let remainder = summedArray%10;
if (remainder === 0){
  return true;
  //console.log('This IS a valid credit card number.');
} else {
  return false;
  //console.log('This is NOT a valid credit card number.');
}
}; // end of validateCred() function


/**** start of findInvalidCards function / should return another array of invalid card numbers ****/

let invalidCards = []; // initialize empty array invalidCards
let findInvalidCards = nestedArray => {
nestedArray.map(singleArray => {
  if (validateCred(singleArray) === false){
    invalidCards.push(singleArray);
  }
}) // end of callback function
return invalidCards;
} // end of findInvalidCards() function
findInvalidCards(batch); // call function
//console.log(findInvalidCards(batch));

/**** start of idInvalidCardCompanies function / accepts one paramater for a nested array of invalid numbers and returns an array of companies ****/

const invalidCardCompanies = [];
const idInvalidCardCompanies = nestedArray => {
  nestedArray.map(singleArray => {
switch (singleArray[0]){
  case 3:
 invalidCardCompanies.push('Amex');
 break;
 case 4:
 invalidCardCompanies.push('Visa');
break;
case 5:
invalidCardCompanies.push('Mastercard');
break;
case 6:
invalidCardCompanies.push('Discover');
break;
default:
 invalidCardCompanies.push('Company not found');
 break;
}// end of switch statement
})
//invalidCardCompanies array should now contain all names of invalid Card Companies including duplicates

const invalidCardCompaniesList = [];
// this array will contain names of invalid Card Companies excluding duplicates after executing steps below

if (invalidCardCompanies.includes('Amex') === true)
{invalidCardCompaniesList.push('Amex')};

if (invalidCardCompanies.includes('Visa') === true)
{invalidCardCompaniesList.push('Visa')};

if (invalidCardCompanies.includes('Mastercard') === true)
{invalidCardCompaniesList.push('Mastercard')};

if (invalidCardCompanies.includes('Discover') === true)
{invalidCardCompaniesList.push('Discover')};

if (invalidCardCompanies.includes('Company not found') === true)
{invalidCardCompaniesList.push('Company not found')};

return invalidCardCompaniesList;

} // end of idInvalidCardCompanies function
idInvalidCardCompanies(invalidCards);
console.log(idInvalidCardCompanies(invalidCards));





