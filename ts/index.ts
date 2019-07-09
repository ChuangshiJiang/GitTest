jQuery('#foo');
jQuery(()=>{
  alert('Dom ready');
});

let cat = new Aniaml('tom');

let directions = [Directions.Up,Directions.Down,Directions.Left,Directions.Right];

let settings:jQuery.AjaxSettings = {
  method:'POST',
  data:{
    name:'foo'
  }
}

jQuery.ajax('/api/get_something',settings);
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);