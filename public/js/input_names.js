function add_player() {
    var last_space = $('form input').last().data('id');
    var next_space = last_space + 1;
    if (next_space === 6) {
      $('.add-player').remove();
    }
    var next_input = "<h4>vs.</h4><input type='text' name="+next_space+" data-id="+next_space+" placeholder='Player "+next_space+"'></input><p class='instruction' data-num="+next_space+"></p>";
    $('[data-num='+last_space+']').first().after(next_input);
}

function add_instruction() {
  var num = $(this).data('id');
  $('p.[data-id='+num+']')
}

$(document).ready(function() {
    $('.add-player').on('click', add_player);
    $('.player').blur(function(){
        var n = $(this).data('id');
        var instr = "'"+ key_names[n-1]+"' makes you go!"
        $('[data-num='+n+']').html(instr);
    })

});
