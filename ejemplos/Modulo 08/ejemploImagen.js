
function handleDragEnter(e){
	debugger;
	this.classList.add('over');
}

function handleDragLeave(e){
	this.classList.remove('over');
}

function handleDrop(e){
	e.stopPropagation();
	e.preventDefault();	
	
	var files = e.dataTransfer.files;
	
	for (var i = 0, f; f = files[i]; i++) {
		debugger;
		
		var reader = new FileReader();
			
			reader.onload = function (e){
				var img = document.getElementById("img");
				img.src = e.target.result;	
				return false;
			}
			reader.onerror = function (err){
				alert ("error leyendo el fichero");
			}
			reader.readAsDataURL (f);
	};
  
	return false;
}

	document.getElementById("div").addEventListener('dragenter', handleDragEnter);
	document.getElementById("div").addEventListener('drop', handleDrop);
	document.getElementById("div").addEventListener('dragleave', handleDragLeave);
