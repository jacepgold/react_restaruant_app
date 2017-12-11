class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :item
      t.string :price
      t.string :description

      t.timestamps
    end
  end
end
