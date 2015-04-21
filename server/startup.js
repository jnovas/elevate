Meteor.startup(function(){
	if (Verses.find({}).count()==0){
		
		Verses.insert({key:"love", verse:"John 3:16-17"});
		Verses.insert({key:"sharing", verse:"John 2:1-10"});
		Verses.insert({key:"universe", verse:"John 1:1-10"});
		Verses.insert({key:"love", verse:"John 3:16-17"});

		 
	}
	
});
