//Calculate Tip Function
function calculateTip(){
    var billAmt = document.getElementById("billamt").value; // value ค่าที่เรากรอกเข้าไป billAmtนี้คือ id หน้า HTML
    var serviceQual= document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("propleamt").value;
//สร้างตัวแปลแล้ว get id เข้ามาเรียบร้อย

    if(billAmt == "" || serviceQual == 0 ){
        alert("Please enter values");
        return;
    }
    //เช็ค input
    if(numOfPeople==""|| numOfPeople>=1){
        numOfPeople =1;
        document.getElementById("each").style.display ="none";
    }else{
        document.getElementById("each").style.display="ิblock";
    }
    // คำนวณแล้ว
    var total = (billAmt * serviceQual) / numOfPeople;
    total=Math.round(total*100) / 100;
    total=total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML=total;

}
document.getElementById("totalTip").style.display="none"
document.getElementById("each").style.display="none"

// Click to call function
document.getElementById("calculate").onclick = function(){
    calculateTip();

};