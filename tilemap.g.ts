// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`100010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0101010101010101010101010a0e0e01010101010101010101010101010e0e01010101010101010101010101010e0e01030809010101010103080901010e0e01040209010101010104020901010e0e01050706010101010105070601010e0e01010101010101010101010101010e0e01010101010101010101010101010e0e01010101010101010101010101010e0e01030809010101010103080901010e0e01040209010101010104020901010e0e01050706010101010105070601010e0e01010101010101010101010101010e0e0c0101010101010101010101010b0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . . . . . 2 2 2 . . 2 
2 . 2 2 2 . . . . . 2 2 2 . . 2 
2 . 2 2 2 . . . . . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . . . . . 2 2 2 . . 2 
2 . 2 2 2 . . . . . 2 2 2 . . 2 
2 . 2 2 2 . . . . . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles14,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
