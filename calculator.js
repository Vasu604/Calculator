let disp=document.getElementById('display');

let keys=(num)=>{
    disp.value+=num;
    
}

let calculate=()=>{
    try {
        disp.value=eval(disp.value);
    } 
    catch (error) {
        alert("Enter valid values");
    } 
}

let clr=()=>{
    disp.value=" ";
}

let back=()=>{
    disp.value=disp.value.slice(0,-1);
}

let sqrt=(num)=>{
    disp.value=(disp.value*disp.value);
}


function clock(){
    let clock=new Date();
    let hour=clock.getHours();
    console.log(hour);
    document.getElementById('hrs').innerHTML=hour;

    let min=clock.getMinutes();
    document.getElementById('mins').innerHTML=min;

    let sec=clock.getSeconds();
    document.getElementById('secs').innerHTML=sec;


    let yr=new Date();
    let years=yr.getFullYear();
    document.getElementById('year').innerHTML=years;

    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

    let months=new Date;
   let mon=month[months.getMonth()];
    document.getElementById('month').innerHTML=mon;

    let day=new Date().getDate();
    document.getElementById('date').innerHTML=day;
}
setInterval(clock,1000);


