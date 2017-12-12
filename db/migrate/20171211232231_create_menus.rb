class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :restaurant, null: false
      t.string :description, null: false
      t.timestamps
    end
  end
end
