$(document).ready(function() {
    $('#player1_strip td:nth-child(2)').attr('class','active')
    $('#player2_strip td:nth-child(2)').attr('class','active')
    var player_1_position = 2
    var player_2_position = 2

  $(document).on('keyup', function(event) {
    //Q = 81
    //P = 80
    if (event.keyCode == 81) {
        p1_space_selector = 'td:nth-child('+player_1_position+')'
        $("#player1_strip td").removeClass('active')
        player_1_position += 1
        $("#player1_strip").find(p1_space_selector).attr('class','active')
        if (player_1_position > track_length+1) {
            alert("player 1 won!")
        }
    } else if (event.keyCode == 80) {
        p2_space_selector = 'td:nth-child('+player_2_position+')'
        $("#player2_strip td").removeClass('active')
        player_2_position += 1
        $("#player2_strip").find(p2_space_selector).attr('class','active')
         if (player_2_position > track_length+1) {
            alert("player 2 won!")
            
        }
    }


  });
});
