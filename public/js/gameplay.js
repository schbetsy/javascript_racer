function Game() {
    this.start_time = $.now();
}
Game.prototype.end_game = function() {

};

Game.prototype.advance_player = function(player) {

};

function Player() {
  this.position = 2;
}

$(document).ready(function() {
    
    $('td:nth-child(2)').attr('class','active');
    
    var p1 = new Player();
    var p2 = new Player();

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
