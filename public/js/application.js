$(document).ready(function() 
{
    var g = new Game('p1','p2')
    g.render(1,1)
    var player_1_position = 1
    var player_2_position = 1
    var start_time = $.now();
    $(document).on('keyup', function(event) 
    {
        if (event.keyCode == 81) 
        {
            player_1_position += 1
            g.render(player_1_position,player_2_position)
            if (player_1_position > track_length-1) 
                {
                g.end(player1, start_time);
                }
        } 
        else if (event.keyCode == 80) 
        {
            player_2_position += 1
            g.render(player_1_position,player_2_position)
             if (player_2_position > track_length-1) 
                 {
                    g.end(player2, start_time);
                 }       
        }
    });
});




 





