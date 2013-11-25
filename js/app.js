function showEdit() {
	$(this).hide();
	$(this).siblings('.editor').show();
	$(this).siblings('.editor').focus();
}

function hideEdit() {
	$(this).hide();
	$(this).siblings('.editable').show();
}

function add(element, parentName, object) {
	var data = ko.dataFor(element);
	data[parentName].push(object);
	$('.editor').hide();
}

function remove(element, parentName) {
	var context = ko.contextFor(element);
	var parentArray = context.$parent[parentName];
	parentArray.remove(context.$data);

}