#== GET ====================
get '/' do
  # Look in app/views/index.erb
  erb :index
end



#== POST ====================

post '/startgame' do
  @p1 = Player.find_or_create_by_initials(params[:p1][:initials])
  @p2 = Player.find_or_create_by_initials(params[:p2][:initials])
  erb :gameplay
end

