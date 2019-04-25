/*section*/
var oldTab = "main-section-1";
var oldMem = "mem-01";

function showTab(val) {
  var obj1 = document.getElementById(oldTab);
  obj1.style.display = "none";

  var obj2 = document.getElementById(val);
  obj2.style.display = "block";
  oldTab = val;
}

function onMem(val2) {
  var mem1 = document.getElementById('oldMem');
  mem1.className = "btn-sec-roll"

  var mem2 = document.getElementById(val2);
  mem2.className = "btn-sec-roll-on";
  oldMem = val2;
}

function showID(id) {

obj = document.getElementById(id);

if(obj.style.display == "none")
  obj.style.display = "block";
else
  obj.style.display = "none";
}

function mouseOut(obj) {
obj.style.display = "none"
}

function mouseOver(obj) {
obj.style.display = "block"
}



function chgIndex1() {
	document.getElementById('box-1r').style.zIndex = 1;
	document.getElementById('box-2r').style.zIndex = -1;
	document.getElementById('box-3r').style.zIndex = -1;
}

function chgIndex2() {
	document.getElementById('box-1r').style.zIndex = -1;
	document.getElementById('box-2r').style.zIndex = 1;
	document.getElementById('box-3r').style.zIndex = -1;
}

function chgIndex3() {
	document.getElementById('box-1r').style.zIndex = -1;
	document.getElementById('box-2r').style.zIndex = -1;
	document.getElementById('box-3r').style.zIndex = 1;
}