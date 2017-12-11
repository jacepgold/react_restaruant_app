class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :restaurant
      t.string :description

      t.timestamps
    end
  end
end
