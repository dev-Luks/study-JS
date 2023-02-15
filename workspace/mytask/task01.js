    var tempTd;
	var tempText;
	function confirm() {
		var input = document.getElementById("choice").value;
		var datas = document.getElementsByClassName("data"); 
		var check = false;
		if(tempTd != undefined ) {
			tempTd.parentElement.style.background = "#fff";
			tempTd.innerHTML = tempText;
		}
		for(let i = 0; i < datas.length; i++ ){
			var td = datas[i].children[0]; 		
			if (input == td.innerHTML){		
				tempTd = td;
				tempText = td.innerHTML;		
				td.parentElement.style.background = "#ef5350";
				td.innerHTML = "★" + td.innerHTML;
				check = true;
				break;
			}
		}
		if(!check) {
			alert('다시 시도해주세요.');
			history.go(0);
		}
	}

// var elements = document.querySelector("input");
// 	var trElements = document.querySelectorAll("tr");
// 	var arText = ["아동","청소년","성인"];
// 	var arChangeText = ["★아동","★청소년","★성인"];
	
// 	function btn() {
		
// 		for(let i = 0 ; i&lt;3; i++){
// 			trElements.item(parseInt(i+1)).style.background = "white";
// 			trElements.item(parseInt(i+1)).children.item(0).innerHTML= arText[parseInt(i)];
// 		}
		
// 		switch (elements.value) {
// 		case "아동":
// 			elements.value="";
// 			trItem1.style.background = "red";
// 			trItem1.children.item(0).innerHTML = arChangeText[0];
// 			break;
			
// 		case "청소년":
// 			trItem2.style.background = "red";
// 			trItem2.children.item(0).innerHTML =  arChangeText[1]
// 			break;
		
// 		case "성인":
// 			trItem3.style.background = "red";
// 			trItem3.children.item(0).innerHTML = arChangeText[2];
// 			break;
		
// 		default:
// 			alert("다시 시도해주세요");
// 			break;
// 		}
// 		elements.value="";
// 	}
// 	console.log(arText);
// 	console.log(elements);
// 	console.log(trElements.item(1));