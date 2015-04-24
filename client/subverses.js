Template.subverses.helpers({
	verses:function(){return Verses.find({key:Session.get("keyword")})}
})
