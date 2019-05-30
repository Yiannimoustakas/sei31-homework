# == Schema Information
#
# Table name: bands
#
#  id          :integer          not null, primary key
#  name        :text
#  yearsactive :text
#  genre       :text
#  members     :text
#  image       :text
#

class Band < ActiveRecord::Base
  has_many :albums
end
