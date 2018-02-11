<!-- could just immediately change src to wanted src but if current src is wanted src, onclick event could trigger a refresh, which is slower than checking and doing nothing -->
// function changeiFrametoIT() {
//     if(document.getElementById('iFrame').src !== 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1JDGoU4A6Xq9wv4CJ7v_pbXfj0i1xiiBzZltTExfOFxc&font=Default&lang=en&initial_zoom=2&height=650') {
//         $('iFrame').attr('src','https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1JDGoU4A6Xq9wv4CJ7v_pbXfj0i1xiiBzZltTExfOFxc&font=Default&lang=en&initial_zoom=2&height=650');
//     }
// }
//
// function changeiFrametoBA() {
//     if(document.getElementById('iFrame').src !== 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1PfjkmRcibcrBEr33XVoZVOz0TDjYqBGCKFSQBQJlDQo&font=Default&lang=en&initial_zoom=2&height=650') {
//         document.getElementById('iFrame').src = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1PfjkmRcibcrBEr33XVoZVOz0TDjYqBGCKFSQBQJlDQo&font=Default&lang=en&initial_zoom=2&height=650';
//     }
// }
//
// function changeiFrametoDA() {
//     if(document.getElementById('iFrame').src !== 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1U9TqziwoVZrZNQCItpHNjO-ybr61XlWlH7ITz6UIngw&font=Default&lang=en&initial_zoom=2&height=650') {
//         document.getElementById('iFrame').src = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1U9TqziwoVZrZNQCItpHNjO-ybr61XlWlH7ITz6UIngw&font=Default&lang=en&initial_zoom=2&height=650';
//     }
// }
//
// function changeiFrametoSE() {
//     if(document.getElementById('iFrame').src !== 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=12duRpv8-LUrs-t4xMgClWOGHeSMoomZGYC-pecMqvEs&font=Default&lang=en&initial_zoom=2&height=650') {
//         document.getElementById('iFrame').src = 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=12duRpv8-LUrs-t4xMgClWOGHeSMoomZGYC-pecMqvEs&font=Default&lang=en&initial_zoom=2&height=650';
//     }
// }
//
// $(function() {
//   $('.timelineBtn').click(function() {
//     var $btn = $(this);
//     var $timeline = $('#timeline');
//
//     switch($btn.data('timelinetype')) {
//       case "softEng":
//         $timeline.attr('src', 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=12duRpv8-LUrs-t4xMgClWOGHeSMoomZGYC-pecMqvEs&font=Default&lang=en&initial_zoom=2&height=650');
//         break;
//       case "dataAn":
//         $timeline.attr('src', 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1U9TqziwoVZrZNQCItpHNjO-ybr61XlWlH7ITz6UIngw&font=Default&lang=en&initial_zoom=2&height=650');
//         break;
//       case "busAn":
//         $timeline.attr('src', 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1PfjkmRcibcrBEr33XVoZVOz0TDjYqBGCKFSQBQJlDQo&font=Default&lang=en&initial_zoom=2&height=650');
//         break;
//       case "itCon":
//         $timeline.attr('src', 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1JDGoU4A6Xq9wv4CJ7v_pbXfj0i1xiiBzZltTExfOFxc&font=Default&lang=en&initial_zoom=2&height=650');
//         break;
//     }
//   });
// })

//function to change the timeline src onclick of pathway name
$(function() {
  //.timelineBtn is the class assigned to each pathway name - function is called when it is clicked on
  $('.timelineBtn').click(function() {
    //declaring variables
    var $timeline = $('#timeline');
    //the name associated with timelinetype of the clicked on pathway name is assigned to timelinetype
    var timelinetype = $(this).data('timelinetype');
    //variable url is now the src associated with the timelinetype of the current pathway name found in the iframe (good luck explaining this, amy)
    var url = $timeline.data(timelinetype);
    //changes the src attribute of timeline to the url above
    $timeline.attr('src', url);
  });
})
