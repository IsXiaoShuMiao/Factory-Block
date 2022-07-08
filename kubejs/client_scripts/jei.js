onEvent('jei.information', event => {
    event.add('kubejs:opened_soup_can', ['已经打开了的罐头', '你可以使用扳手来打开它','或者你也可以试着使用你的嘴？'])
  })

onEvent('jei.hide.items', event => {
    event.hide('extendedcrafting:ultimate_auto_table')
    event.hide('extendedcrafting:elite_auto_table')
    event.hide('extendedcrafting:advanced_auto_table')
    event.hide('extendedcrafting:basic_auto_table')
  })