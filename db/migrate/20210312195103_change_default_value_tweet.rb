class ChangeDefaultValueTweet < ActiveRecord::Migration[6.0]
  def change
    change_column :tweets, :like, :integer, default: 0
    change_column :tweets, :retweet, :integer, default: 0
  end
end
