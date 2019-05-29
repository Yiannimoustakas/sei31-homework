# == Schema Information
#
# Table name: albums
#
#  id      :integer          not null, primary key
#  title   :text
#  year    :text
#  image   :text
#  band_id :integer
#

class Album < ActiveRecord::Base
  belongs_to :band
end
