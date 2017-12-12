# Create three different menus with different items
# How do I link menu items to the menu as I am generating data?
3.times do
  menu = Menu.create!(
    restaurant: Faker::Company.name,
    description: Faker::ChuckNorris.fact
  )
  20.times do
    menu_item = menu.menuItems.create!(
      name: Faker::Food.dish,
      description: Faker::Food.ingredient,
      price: Faker::Commerce.price.to_f
    )
  end
end