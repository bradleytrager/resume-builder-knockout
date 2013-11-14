
function viewModel(resume){
	var self = this;
	self.resume = ko.mapping.fromJS(resume, resumeMapping);
}
function Resume(resume){
	var self = this;
	self.name = ko.observable(resume.name);
	self.title = ko.observable(resume.title);
	self.email = ko.observable(resume.email);
	self.website = ko.observable(resume.website);
	self.phone = ko.observable(resume.phone);
	self.address1 = ko.observable(resume.address1);
	self.address2 = ko.observable(resume.address2);
	self.summary = ko.observable(resume.summary);
	self.sections = ko.mapping.fromJS(resume.sections, sectionMapping);

}
function Section(section){
	var self = this;
	self.title = ko.observable(section.title);
	self.items = ko.mapping.fromJS(section.items, itemMapping);

}
function Item(item){
	var self = this;
	self.title = ko.observable(item.title);
	self.location = ko.observable(item.location);
	self.date = ko.observable(item.date);
	self.details = ko.mapping.fromJS(item.details, detailMapping);

}
function Detail(detail){
	var self = this;
	self.detail = ko.observable(detail.detail);

}
var resumeMapping = {
	create:function(options){
		return new Resume(options.data);
	}
}
var sectionMapping = {
	create:function(options){
		return new Section(options.data);
	}
}
var itemMapping = {
	create:function(options){
		return new Item(options.data);
	}
}
var detailMapping = {
	create:function(options){
		return new Detail(options.data);
	}
}
var vm = new viewModel(RESUME);
ko.applyBindings(vm);