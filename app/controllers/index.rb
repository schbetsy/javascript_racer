GO_KEYS = [81, 80, 90, 77, 54, 32]
# keys =  [q , p , z , m , 6, space]
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
  @players = []
  params.values.each do |pl|
    next if pl == ""
    @players << Player.find_or_create_by_initials(pl)
  end
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
