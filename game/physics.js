collision = function() {
    Enemy.list.forEach(function (element, index, array) {
        if (element.containsPoint(player.sprite.position)) {
            gameOn = false
        }
    })    
    if (Laser.list[0] !== undefined) {
        Enemy.list.forEach(function (element, index, array) {
            for (x in Laser.list) {
                if (b.hit(element, Laser.list[x].sprite, true)) {
                    element.destroy();
                    array.splice(index, 1);
                    Laser.list[x].sprite.destroy();
                    Laser .list.splice(x, 1);
                    fireBullets += 2;
                }
            }
        });
    }
}
gravity = function() {
    
}