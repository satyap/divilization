Game.data = {
    resources: {
        'food': 0,
        'wood': 0,
        'iron': 0,
        'metal': 0,
        'cash': 0,
    },

    techs: [
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
    ],

    techs_unlocked: {}, // for fast lookup, presence in hash indicates the tech is unlocked

    buildings: [
        {
        'name': 'hut',
        'title': 'Hut',
        'consumes': { // resources consumed per tick
            'food': 0
        },
        'produces': { // resources produced
            'food': 0.1
        },
        'resources': { // resources required to build
            'wood': 1
        },
        'requires': [ // techs required to build, list of names
        ],
        'provides': [ // techs provided
        ]
    },
    {
        'name': 'sawmill',
        'title': 'Sawmill',
        'consumes': {'food': 1},
        'produces': {'wood': 1},
        'resources': {'food': 1},
        'requires': [],
        'provides': []
    },
    {
        'name': 'mine',
        'title': 'Mine',
        'consumes': {'food': 1, 'wood': 1},
        'produces': {'ore': 1},
        'resources': {'food': 10, 'wood': 10},
        'requires': [],
        'provides': []
    }

    ],

    buildings_unlocked: { // building: count
        'hut': 1
    }
};
