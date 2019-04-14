collision = function() {
    Enemy.list.forEach(function (element, index, array) {
        if (element.containsPoint(player.sprite.position)) {
            gameOn = false
        }
    })    
    if (Laser.list[0] !== undefined && Enemy.list[0] !== undefined) {
        for (y in Enemy.list) {
            for (x in Laser.list) {
                if (b.hit(Enemy.list[y], Laser.list[x].sprite)) {
                    Enemy.list[y].destroy();
                    Enemy.list.splice(y, 1);
                    Laser.list[x].sprite.destroy();
                    Laser.list.splice(x, 1);
                    fireBullets += 2;
                }
            }
        }
    }    
}

gravity = function() {
    
}

/*
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

    */