/////////////////////////////////////////////
// Game functions //////////////////////////
function Game(players) {
    this.start_time = $.now();
    this.players = players;

    for (var i = 0; i < players.length; i++){
      $(this.players[i].position_selector()).attr('class','active');
    }
}
Game.prototype.end_game = function(winner) {
  end_time = $.now();
  this.duration = (end_time - this.start_time)/1000;
  $.post('/game_results',
          {p1: this.players[0].player_id, p2:this.players[1].player_id, winner: winner.player_id, duration: this.duration},
          function(result) {
              $(".container").append(result);
   });
};

Game.prototype.advance_player = function(player) {
  $(player.position_selector()).removeClass('active');
  player.position++;
  $(player.position_selector()).attr('class','active');
};

////////////////////////////////////////////
// Player functions ///////////////////////

function Player(player_id, tr_id) {
  this.player_id = player_id;
  this.position = 2;
  this.tr_id = tr_id;
}
Player.prototype.position_selector = function() {
  return this.tr_id + " td:nth-child("+this.position+")";
};

/////////////////////////////////////////////////
// Controller //////////////////////////////////

$(document).ready(function() {
    
    var p1 = new Player(player1, "#player1_strip");
    var p2 = new Player(player2, "#player2_strip");

    var game = new Game([p1, p2]);

  $(document).on('keyup', function(event) {
    //Q = 81, P = 80
    if (event.keyCode == 81) {
        game.advance_player(p1);
        if (p1.position > track_length+1) {
            game.end_game(p1);
        }
    } else if (event.keyCode == 80) {
        game.advance_player(p2);
         if (p2.position > track_length+1) {
            game.end_game(p2);
        }
    }
  });
});
