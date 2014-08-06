Game.resources = {
    'food': 0,
    'wood': 0,
    'iron': 0,
    'metal': 0,
    'cash': 0,
};


Game.techs = [
    {
    'name': 'smelting',
    'title': 'Smelting',
    'resources': { // resources required
        'iron': 10
    },
    'buildings': { // buildings required for tech to be available
        'farm': 0
    },
}
]
Game.techs_unlocked = {} // for fast lookup, presence in hash indicates the tech is unlocked

Game.buildings = [
    {
    'name': 'hut',
    'title': 'Hut',
    'uses': { // resources consumed per tick
        'food': 0
    },
    'resources': { // resources required to build
        'food': 0
    },
    'requires': [ // techs required to build, list of names

    ],
    'produces': { // resources produced
        'food': 1
    },
    'provides': [ // techs provided
    ],
    'count': 0
}
]

Game.buildings_unlocked = {} // building => count
