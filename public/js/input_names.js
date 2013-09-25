function add_player() {
    var last_space = $('form input').last().data('id');
    var next_space = last_space + 1;
    if (next_space === 6) {
      $('.add-player').remove();
    }
    var next_input = "<h4>vs.</h4><input type='text' name="+next_space+" data-id="+next_space+" placeholder='Player "+next_space+"'></input>";
    $('[data-id='+last_space+']').first().after(next_input);
}

$(document).ready(function() {
    $('.add-player').on('click', add_player);

});
