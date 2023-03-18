// function saturdayFun(){

// }


function saturdayFun(activity ='roller-skate') {
    return `This Saturday, I want to ${activity}!`
   }
   saturdayFun();
   saturdayFun('bathe my dog');


//    Func
// const work = function mondayWork() {

//    }

function mondayWork(activity="go to the office") {
       return `This Monday, I will ${activity}.`
   }
   mondayWork();
   mondayWork("work from home");


//    WrapAdject fun
function wrapAdjective(string="*") {
  return function(parameter="special") {
    return `You are ${string}${parameter}${string}!`
  }
}
