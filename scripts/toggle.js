var showCounter=0;
function show(idString){
	element=document.getElementById(idString);
	if(showCounter==0){
		console.log(element);
		element.style.display='block';
		showCounter++
	}else if(showCounter==1){
		element.style.display='none';
		showCounter=0;
	}
}

var soundCounter=0;
function playSound(idString){
	var sound=document.getElementById(idString);
	if (soundCounter==0){
		sound.play();
		soundCounter++;
	} else if (soundCounter==1){
		sound.pause();
		soundCounter=0;
	}
}