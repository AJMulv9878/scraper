$(document).ready(function() {

  $.get('/api/article').then(function(data) {
    console.log(data);

    for (i = 0; i < data.length; i++) {
      $('<div/>', {
        class: "panel panel-default",
        id: "panel" + i,
        value: data[i]._id
      }).appendTo('#scraped-articles');

      $('<div/>', {
        class: 'panel-heading',
        id: 'heading' + i
      }).appendTo('#panel' + i);

      $('<a/>', {
        target: '_blank',
        href: data[i].link,
        text: data[i].title
      }).appendTo('#heading' + i);

      $('<button/>', {
        type: 'button',
        id: 'save' + i,
        class: 'save-button btn-primary btn',
        value: data[i]._id,
        text: "Save"
      }).appendTo('#heading' + i);
      
      $('<button/>', {
        type: 'button',
        id: 'delete' + i,
        class: 'delete-button btn-danger btn',
        value: data[i]._id,
        text: "Delete"
      }).appendTo('#heading' + i);

      $('<div/>', {
        class: 'panel-body',
        text: data[i].summary
      }).appendTo('#panel' + i);
    }
  });


  $('#scrape').on('click', function(event) {
    event.preventDefault();
    $.get('/api/fetch').then(function(data) {
    });
    setTimeout(window.location.reload(), 2000);
  });

  $(document).on('click', '.save-button', function(event) {
    $.ajax({
      type: 'PUT',
      url: '/api/article/' + this.value,
      data: {saved: true}
    }).then(function(data){
      window.location.reload();
    });
  });

  $(document).on('click', '.delete-button', function(event) {
    $.ajax({
      type: 'DELETE',
      url: '/api/article/' + this.value,
    }).then(function(data){
      window.location.reload();
    });
  });

});