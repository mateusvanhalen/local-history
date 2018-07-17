const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Office",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }

  const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }

  const chair = {
    name: "Old Chair",
    location: "Living Room",
    description: "This old chair gives me a comfy place to sit."
  }

  const tv = {
    name: "TV",
    location: "Bedroom",
    description: "Love this TV for watching football."
  }

  const couch = {
      name: "couch",
      location: "Living Room",
      description: "Nice new couch holds my butt while I watch TV or read"
  }

  const computer = {
    name: "computer",
    location: "Office",
    description: "This helps me code things"
  }

HomeInventoryDatabase.crafts.push(vintageInkwell);
HomeInventoryDatabase.furniture.push(writingDesk);
HomeInventoryDatabase.electronics.push(tv);
HomeInventoryDatabase.furniture.push(chair);
HomeInventoryDatabase.furnitere.push(couch);
HomeInventoryDatabase.electronics.push(computer);

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")