(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{524:function(t,e,n){"use strict";n.r(e);n(168),n(29);var r={data:function(){return{value:"",events:[],colors:["#2196F3","#3F51B5","#673AB7","#00BCD4","#4CAF50","#FF9800","#757575"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],dragEvent:null,dragStart:null,createEvent:null,createStart:null,extendOriginal:null}},methods:{startDrag:function(t){var e=t.event,n=t.timed;e&&n&&(this.dragEvent=e,this.dragTime=null,this.extendOriginal=null)},startTime:function(t){var e=this.toTime(t);if(this.dragEvent&&null===this.dragTime){var n=this.dragEvent.start;this.dragTime=e-n}else this.createStart=this.roundTime(e),this.createEvent={name:"Event #".concat(this.events.length),color:this.rndElement(this.colors),start:this.createStart,end:this.createStart,timed:!0},this.events.push(this.createEvent)},extendBottom:function(t){this.createEvent=t,this.createStart=t.start,this.extendOriginal=t.end},mouseMove:function(t){var e=this.toTime(t);if(this.dragEvent&&null!==this.dragTime){var n=this.dragEvent.start,r=this.dragEvent.end-n,l=e-this.dragTime,o=this.roundTime(l),h=o+r;this.dragEvent.start=o,this.dragEvent.end=h}else if(this.createEvent&&null!==this.createStart){var c=this.roundTime(e,!1),d=Math.min(c,this.createStart),v=Math.max(c,this.createStart);this.createEvent.start=d,this.createEvent.end=v}},endDrag:function(){this.dragTime=null,this.dragEvent=null,this.createEvent=null,this.createStart=null,this.extendOriginal=null},cancelDrag:function(){if(this.createEvent)if(this.extendOriginal)this.createEvent.end=this.extendOriginal;else{var i=this.events.indexOf(this.createEvent);-1!==i&&this.events.splice(i,1)}this.createEvent=null,this.createStart=null,this.dragTime=null,this.dragEvent=null},roundTime:function(time){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=15,n=60*e*1e3;return t?time-time%n:time+(n-time%n)},toTime:function(t){return new Date(t.year,t.month-1,t.day,t.hour,t.minute).getTime()},getEventColor:function(t){var e=parseInt(t.color.substring(1),16),n=e>>16&255,g=e>>8&255,b=e>>0&255;return t===this.dragEvent||t===this.createEvent?"rgba(".concat(n,", ").concat(g,", ").concat(b,", 0.7)"):t.color},getEvents:function(t){for(var e=t.start,n=t.end,r=[],l=new Date("".concat(e.date,"T00:00:00")).getTime(),o=new Date("".concat(n.date,"T23:59:59")).getTime(),h=(o-l)/864e5,c=this.rnd(h,h+20),i=0;i<c;i++){var d=0!==this.rnd(0,3),v=this.rnd(l,o),m=v-v%9e5,E=m+9e5*this.rnd(2,d?8:288);r.push({name:this.rndElement(this.names),color:this.rndElement(this.colors),start:m,end:E,timed:d})}this.events=r},rnd:function(a,b){return Math.floor((b-a+1)*Math.random())+a},rndElement:function(t){return t[this.rnd(0,t.length-1)]}}},l=r,o=n(72),h=n(92),c=n.n(h),d=n(521),v=n(517),m=n(518),E=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",type:"4day",events:t.events,"event-color":t.getEventColor,"event-ripple":!1},on:{change:t.getEvents,"mousedown:event":t.startDrag,"mousedown:time":t.startTime,"mousemove:time":t.mouseMove,"mouseup:time":t.endDrag},nativeOn:{mouseleave:function(e){return t.cancelDrag.apply(null,arguments)}},scopedSlots:t._u([{key:"event",fn:function(e){var r=e.event,l=e.timed,o=e.eventSummary;return[n("div",{staticClass:"v-event-draggable",domProps:{innerHTML:t._s(o())}}),t._v(" "),l?n("div",{staticClass:"v-event-drag-bottom",on:{mousedown:function(e){return e.stopPropagation(),t.extendBottom(r)}}}):t._e()]}}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCalendar:d.a,VCol:v.a,VRow:m.a,VSheet:E.a})}}]);