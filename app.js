// listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);
document.getElementById('results-form').addEventListener('submit', clearResults);


function calculateResults(e){

  // UI varibles
  const UIamount =  document.getElementById('amount');
  const UIinsterest =  document.getElementById('insterest');
  const UIyears = document.getElementById('years');

  const UImonthly = document.getElementById('monthly-payment');
  const UItotalpayment = document.getElementById('total-payment');
  const UItotalinterest = document.getElementById('total-interest');

  // point to the value of the amount, insterest and years (in float)
  const principal = parseFloat(UIamount.value);
  const calcinsterest = parseFloat(UIinsterest.value) / 100 / 12;
  const calcpayment = parseFloat(UIyears.value) * 12;

  //compute the monthly payment
  const x= Math.pow(1+calcinsterest, calcpayment);
  const monthly = (principal*x*calcinsterest) /(x-1);

  if(isFinite(monthly)){
    //tofix cahnge it to decimal with 2 number after point
    UImonthly.value= monthly.toFixed(2); // display the results in monthly payment box 
    UItotalpayment.value = (monthly* calcpayment).toFixed(2);
    UItotalinterest.value =((monthly * calcpayment)-principal).toFixed(2);
    document.getElementById('results').style.display='block';
  }else{
    errorFunc('please check your numbers');
  }
  
  e.preventDefault();

}

function clearResults(e){

  const UIamount1 =  document.getElementById('amount');
  const UIinsterest1 =  document.getElementById('insterest');
  const UIyears1 = document.getElementById('years');

  UIamount1.value="";
  UIinsterest1.value="";
  UIyears1.value="";
 document.getElementById('results').style.display='none';
 e.preventDefault(); 
}

//show error alert
function errorFunc(er){
  document.getElementById('alertbox').style.display='block';
  setTimeout(clearError, 4000);

}

//hide the alert
function clearError(){
  document.getElementById('alertbox').style.display='none';
}