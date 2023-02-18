//QUESTION No.3

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing' 
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography'
let artsSubjects = 'Government, Economics, Literature, History'
let generalSubjects = 'English, Mathematics'

let studentGroup = 'ARTS';
if (studentGroup === 'SCIENCE'){
    console.log(generalSubjects + " " + scienceSubjects);
}   else if (studentGroup === 'ARTS'){
    console.log(generalSubjects + " " + artsSubjects);
}   else if (studentGroup === 'SOCIAL SCIENCES'){
    console.log(generalSubjects + " " + socialScienceSubjects);
}   else {
    console.log(generalSubjects);
}
//ANSWER --> English, Mathematics Government, Economics, Literature, History

//QUESTION NO.5
// program that takes a positive number (num) and finds the power of 2 nearest to that number. 

let num = 125;
for (i = 0; i < num; i++){
    if (2 ** i > num){
        break;
    }
}
console.log('The number 128 is the power of 2 nearest to' + " " + num)
/***
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 * 2^4 = 16
 * 2^5 = 32
 * 2^6 = 64
 * 2^7 = 128 <---- ANSWER
 */

