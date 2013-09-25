  Game.prototype.render = function(place1,place2){
        this.place1=place1+1
        this.place2=place2+1
        $("#player1_strip td").removeClass('active')
        $("#player2_strip td").removeClass('active')
        $('#player1_strip td:nth-child('+this.place1+')').attr('class','active')
        $('#player2_strip td:nth-child('+this.place2+')').attr('class','active')
    }

    