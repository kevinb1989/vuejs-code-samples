Vue.component('tasks',{
	template: "#tasks-template",
	props: ['list']
});

new Vue({
	el: "#app",
	data: {
		tasks: [
			{body: 'Go to the store', completed: true},
			{body: 'Go to the bank', completed: true},
			{body: 'Go to the doctor', completed: false}
		]
	}
});