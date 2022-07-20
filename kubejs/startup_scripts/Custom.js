onEvent('item.registry', event => {
    event.create('opened_soup_can').maxStackSize(1).food((food) => {food.hunger(8).meat(true).alwaysEdible(true).fastToEat(true).effect('watersource:thirst', 1200, 2, 0.1)}).texture('kubejs:item/opened_soup_can').displayName('启封的炖菜罐头')
    event.create('soup_can').maxStackSize(16).texture('kubejs:item/soup_can').displayName('炖菜罐头').food((food) => {food.hunger(0).fastToEat(true).alwaysEdible(true)})
    event.create('tin_can').maxStackSize(64).texture('kubejs:item/tin_can').displayName('锡罐')
    event.create('dirty_tin_can').maxStackSize(64).texture('kubejs:item/dirty_tin_can').displayName('脏兮兮的锡罐')
    event.create('tin_plate').maxStackSize(64).texture('kubejs:item/tin_plate').displayName('锡板')
    event.create('tin_thin_plate').maxStackSize(64).texture('kubejs:item/tin_thin_plate').displayName('轻薄锡板')
    event.create('money').maxStackSize(64).texture('kubejs:item/money').displayName('钱')
    event.create('fblogo').texture('kubejs:item/fblogo').displayName('“催化剂”').unStackable().maxDamage(15000).tooltip('FB整合包内有时合成物品需要它！')
    event.create('drop').maxStackSize(9).texture('kubejs:item/drop').displayName('水滴').food((food) => {food.effect('watersource:water_restoring', 10, 1)}).alwaysEdible(true).fastToEat(true)
    event.create('water_hand').unStackable().displayName('手持水源').texture('kubejs:item/water_hand').tooltip('不可放置于地面，只能用于合成水桶')
})

onEvent('fluid.registry', event => {
	event.create('liquid_soup').displayName(`炖菜汤`).textureStill('kubejs:fluid/soup_still').textureFlowing('kubejs:fluid/soup_flow').bucketColor(0xb07f22)
})