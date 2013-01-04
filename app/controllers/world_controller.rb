class WorldController < ApplicationController
  def hello
    @hello = "Hello World!";
    @current_time = Time.now().strftime("%I:%M%P")
  end
end
