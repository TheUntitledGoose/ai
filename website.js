var textBox = document.createElement('div');
textBox.style.width = '300px';
textBox.style.height = '300px';
textBox.style.borderRadius = '15px';
textBox.style.backgroundColor = '#FFFFFF';
textBox.style.position = 'absolute';
textBox.style.top = '50%';
textBox.style.left = '50%';
textBox.style.marginTop = '-150px';
textBox.style.marginLeft = '-150px';
textBox.style.textAlign = 'center';
textBox.style.verticalAlign = 'middle';
textBox.style.lineHeight = '300px';
textBox.style.fontSize = '30px';
textBox.innerHTML = '15:30';
document.body.appendChild(textBox);
textBox.contentEditable = true;
textBox.style.width = '150px';
textBox.style.height = '150px';
textBox.style.marginTop = '-75px';
textBox.style.marginLeft = '-75px';
textBox.style.lineHeight = '150px';
textBox.style.fontSize = '15px';
textBox.style.fontSize = '30px';
textBox.style.lineHeight = '30px';
var button = document.createElement('button');
button.innerHTML = 'Click me';
button.style.position = 'absolute';
button.style.top = '65%';
button.style.left = '50%';
button.style.marginTop = '-75px';
button.style.marginLeft = '-75px';
button.style.width = '150px';
button.style.height = '30px';
button.style.lineHeight = '30px';
button.style.fontSize = '15px';
button.style.borderRadius = '15px';
button.style.backgroundColor = '#FFFFFF';
button.style.border = 'none';
button.style.cursor = 'pointer';
document.body.appendChild(button);
textBox.addEventListener('keypress', function(e) {
  var key = e.which || e.keyCode;
  if (key === 8 || key === 46) {
    return true;
  }
  var regex = /[0-9]|:/;
  var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(key)) {
    e.preventDefault();
    return false;
  }
});
var text = document.createElement('div');
text.innerHTML = 'Hello World';
text.style.position = 'absolute';
text.style.top = '0';
text.style.left = '0';
text.style.width = '100%';
text.style.height = '30px';
text.style.lineHeight = '30px';
text.style.fontSize = '15px';
text.style.textAlign = 'center';
text.style.backgroundColor = '#FFFFFF';
document.body.appendChild(text);
text.style.height = '60px';
text.style.lineHeight = '60px';
text.style.fontSize = '30px';
button.addEventListener('click', function() {
  var time = textBox.innerHTML;
  var timeArray = time.split(':');
  var hours = parseInt(timeArray[0]);
  var minutes = parseInt(timeArray[1]);
  var seconds = parseInt(timeArray[2]);
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var hoursDiff = currentHours - hours;
  var minutesDiff = currentMinutes - minutes;
  if (minutesDiff < 0) {
    minutesDiff += 60;
	}
	if(hoursDiff < 0 ) {
    hoursDiff -= 1;
  }
  if (hoursDiff < 0) {
    hoursDiff += 24;
  }
  text.innerHTML = hoursDiff + ':' + minutesDiff;
});
button.style.backgroundColor = '#333333';
button.style.color = '#FFFFFF';
document.body.style.backgroundColor = '#525252';
textBox.style.backgroundColor = '#727272';
textBox.style.color = '#FFFFFF';
textBox.style.textAlign = 'center';
textBox.style.top = '50%';
textBox.style.left = '50%';
textBox.style.marginTop = '-75px';
textBox.style.marginLeft = '-75px';
textBox.style.lineHeight = '150px';
text.style.backgroundColor = '#727272';
text.style.boxShadow = '0px 5px 5px #656565';
text.style.color = '#FFFFFF';