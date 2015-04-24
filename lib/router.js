Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'welcome'});
Router.route('/verselist', {name: 'verselist'});
Router.route('/find',{name: 'find'});
Router.route('/about',{name: 'about'});
Router.route('/show',{name: 'show', data: {key:'love', verse: 'John 3:16'}});

