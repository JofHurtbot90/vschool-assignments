const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema ({
  item: {
    healing: String,
    atkUp: Number,
    poison: String,
    rcvUp: Number,
    sedative: String
  },

  weapon: {
    pistol: String,
    knife: String,
    rifle: String,
    grenade: String,
    suppressor: String
  },
  clothing: {
    jacket: String,
    sunglasses: String,
    socks: String,
    shoes: {
      boots: String,
      casual: String,
      sneakers: String
    }
  },
  gear: {
    mask: String,
    chestPlate: String,
    chestRig: String,
    gloves: {
      tactical: String,
      driving: String
    }
}

});

module.exports = mongoose.model('Inventory', inventorySchema);
