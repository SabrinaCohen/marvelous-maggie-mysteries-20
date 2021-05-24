namespace SpriteKind {
    export const Currency = SpriteKind.create()
    export const LUCY = SpriteKind.create()
    export const ANYA = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Maggie.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    startNextLevel()
    music.magicWand.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
	
})
function startNextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        scene.setBackgroundColor(9)
        tiles.setTilemap(tilemap`level1`)
    } else if (currentLevel == 2) {
        scene.setBackgroundColor(6)
        tiles.setTilemap(tilemap`level2`)
    } else if (currentLevel == 3) {
        scene.setBackgroundColor(8)
        tiles.setTilemap(tilemap`level3`)
    } else if (currentLevel == 4) {
        scene.setBackgroundColor(5)
        tiles.setTilemap(tilemap`level4`)
    } else if (currentLevel == 5) {
        scene.setBackgroundColor(10)
        tiles.setTilemap(tilemap`level5`)
    } else if (currentLevel == 6) {
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`level9`)
    } else if (currentLevel == 7) {
        scene.setBackgroundColor(2)
        tiles.setTilemap(tilemap`level8`)
    } else if (false) {
    	
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Maggie, assets.tile`myTile3`)
    tiles.placeOnRandomTile(Lucy, assets.tile`myTile3`)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
        MyEnemy = sprites.create(assets.tile`myTile5`, SpriteKind.Enemy)
        tiles.placeOnTile(MyEnemy, value2)
        MyEnemy.follow(Maggie, 30)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile23`)) {
        ANYA = sprites.create(img`
            ................
            ....111111111...
            ...11aa7777711..
            ...1a2a5557b71..
            ...1aa55555b71..
            ...17511511571..
            ...1751f5f1571..
            ...17535553571..
            ...17552225571..
            ...17555355571..
            ...17755555b71..
            ...177c2a2cb71..
            ...177caaacb71..
            ...177ca2acb71..
            ...111c2a2c111..
            .....1caaac1....
            .....1ca2ac1....
            .....152a251....
            .....12aaa21....
            .....1aa2aa1....
            .....1a2a2a1....
            .....12aaa21....
            ..1111aa2aa1111.
            .11fffa2a2afff11
            .1fff92aaa29fff1
            .1ff999999999ff1
            .1fff9999999fff1
            .11fffffffffff11
            ..1111111111111.
            ................
            `, SpriteKind.ANYA)
        tiles.placeOnRandomTile(ANYA, assets.tile`myTile23`)
        ANYA.follow(Maggie, 100)
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Lucy.vy == 0) {
        Lucy.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ANYA, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let ANYA: Sprite = null
let MyEnemy: Sprite = null
let currentLevel = 0
let Lucy: Sprite = null
let Maggie: Sprite = null
Maggie = sprites.create(img`
    ...11111......
    ..118881111...
    .11886666611..
    .18865555661..
    .18655555561..
    .1865f15f161..
    .1165ff5ff61..
    ..1655555561..
    ..1655355561..
    ..1665555661..
    ..1686886861..
    ..1686666861..
    ..1186666811..
    ...18666681...
    ...15666651...
    ...11999911...
    ....199991....
    ....188881....
    ....188881....
    ....188881....
    ....188881....
    ....166661....
    ....111111....
    ..............
    ..............
    `, SpriteKind.Player)
Lucy = sprites.create(img`
    ...1111.......
    ..112211111...
    .11223333311..
    .12235555331..
    .12355555531..
    .1135f15f131..
    ..135ff5ff31..
    ..1355555531..
    ..1355355531..
    ..1335555331..
    ..1323223231..
    ..1323333231..
    ..1123333211..
    ...12333321...
    ...15333351...
    ...11444411...
    ....144441....
    ....122221....
    ....122221....
    ....122221....
    ....122221....
    ....122221....
    ....122221....
    ....133331....
    ....111111....
    `, SpriteKind.Player)
controller.moveSprite(Maggie, 100, 0)
controller.player2.moveSprite(Lucy, 100, 0)
scene.cameraFollowSprite(Maggie)
info.setLife(3)
info.player2.setLife(3)
tiles.setTilemap(tilemap`level7`)
tiles.placeOnRandomTile(Maggie, assets.tile`myTile3`)
if (info.life() == 0) {
    game.over(false)
}
tiles.placeOnRandomTile(Lucy, assets.tile`myTile19`)
Maggie.ay = 500
Lucy.ay = 500
game.showLongText("My name is Maggie, and this is my sister, Lucy. Our mom, Peach, was kidnapped by the evil witch, Anya! Will you help us save her? ", DialogLayout.Bottom)
