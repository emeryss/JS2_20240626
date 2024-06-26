// Problem 1
let input1 = document.getElementById("input1");
let inputButton1 = document.getElementById("inputButton1");
let output1 = document.getElementById("output1");

inputButton1.addEventListener("click", output1_display)
input1.addEventListener("focus", function(){input1.value=""});

function output1_display() {
    let a = input1.value;
    if(!Number(a)==true && a!=0){
        output1.textContent = "숫자를 입력하세요"
    }else if(a<0){
        output1.textContent = "음수"
    }else if(a==0){
        output1.textContent = "0"
    }else{
        output1.textContent = "양수"
    }
    console.log("input1", a)
    return
}

// Problem 2
let input2 = document.getElementById("input2");
let inputButton2 = document.getElementById("inputButton2");
let output2 = document.getElementById("output2");

inputButton2.addEventListener("click", output2_display)
input2.addEventListener("focus", function(){input2.value=""})

function output2_display(){
    let a = input2.value;
    console.log("문제2 입력값:", a)
    console.log("datatype", !Number(a))
    if (!Number(a)==true && a!=0) {
        output2.textContent = "숫자를 입력하세요"
    }else if (a<0 || a>100){
        output2.textContent = "점수를 0이상, 100이하를 입력해주세요"
    }else if(a>=90){
        output2.textContent = "A"
    }else if(a>=80){
        output2.textContent = "B"
    }else if(a>=70){
        output2.textContent = "C"
    }else if(a>=60){
        output2.textContent = "D"
    }else {
        output2.textContent = "F"
    }
}

// Problem 3
let skill_list = [1,1,0,0];
let checkbox_HTML = document.getElementById("check_HTML")
let checkbox_CSS = document.getElementById("check_CSS")
let checkbox_Javascript = document.getElementById("check_Javascript")
let checkbox_React = document.getElementById("check_React")
let checkButton = document.getElementById("checkButton")
let output3 = document.getElementById("output3")

checkButton.addEventListener("click", check)

function check (){
    // console.log("HTML", checkbox_HTML.checked)
    // console.log("CSS", checkbox_CSS.checked)
    // console.log("Javascript", checkbox_Javascript.checked)
    // console.log("React", checkbox_React.checked)
    skill_list = []
    if (checkbox_HTML.checked == true){skill_list.push("HTML")}
    if (checkbox_CSS.checked == true){skill_list.push("CSS")}
    if (checkbox_Javascript.checked == true){skill_list.push("Javascript")}
    if (checkbox_React.checked == true){skill_list.push("React")}
    console.log ("skill_list Array", skill_list)

    if (skill_list.includes("HTML")==false || skill_list.includes("CSS")==false){
        output3.textContent="HTML과 CSS 다시 공부하고 오세요"
    }else if (skill_list.includes("Javascript")==true && skill_list.includes("React")==true){
        output3.textContent="합격"
    }else if (skill_list.includes("Javascript")==false && skill_list.includes("React")==false){
        output3.textContent="탈락"
    }else {
        output3.textContent="예비"
    }
}

// function check (){
//     // console.log("HTML", checkbox_HTML.checked)
//     // console.log("CSS", checkbox_CSS.checked)
//     // console.log("Javascript", checkbox_Javascript.checked)
//     // console.log("React", checkbox_React.checked)
//     if (checkbox_HTML.checked == true){skill_list[0]=1}else{skill_list[0]=0}
//     if (checkbox_CSS.checked == true){skill_list[1]=1}else{skill_list[1]=0}
//     if (checkbox_Javascript.checked == true){skill_list[2]=1}else{skill_list[2]=0}
//     if (checkbox_React.checked == true){skill_list[3]=1}else{skill_list[3]=0}
//     console.log ("skill_list Array", skill_list)

//     if (skill_list[0]==0 || skill_list[1]==0){
//         output3.textContent="HTML과 CSS 다시 공부하고 오세요"
//     }else if (skill_list[2]==1 && skill_list[3]==1){
//         output3.textContent="합격"
//     }else if (skill_list[2]==0 && skill_list[3]==0){
//         output3.textContent="탈락"
//     }else {
//         output3.textContent="예비"
//     }
// }