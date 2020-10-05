// Example #1
var exampleOne = new Vue({
	el: '#exampleOne',
  data: {
  	exampleTwo: 'Hello World, Toreto',
    showWelcome: true
  },
	methods: {
		didTapOnTestButton: function() {
			if (this.showWelcome) {
				this.showWelcome = false
			} else {
				this.showWelcome = true
			}
		}
	}
})

// Example #2
var exampleTwo = new Vue({
	el: '#exampleTwo',
	data: {
		cars: [
			{
				name: "Toyota",
				color: "Black"
			},
			{
				name: "Nissan",
				color: "Gray"
			},
			{
				name: "BMW",
				color: "Red"
			},
			{
				name: "Mitsubishi",
				color: "Blue"
			}
		]
	}
})
