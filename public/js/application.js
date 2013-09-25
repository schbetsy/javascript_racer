$(document).ready(function() 
{
    
}



function Player(initials){
    this.initials = initials
}

function Game(p1,p2)
{
    var player_1_position = 2
    var player_2_position = 2
    var start_time = $.now();
    $(document).on('keyup', function(event) 
    {
        if (event.keyCode == 81) 
        {
            player_1_position += 1
            $("#player1_strip").find(p1_space_selector).attr('class','active')
            if (player_1_position > track_length+1) 
                {
                end_game(player1, start_time);
                }
        } 
        else if (event.keyCode == 80) 
        {
            p2_space_selector = 'td:nth-child('+player_2_position+')'
            $("#player2_strip td").removeClass('active')
            player_2_position += 1
            $("#player2_strip").find(p2_space_selector).attr('class','active')
             if (player_2_position > track_length+1) 
                 {
                    end_game(player2, start_time);
                 }       
        }
    }
}



  });
});
