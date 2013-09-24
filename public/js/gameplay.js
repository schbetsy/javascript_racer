// Game functions //////////////////////////

function Game(players) {
    this.start_time = $.now();
}
Game.prototype.end_game = function() {

};

Game.prototype.advance_player = function(player) {

};

// Player functions ///////////////////////

function Player(tr_id) {
  this.position = 2;
  this.tr_id = tr_id;
}
Player.prototype.position_selector = function() {
  return tr_id + " td:nth-child("+this.position+")";
};

// Controller //////////////////////////////////

$(document).ready(function() {
    
    $('td:nth-child(2)').attr('class','active');
    
    var p1 = new Player("player1_strip");
    var p2 = new Player("player2_strip");

    var game = new Game([p1, p2]);

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
