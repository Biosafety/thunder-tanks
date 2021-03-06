function Map(tt) {
    var SELF = this;

    /** @type ThunderTanks */
    this.tt = tt;

    /** @type JSGameSoup */
    this.game = tt.game;

    this.init = function() {
        // add map boundary boxes for collision detection

        // top boundary
        var top =  new Block(-5, -100, this.game.width + 5, 100);
        this.game.addEntity(top);
        this.tt.obstacles.push(top);

        var bottom =  new Block(-5, this.game.height, this.game.width + 5, 100);
        this.game.addEntity(bottom);
        this.tt.obstacles.push(bottom);

        var left = new Block(-100, -5, 100, this.game.height + 5);
        this.game.addEntity(left);
        this.tt.obstacles.push(left);

        var right =  new Block(this.game.width, -5, 100, this.game.height + 5);
        this.game.addEntity(right);
        this.tt.obstacles.push(right);

        // block in the middle
        var block1 = new Block(300,300,100,100);
        this.game.addEntity(block1);
        this.tt.obstacles.push(block1);
    }
}

function Block(x,y,w,h) {
    this.draw = function(c, gs) {
        // draw block
	c.fillStyle = 'rgba(200, 200, 200, 1.0)';
        c.fillRect(x, y, w, h);
    }

    /* @returns[Array] a rectangle of the boundaries of the entity with the form [x, y, w, h] */
    this.get_collision_aabb = function() {
        return [x,y,w,h];
    }
}