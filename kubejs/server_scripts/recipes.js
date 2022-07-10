onEvent('recipes', event => {
    event.recipes.createPressing('kubejs:tin_plate', '#forge:ingots/tin')
    event.recipes.createSequencedAssembly('8x kubejs:tin_thin_plate', 'kubejs:tin_plate', [
        event.recipes.createPressing('kubejs:tin_thin_plate', 'kubejs:tin_thin_plate')]).transitionalItem('kubejs:tin_thin_plate').loops(8).id('kubejs:tin_thin_plate')
    event.shaped('4x kubejs:tin_can', ['A A','A A','AAA'], {A: 'kubejs:tin_thin_plate'})
    event.recipes.createMixing(Fluid.of('kubejs:liquid_soup', 1000), [
        Fluid.of('minecraft:water', 1000),'16x #forge:vegetables', '8x #forge:dusts/wood','2x #diet:proteins','#forge:salt']).heated();
    event.recipes.createFilling('kubejs:opened_soup_can', ['kubejs:tin_can', Fluid.of('kubejs:liquid_soup', 250)])
    event.recipes.createDeploying('kubejs:soup_can', ['kubejs:opened_soup_can', 'kubejs:tin_thin_plate'])
    event.shapeless("kubejs:opened_soup_can",["kubejs:soup_can"])
    event.shaped('woodenbuckets:wooden_bucket',['   ','WAW',' W ',{W:'#minecraft:logs',A:'woodenhopper:wooden_hopper'}])
});