let apiKey = 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE';

let eventSources = [
  { googleCalendarId: 'iu1iul1u3n8ic3s78f4df15u4o@group.calendar.google.com' },
  { googleCalendarId: 'c_kmvgs6pqta7man27ikg08ffrhc@group.calendar.google.com' }
];

let eventClickCallback = function(info) {
  info.jsEvent.preventDefault();
  let url = info.event.extendedProps.location;
  if (url) { window.open(url); }
  else { alert('No location URL provided for this event. Please email to site admin'); }
}

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar-wide');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridTwoWeek',
    headerToolbar: {
      left: 'oneWeekBtn,twoWeekBtn,oneMonthBtn',
      center: 'title',
      right: 'prev,next today'
    },
    customButtons: {
      oneWeekBtn: { text: '주', click: function() { calendar.changeView('listWeek'); } },
      twoWeekBtn: { text: '2주', click: function() { calendar.changeView('dayGridTwoWeek'); } },
      oneMonthBtn: { text: '월', click: function() { calendar.changeView('dayGridMonth'); } }
    },
    views: { dayGridTwoWeek: { type: 'dayGrid', duration: { weeks: 2 } } },
    googleCalendarApiKey: apiKey,
    eventSources: eventSources,
    eventClick: eventClickCallback
  });
  calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar-narrow');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'listWeek',
    headerToolbar: {
      left: 'oneDayBtn,oneWeekBtn',
      right: 'prev,next today'
    },
    customButtons: {
      oneDayBtn: { text: '일', click: function() { calendar.changeView('listDay'); } },
      oneWeekBtn: { text: '주', click: function() { calendar.changeView('listWeek'); } },
    },
    googleCalendarApiKey: apiKey,
    eventSources: eventSources,
    eventClick: eventClickCallback
  });
  calendar.render();
});
