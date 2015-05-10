(function(){
    'use strict';

    angular.module('reserving')

        .factory('tools', function(){
            return {

                // Util for finding an object by its 'id' property among an array
                findById: function findById(a, id) {
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].id === parseInt(id)) {
                            return a[i];
                        }
                    }
                    return {};
                },

                // Util for returning a random key from a collection that also isn't the current key
                newRandomKey: function newRandomKey(coll, key, currentKey){
                    var randKey;
                    do {
                        randKey = coll[Math.floor(coll.length * Math.random())][key];
                    } while (randKey === currentKey);
                    return randKey;
                }
            };
        })
})();