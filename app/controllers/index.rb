#== GET ====================
get '/' do
  erb :index
end

get '/results/:id' do
  @game = Game.find(params[:id])
  @winner = Player.find(@game.winner_id)
  @player1 = @game.players.first
  @player2 = @game.players.last
  erb :game_results
end


#== POST ====================

post '/startgame' do
  @p1 = Player.find_or_create_by_initials(params[:p1][:initials])
  @p2 = Player.find_or_create_by_initials(params[:p2][:initials])
  erb :gameplay
end

post '/game_results' do
  @player1 = Player.find(params[:p1])
  @player2 = Player.find(params[:p2])
  @game = Game.create(duration: params[:duration], winner_id: params[:winner])
  # interesting syntax below:qu
  @game.players << [@player1, @player2]
  erb :game_results, layout: false
end
