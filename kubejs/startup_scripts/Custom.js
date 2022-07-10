
onEvent('item.registry', event => {
    event.create('opened_soup_can').maxStackSize(1).food((food) => {food.hunger(8).meat(true).alwaysEdible(true).fastToEat(true).effect('watersource:thirst', 1200, 2, 0.1)}).texture('kubejs:item/opened_soup_can').displayName('启封的炖菜罐头')
    event.create('soup_can').maxStackSize(16).texture('kubejs:item/soup_can').displayName('炖菜罐头').food((food) => {food.hunger(0).fastToEat(true).alwaysEdible(true)})
    event.create('tin_can').maxStackSize(64).texture('kubejs:item/tin_can').displayName('锡罐')
    event.create('dirty_tin_can').maxStackSize(64).texture('kubejs:item/dirty_tin_can').displayName('脏兮兮的锡罐')
    event.create('tin_plate').maxStackSize(64).texture('kubejs:item/tin_plate').displayName('锡板')
    event.create('tin_thin_plate').maxStackSize(64).texture('kubejs:item/tin_thin_plate').displayName('轻薄锡板')
    event.create('money').maxStackSize(64).texture('kubejs:item/money').displayName('钱')
})
onEvent('fluid.registry', event => {
	event.create('liquid_soup').displayName(`炖菜汤`).textureStill('kubejs:fluid/soup_still').textureFlowing('kubejs:fluid/soup_flow').bucketColor(0xb07f22)
})

