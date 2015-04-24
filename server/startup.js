Meteor.startup(function(){


	if (Verses.find({}).count()==0){
		
		Verses.insert({key:"love", verse:"1 Corinthians 13:4-8"});
		Verses.insert({key:"love", verse:"1 Corinthians 13:13"});
		Verses.insert({key:"love", verse:"1 Peter 4:8"});
		Verses.insert({key:"love", verse:"1 John 4:7"});
		Verses.insert({key:"love", verse:"John 15:13"});
		Verses.insert({key:"love", verse:"1 John 3:16-18"});
		Verses.insert({key:"love", verse:"1 John 4:8"});
		Verses.insert({key:"love", verse:"Psalm 18:1"});
		Verses.insert({key:"love", verse:"John 3:16-17"});
		Verses.insert({key:"love", verse:"Matthew 22:37-39"});
		
		Verses.insert({key:"sharing", verse:"John 2:1-10"});
		Verses.insert({key:"universe", verse:"John 1:1-10"});
		Verses.insert({key:"love", verse:"John 3:16-17"});

		 }
	
});
