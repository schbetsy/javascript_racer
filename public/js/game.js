 Game.prototype.render = function(place1,place2){
        this.place1=place1+1
        this.place2=place2+1
        $("#player1_strip td").removeClass('active')
        $("#player2_strip td").removeClass('active')
        $('#player1_strip td:nth-child('+this.place1+')').attr('class','active')
        $('#player2_strip td:nth-child('+this.place2+')').attr('class','active')
    }


   Game.prototype.end = function(winner, start_time) 
    {
        $(document).unbind('keyup');
        var end_time = $.now();
        var duration = (end_time - start_time)/1000
        $.post('/game_results', {p1: player1, p2: player2, winner: winner, duration: duration}, function(result) 
        {
            $(".container").append(result);
        });
    }

   function Game(p1,p2)
   {
    this.p1 = p1
    this.p2 = p2
   }
