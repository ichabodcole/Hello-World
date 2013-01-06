# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
jQuery ->
  init = ->
    current_time = new Date
    hours   = format_with_leading_0 format_12_hour_day current_time.getHours()
    minutes = format_with_leading_0 current_time.getMinutes()
    seconds = format_with_leading_0 current_time.getSeconds()
    [hours, minutes].join(":") + get_meridiem(current_time.getHours())

  get_meridiem = (hours) ->
    if hours >= 12 then "pm" else "am"

  format_with_leading_0 = (num) ->
    if num < 10 then "0" + num else num

  format_12_hour_day = (hours) ->
    if hours == 0 then hours = 12
    if hours > 12 then hours -= 12 else hours

  setInterval(->
    $("#time").html init()
  , 1000)
  
  


  
