# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  Todo.destroy_all
  t1 = Todo.create!(body: "Probably Elliot", done: false, title: "Find out who's the most attractive TA")
  t2 = Todo.create!(body: "Potentially Ronil???(I don't think so)", done: false, title: "Survey who can pull off the mustache the best")
  t3 = Todo.create!(body: "Sound of Music", done: false, title: "Practice Yodeling")
end