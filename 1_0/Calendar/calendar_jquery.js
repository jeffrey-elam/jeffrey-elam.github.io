$(document).ready(function() {

//Functions go in here...
$('#calendar').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
				},
				defaultDate: '2014-06-12',
				editable: true,
				events: [
					/*Events get added here...*/
				]
			});

});