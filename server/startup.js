Verses.remove({});

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
		Verses.insert({key:"peace", verse:"Proverbs 16:7"});
		Verses.insert({key:"peace", verse:"Isaiah 26:3"});
		Verses.insert({key:"peace", verse:"John 14:27"});
		Verses.insert({key:"peace", verse:"John 16:33"});
		Verses.insert({key:"peace", verse:"Philippians 4:6-7"});
		Verses.insert({key:"peace", verse:"2 Thessalonians 3:16"});
		Verses.insert({key:"peace", verse:"1 Peter 5:7"});
		Verses.insert({key:"peace", verse:"Romans 15:13"});
		Verses.insert({key:"peace", verse:"Isaiah 54:10"});
		Verses.insert({key:"peace", verse:"Isaiah 26:12"});
		Verses.insert({key:"peace", verse:"Psalm 119:165"});
		Verses.insert({key:"peace", verse:"Psalm 37:37"});
		Verses.insert({key:"encouragement", verse:"Matthew 10:29-31"});
		Verses.insert({key:"encouragement", verse:"Psalm 55:22"});
		Verses.insert({key:"encouragement", verse:"Psalm 16:8"});
		Verses.insert({key:"encouragement", verse:"2 Timothy 1:7"});
		Verses.insert({key:"encouragement", verse:"Psalm 46:1-3"});
		Verses.insert({key:"encouragement", verse:"John 14:27"});
		Verses.insert({key:"encouragement", verse:"Joshua 1:9"});
		Verses.insert({key:"encouragement", verse:"Isaiah 41:10"});
		Verses.insert({key:"encouragement", verse:"Proverbs 3:5-6"});
		Verses.insert({key:"encouragement", verse:"Proverbs 18:10"});
	}
});
