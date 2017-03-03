function leerFicheroTexto (){
	var fichero = document.getElementById("file1");
	if (fichero.files.lenght != 0){
		var reader = new FileReader();
		
		reader.onload = function (e){
			var textArea = document.getElementById("ta");
			textArea.value = e.target.result;	
		}
		reader.onerror = function (err){
			alert ("error leyendo el fichero");
		}
		reader.readAsText (fichero.files[0]);
	}
}

function leerFicheroBinario (){
		var fichero = document.getElementById("file2");
	if (fichero.files.lenght != 0){
		var reader = new FileReader();
		
		reader.onload = function (e){
			var img = document.getElementById("img");
			img.src = e.target.result;	
		}
		reader.onerror = function (err){
			alert ("error leyendo el fichero");
		}
		reader.readAsDataURL (fichero.files[0]);
	}
}