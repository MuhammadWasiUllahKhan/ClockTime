setInterval(() => {
    let sec=document.getElementById("sec");
    let min=document.getElementById("min");
    let hrs=document.getElementById("hrs");
    
    let CurrentTime = new Date();
    hrs.innerHTML=CurrentTime.getHours();
    min.innerHTML=CurrentTime.getMinutes();
    sec.innerHTML=CurrentTime.getSeconds();
   
    }, 1000);
     setInterval(() => {
        let day=document.getElementById("day")
        let month=document.getElementById("month")
        let year=document.getElementById("year")
        let CurrentTime = new Date();

        day.innerHTML=CurrentTime.getDate();
        month.innerHTML=CurrentTime.getMonth();
        year.innerHTML=CurrentTime.getFullYear();
     }, 1000);
function Rose(){
   let r=document.getElementById("CT")
   if(r.style.display!="none"){
      r.style.display="none"
   }
   else{
      r.style.display="flex"
   }
}
