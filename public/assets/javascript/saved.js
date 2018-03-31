$(document).ready(function() {
    $.get('/api/article').then(function(data) {
        console.log(data);
    
        for (i = 0; i < data.length; i++) {

            if (data[i].saved === true) {
                $('<div/>', {
                    class: "panel panel-default",
                    id: "panel" + i,
                    value: data[i]._id
                }).appendTo('#saved-articles');
            
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
                    id: 'remove' + i,
                    class: 'remove-button btn-danger btn',
                    value: data[i]._id,
                    text: "Remove"
                }).appendTo('#heading' + i);
                
                $('<div/>', {
                    class: 'panel-body',
                    text: data[i].summary
                }).appendTo('#panel' + i);
            }
        }
    });

    $(document).on('click', '.remove-button', function(event) {
        $.ajax({
          type: 'PUT',
          url: '/api/article/' + this.value,
          data: {saved: false}
        }).then(function(data){
            window.location.reload();
        });
    });
});