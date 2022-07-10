//eat can
onEvent('item.food_eaten', event => {
    if (event.item.id == "kubejs:soup_can") {
        event.player.giveInHand('kubejs:opened_soup_can')
        if (event.player.getHealth() <= 4){
            event.server.tell('§4[FB新闻]§c' + '本报讯' + event.player + '于' + event.time + '因为用嘴开罐头被活活扎死。FB新闻在此提醒各位不要模仿！')
        }else{
            event.player.tell('§c你为啃开一个罐头，把嘴巴划破了,大出血。')
        }
        event.player.attack(6)
    }
    if (event.item.id == "kubejs:opened_soup_can") {
        event.player.giveInHand('kubejs:dirty_tin_can')
    }
})

//clean can
onEvent('item.right_click', event => {
    let player = event.player
    if (player.getHeldItem(event.hand) == 'kubejs:dirty_tin_can') {
        let target = player.rayTrace(5)
        if (target.block.id == 'minecraft:water') {
            player.tell('我:这个水好凉凉~')
            let amount = (player.getHeldItem(event.hand).count - 1)
            player.setHeldItem(event.hand, Item.of('kubejs:dirty_tin_can', amount))
            player.giveInHand('kubejs:tin_can')
            player.tell('芜湖~洗干净了！')
        }
    }
    event.recipes.createMixing('kubejs:tin_can', [
        Fluid.of('minecraft:water', 100),
        'kubejs:dirty_tin_can'
        ]).heated()
})

//cleaner
const whitelist = Ingredient.matchAny([
    'minecraft:diamond'//单个物品实例
    //你也可以通过在modid前加‘@’符号来将整个mod加入白名单 示例：'@tinkersconstruct'
])
const minutes = 30 // 执行一次间隔（注：该值必须大于1）
var lastResult = [];
var totalResult = [];
var lastItemCount = 0;
var totalItemCount = 0;
function clearLag(server){
    lastResult = [];
    lastItemCount = 0;
    server.getEntities("@e[type=item]").forEach(entity => {
        if (!whitelist.test(entity.item.id)){
            lastResult.push([entity.item.id, entity.item.count]);
            totalResult.push([entity.item.id, entity.item.count]);
            lastItemCount += entity.item.count;
            entity.kill();
        }
    });
    lastResult.sort();
    totalResult.sort();
    server.tell([Text.lightPurple('[扫地机器人]'), `本次共清除 ${lastItemCount} 个物品`]);
    server.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag last  来获取本次详细信息"]);
    server.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag total 来获取全部详细信息"]);
}

function countResult(result,event){
    if(result != []){
        result.forEach((singleResult, index) => {
        event.server.tell([Text.lightPurple(`第 ${index + 1} 项 `), `${singleResult[0]} , 个数为 ${singleResult[1]}`])
        })
    }
}

onEvent('server.load', function (event) {
    event.server.scheduleInTicks(100, event.server, function (callback0) {
        callback0.data.tell([Text.lightPurple('[扫地机器人]'), `加载成功，使用 !clearlag help 查看帮助`]);
    })
    event.server.schedule((minutes - 1) * MINUTE, event.server, function (callback1) {
        callback1.data.tell([Text.lightPurple('[扫地机器人]'), "1分钟后将清理地面掉落物"]);
        callback1.data.schedule(MINUTE, callback1.data, function(callback2) {
            clearLag(callback2.data);
        })
        callback1.reschedule();
    })
})

onEvent('player.chat',function (event){
    let input = event.message.trim();
    switch (input) {
        case "!clearlag last":
            if (event.player.op){
                countResult(lastResult,event);
            }else{
                event.player.tell([Text.lightPurple('[扫地机器人]'), "出现了未知问题，请联在聊天框中输入!clearlog help获取帮助或者系管理员来解决此问题"]);
            }
            break;
        case "!clearlag total":
            if (event.player.op){
                countResult(totalResult,event);
            }else{
                event.player.tell([Text.lightPurple('[扫地机器人]'), "出现了未知问题，请联在聊天框中输入!clearlog help获取帮助或者系管理员来解决此问题"]);
            }
            break;
        case "!clearlag help":
            event.player.tell([Text.lightPurple('[扫地机器人]'), "工厂方块 by XiaoShuMiao@mcbbbs.net. Powered by KubeJS §2已获得使用授权"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "扫地机器人 by Wudji@mcbbbs.net. Powered by KubeJS"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag last  来获取本次详细信息"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag total 来获取全部详细信息"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag 立即清除掉落物"]);
            event.player.tell([Text.lightPurple('[扫地机器人]'), "如提示：“出现了未知问题，请联在聊天框中输入!clearlog help获取帮助或者系管理员来解决此问题”那么说明，§4你没有OP权限！"]);
            break;
        case "!clearlag":
            if (event.player.op){
                clearLag(event.server);
            }else{
                event.player.tell([Text.lightPurple('[扫地机器人]'), "出现了未知问题，请联在聊天框中输入!clearlog help获取帮助或者系管理员来解决此问题"]);
            }
            break;
    }
})