Template.find.events({
	"change #versepicker": function(evt) {
	  var newValue = $(evt.target).val();
	  var oldValue = Session.get("keyword");
	  if (newValue != oldValue) {
	    console.log(newValue);
	    
	  }
	  Session.set("keyword", newValue);
	}
	//verses:function(){return Verses.find({})}
})
