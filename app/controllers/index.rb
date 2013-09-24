#== GET ====================
get '/' do
  erb :index
end

get '/results/:id' do
  @game = Game.find(params[:id])
  erb :game_results
end


#== POST ====================

post '/startgame' do
  @p1 = Player.find_or_create_by_initials(params[:p1][:initials])
  @p2 = Player.find_or_create_by_initials(params[:p2][:initials])
  erb :gameplay
end

post '/restart_game' do
  @players = []
  params[:players].values.each do |pl|
    @players << Player.find(pl.to_i)
  end
  erb :gameplay
end

post '/game_results' do
  @game = Game.create(duration: params[:duration], winner_id: params[:winner])
  params[:players].split(",").each do |pl|
    @game.players << Player.find(pl.to_i)
  end
  erb :game_results, layout: false
end
