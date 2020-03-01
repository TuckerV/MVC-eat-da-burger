const orm = require("../config/orm");

let burger = {
    selectAll: function(cb){
        orm.selectAll(cb);
    },
    create: function(burger_name, cb){
        orm.create(burger_name, cb);
    },
    update: function(id, cb){
        orm.update(id, cb);
    },
    delete: function(id, cb){
        orm.delete(id, cb);
    }
};

module.exports = burger;