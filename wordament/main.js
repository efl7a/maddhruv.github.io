function def(){
		var colors=[' red-text', ' green-text', ' blue-text', ' pink-text', ' purple-text', ' deep-purple-text', ' light-blue-text', ' amber-text', ' yellow-text', ' orange-text darken-3', ' brown-text', ' lime-text', ' teal-text', ' cyan-text', ' indigo-text'];

		var randColor1 = colors[Math.floor(Math.random()*colors.length)];
		var one = document.getElementById('one');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		two = document.getElementById('two');
		two.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('three');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('four');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('five');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('six');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('seven');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('eight');
		one.className += randColor1;

		randColor1 = colors[Math.floor(Math.random()*colors.length)];
		one = document.getElementById('nine');
		one.className += randColor1;


	}


function getEl(id, value){
    document.getElementById(id).innerHTML += (value);
  }

function mlsb(ml, sp){
	alert(ml);
	var url = "https://api.datamuse.com/words?ml="+ml+"&sp="+sp+"*&max=10";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readState === 4){
			var status = xhr.status;
			if((status>=200 && status<300) || status === 304){
				var response = JSON.parse(xhr.responseText);
				for(var i=0; i<11; i++){
					var word = response[i].word;
					getEl('result', word);
				}
			} else{
				alert("error");
			}		
		}
	};
	xhr.send(null);	
}