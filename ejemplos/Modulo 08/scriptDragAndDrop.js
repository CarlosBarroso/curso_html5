
//dragstar
var dragSrc = null;

function handleDragStart(e){
	this.style.opacity = '0.4';
	
	dragSrc = this;
	
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver (e){
	if (e.preventDefault){
		e.preventDefault();
	}
	e.dataTransfer.doprEffect = 'move';
	return false;
}


function handleDragEnter(e){
	this.classList.add('over');
}

function handleDragLeave(e){
	this.classList.remove('over');
}

function handleDrop(e){
	
	if (e.stopPropagation)
		e.stopPropagation();
		
	if (dragSrc != this){
		dragSrc.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}
	return false;
}

function handleDragEnd (e){
	[].forEach.call(cols, function (col){
		col.classList.remove('over');
		col.style.opacity = '1';
	});
}

var cols = document.querySelectorAll("#marco .column");
[].forEach.call(cols, function (coll){
	coll.addEventListener('dragstart', handleDragStart);
	coll.addEventListener('dragover', handleDragOver);
	coll.addEventListener('dragenter', handleDragEnter);
	coll.addEventListener('dragleave', handleDragLeave);
	coll.addEventListener('dragend', handleDragEnd);
	coll.addEventListener('drop', handleDrop);
	
});