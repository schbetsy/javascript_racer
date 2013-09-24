/////////////////////////////////////////////
// Game functions //////////////////////////
function Game(players) {
    this.start_time = $.now();
    this.players = players;

    for (var i = 0; i < this.players.length; i++){
        $(this.players[i].position_selector()).attr('class','active');
    }
}

Game.prototype.end_game = function(winner) {
    $(document).unbind('keyup');
    end_time = $.now();
    this.duration = (end_time - this.start_time)/1000;
    var ids = this.get_player_ids().toString();
    console.log(ids);
    $.post('/game_results',
            {players: ids, winner: winner.player_id, duration: this.duration},
            function(result) {
                $(".container").append(result);
     });
};

Game.prototype.get_player_ids = function(){
    var player_ids = [];
    for (var i = 0; i < this.players.length; i++) {
        player_ids[i] = this.players[i].player_id;
    }
    console.log(player_ids);
    return player_ids;
};

Game.prototype.advance_player = function(player) {
    player.position++;
    this.render();
    if (player.position > track_length+1){
        this.end_game(player);
    }
};

Game.prototype.render = function() {
    for (var i = 0; i < this.players.length; i++) {
        $(this.players[i].tr_id + " td").removeClass('active');
        $(this.players[i].position_selector()).attr('class','active');
    }
};

Game.prototype.respond_to_keys = function(keypress) {
    for (var i = 0; i < this.players.length; i++){
        if (this.players[i].go_key === keypress) {
            this.advance_player(this.players[i]);
        }
    }
};

////////////////////////////////////////////
// Player functions ///////////////////////

function Player(player_id, go_key, tr_id) {
    this.player_id = player_id;
    this.position = 2;
    this.tr_id = tr_id;
    this.go_key = go_key;
}

Player.prototype.position_selector = function() {
    return this.tr_id + " td:nth-child("+this.position+")";
};

/////////////////////////////////////////////////
// Controller //////////////////////////////////

$(document).ready(function() {
    
    var p1 = new Player(player1, 81, "#player1_strip");
    var p2 = new Player(player2, 80, "#player2_strip");
    //Q = 81, P = 80

    var game = new Game([p1, p2]);

    $(document).on('keyup', function(event) {
        game.respond_to_keys(event.which);
    });
});
