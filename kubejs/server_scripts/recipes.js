onEvent('recipes',event => {
    event.remove({id:'create:crafting/materials/rose_quartz'})
    event.remove({id:'exnihilosequentia:ens_porcelain_clay'})
    event.remove({id:'minecraft:water'})
    event.remove({id:'create:crafting/kineticks/shaft'})
})

onEvent('recipes', event => {
    event.recipes.createPressing('kubejs:tin_plate', '#forge:ingots/tin')
    event.recipes.createSequencedAssembly('8x kubejs:tin_thin_plate', 'kubejs:tin_plate', [event.recipes.createPressing('kubejs:tin_thin_plate', 'kubejs:tin_thin_plate')]).transitionalItem('kubejs:tin_thin_plate').loops(8).id('kubejs:tin_thin_plate')
    event.recipes.createFilling('kubejs:opened_soup_can', ['kubejs:tin_can', Fluid.of('kubejs:liquid_soup', 250)])
    event.recipes.createDeploying('kubejs:soup_can', ['kubejs:opened_soup_can', 'kubejs:tin_thin_plate'])
    
    event.recipes.createSplashing('kubejs:drop', ['minecraft:air'])
    
    event.shaped('4x kubejs:tin_can', ['A A','A A','AAA'], {A: 'kubejs:tin_thin_plate'})
    event.shaped('create:shaft', [' J ',' J ',' L '],{J:'create:andesite_alloy',L:'kubejs:fblogo'}).damageIngredinent(1)
    
    event.recipes.createMixing([Fluid.of('kubejs:liquid_soup', 1300)], [Fluid.of('minecraft:water', 1000),'16x #forge:vegetables', '8x #forge:dusts/wood','2x #diet:proteins','#forge:salt']).heated();
    event.recipes.createMixing(['4x create:rose_quartz'], [Fluid.of('minecrtaft:water',1000),'4x minecraft:quartz','8x minecraft:redstone']).heated()
    
    event.shapeless("kubejs:opened_soup_can",["kubejs:soup_can"])
    event.shapeless('exnihilosequentia:porcelain_clay', ['minecraft:clay_ball','kubejs:fblogo']).damageIngredinent(1)
    event.shapeless('water_hand', ['9x kubejs:drop'])
    event.shapeless('woodenbuckets:wooden_water_bucket',['kubejs:water_hand','woodenbuckets:wooden_bucket'])
    event.shapeless('minecraft:water_bucket',['kubejs:water_hand','minecraft:bucket'])
});