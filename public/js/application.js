function end_game(winner, start_time) {
    $(document).unbind('keyup');
    var end_time = $.now();
    var duration = (end_time - start_time)/1000;
   $.post('/game_results', {p1: player1, p2: player2, winner: winner, duration: duration}, function(result) {
        console.log(result);
        $(".container").append(result);
   });
}

$(document).ready(function() {
    
    $('td:nth-child(2)').attr('class','active');
    
    var player_1_position = 2;
    var player_2_position = 2;

    var start_time = $.now();

  $(document).on('keyup', function(event) {
    //Q = 81, P = 80
    if (event.keyCode == 81) {
        p1_space_selector = 'td:nth-child('+player_1_position+')';
        $("#player1_strip td").removeClass('active');
        player_1_position += 1;
        $("#player1_strip").find(p1_space_selector).attr('class','active');
        if (player_1_position > track_length+1) {
            end_game(player1, start_time);
        }
    } else if (event.keyCode == 80) {
        p2_space_selector = 'td:nth-child('+player_2_position+')';
        $("#player2_strip td").removeClass('active');
        player_2_position += 1;
        $("#player2_strip").find(p2_space_selector).attr('class','active');
         if (player_2_position > track_length+1) {
            end_game(player2, start_time);
        }
    }
  });
});
