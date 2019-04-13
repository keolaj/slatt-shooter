collision = function() {
    Enemy.list.forEach(function (element, index, array) {
        if (element.containsPoint(player.sprite.position)) {
            gameOn = false
        }
    })    
    if (Laser.list[0] !== undefined) {
        Enemy.list.forEach(function (element, index, array) {
            for (x in Laser.list) {
                if (element.containsPoint(Laser.list[x].sprite.position)) {
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
    for (x in entities.children) {
        
    }
}