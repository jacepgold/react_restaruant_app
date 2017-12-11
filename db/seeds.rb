3.times do
  Menu.create(
    restaurant: Faker::Company.name,
    description: Faker::ChuckNorris.fact
  )
  20.times do
    MenuItem.create(
      item: Faker::Food.dish,
      description: Faker::Food.ingredient,
      price: Faker::Commerce.price.to_f
    )
  end
end