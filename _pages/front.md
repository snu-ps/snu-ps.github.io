---
layout: about
title: 홈
permalink: /
subtitle: >
  서울대학교 알고리즘 문제해결 동아리<br>
  <strong>S</strong>eoul <strong>N</strong>ational <strong>U</strong>niversity <strong>P</strong>roblem <strong>S</strong>olvers
news: true
images:
  slider: true
# Karuna is GOAT
# TODO insert caption for the images in swiper
# TODO add images in front-picture-list-old.js
---

<span style="font-size:150%">**[지금 가입하기]({{ site.apply_link }})**</span>

<swiper-container keyboard="true" navigation="true" rewind="false">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/icpcap2024.jpeg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/front-snupc-yclock.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/icpckorea2022.png" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/icpcwf2024.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/icpckorea2017.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/front-snupc-icpc.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/kakao2017.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/snupc2024div2.jpg" class="img-fluid rounded" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/activity/scpc2017.jpg" class="img-fluid rounded" %}</swiper-slide>
</swiper-container>

<script src='https://cdn.jsdelivr.net/npm/fullcalendar@latest/index.global.js'></script>

<script>
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
    events: 'assets/json/calendar.json'
  });
  calendar.render();
});
</script>

<script>
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
    events: 'assets/json/calendar.json'
  });
  calendar.render();
});
</script>

<span style="display:block; height: 30px;"></span>
<div id='calendar-wide'></div><div id='calendar-narrow'></div>
<span style="display:block; height: 10px;"></span>
