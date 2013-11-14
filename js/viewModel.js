function viewModel(resume){
	var self = this;
	self.resume = ko.mapping.fromJS(resume);
}
function Resume(resume){
	var self = this;
	self.name = ko.observable(resume.name);
	self.title = ko.observable(resume.title);
	self.sections = ko.observableArray(new Sections(resume.sections));
}
function Sections(sections){
	var self = this;
	self.sections = [];
	$.each(sections, function(index, section){

	});
	
	self.title = ko.observable(section.title);
	self.items = ko.observableArray(section.items);
}
function Items(item){
	var self = this;
	var title = ko.observable(item.title);
	var details = ko.observableArray(item.details);
}

var vm = new viewModel(RESUME);
ko.applyBindings(vm);