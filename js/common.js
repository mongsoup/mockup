/*메인 롤링 영역 탭메뉴*/
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



// Get the modal
var modal = document.getElementById('myModal');
 
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
 
// Get the <span> element that closes the modal
var spanx = document.getElementsByClassName("close")[0];                                          
 
// When the user clicks on the button, open the modal 
btn.onclick = function() {
            modal.style.display = "block";
}
 
// When the user clicks on <span> (x), close the modal
spanx.onclick = function() {
            modal.style.display = "none";
 }
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
 }
  