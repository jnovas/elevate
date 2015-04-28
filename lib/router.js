Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'welcome'});
Router.route('/find',{name: 'find'});
Router.route('/show',{name: 'show', data: {key:'love', verse: 'John 3:16'}});

