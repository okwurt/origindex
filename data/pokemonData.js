const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    species: "Seed Pokemon",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    abilities: ["Overgrow", "Chlorophyll"],
    eggGroups: ["Grass", "Monster"],
    baseStats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
      total: 318
    },
    evYield: [specialAttack, 1],
    forms: [],
    preEvolutions: [],
    evolutions: [
      {
        name: "Ivysaur",
        method: "Level Up",
        condition: 16
      },
      {
        name: "Venusaur",
        method: "Level Up",
        condition: 32
      }
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "species": "Seed Pokemon",
    "type": ["Grass", "Poison"],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "abilities": ["Overgrow", "Chlorophyll"],
    "eggGroups": ["Grass", "Monster"],
    "baseStats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "specialAttack": 80,
      "specialDefense": 80,
      "speed": 60,
      "total": 405
    },
    "evYield": [{ "specialAttack": 1 }],
    "forms": [],
    "preEvolutions": [
      {
        "name": "Bulbasaur",
        "method": "Level Up",
        "condition": 16
      }
    ],
    "evolutions": [
      {
        "name": "Venusaur",
        "method": "Level Up",
        "condition": 32
      }
    ]
  },
  {
    "id": 3,
    "name": "Venusaur",
    "species": "Seed Pokemon",
    "type": ["Grass", "Poison"],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "abilities": ["Overgrow", "Chlorophyll"],
    "eggGroups": ["Grass", "Monster"],
    "baseStats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 80,
      "total": 525
    },
    "evYield": [{ "specialAttack": 2 }],
    "forms": [
      {
        "formName": "Mega",
        "displayName": "Mega Venusaur",
        "type": ["Grass", "Poison"],
        "isBattleForm": true
      },
      {
        "formName": "Gigantamax",
        "displayName": "G-Max Venusaur",
        "type": ["Grass", "Poison"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [
      {
        "name": "Bulbasaur",
        "method": "Level Up",
        "condition": 16
      },
      {
        "name": "Ivysaur",
        "method": "Level Up",
        "condition": 32
      }
    ],
    "evolutions": []
  },
  {
    "id": 4,
    "name": "Charmander",
    "species": "Lizard Pokemon",
    "type": ["Fire"],
    "height": "0.61 m",
    "weight": "8.5 kg",
    "abilities": ["Blaze", "Solar Power"],
    "eggGroups": ["Monster", "Dragon"],
    "baseStats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65,
      "total": 309
    },
    "evYield": [{ "specialAttack": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Charmeleon",
        "method": "Level Up",
        "condition": 16
      },
      {
        "name": "Charizard",
        "method": "Level Up",
        "condition": 36
      }
    ]
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "species": "Flame Pokemon",
    "type": ["Fire"],
    "height": "1.09 m",
    "weight": "19.0 kg",
    "abilities": ["Blaze", "Solar Power"],
    "eggGroups": ["Monster", "Dragon"],
    "baseStats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "sp.atk": 80,
      "sp.def": 65,
      "speed": 80,
      "total": 405
    },
    "forms": [],
    "preEvolutions": [
      {
        "name": "Charmander",
        "method": "Level Up",
        "condition": 16
      }
    ],
    "evolutions": [
      {
        "name": "Charizard",
        "method": "Level Up",
        "condition": 36
      }
    ]
  },
  {
    "id": 6,
    "name": "Charizard",
    "species": "Flame Pokemon",
    "type": ["Fire", "Flying"],
    "height": "1.70 m",
    "weight": "90.5 kg",
    "abilities": ["Blaze", "Solar Power"],
    "eggGroups": ["Monster", "Dragon"],
    "baseStats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "specialAttack": 109,
      "specialDefense": 85,
      "speed": 100,
      "total": 534
    },
    "evYield": [{ "specialAttack": 3 }],
    "forms": [
      {
        "formName": "Mega-X",
        "displayName": "Mega Charizard X",
        "type": ["Fire", "Dragon"],
        "isBattleForm": true
      },
      {
        "formName": "Mega-Y",
        "displayName": "Mega Charizard Y",
        "type": ["Fire", "Flying"],
        "isBattleForm": true
      },
      {
        "formName": "Gigantamax",
        "displayName": "G-Max Charizard",
        "type": ["Fire", "Flying"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [
      {
        "name": "Charmander",
        "method": "Level Up",
        "condition": 16
      },
      {
        "name": "Charmeleon",
        "method": "Level Up",
        "condition": 36
      }
    ],
    "evolutions": []
  },
  {
    "id": 7,
    "name": "Squirtle",
    "species": "Tiny Turtle Pokemon",
    "type": ["Water"],
    "height": "0.51 m",
    "weight": "9.0 kg",
    "abilities": ["Torrent", "Rain Dish"],
    "eggGroups": ["Monster", "Water 1"],
    "baseStats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "specialAttack": 50,
      "specialDefense": 64,
      "speed": 43,
      "total": 314
    },
    "evYield": [{ "defense": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Wartortle",
        "method": "Level Up",
        "condition": 16
      },
      {
        "name": "Blastoise",
        "method": "Level Up",
        "condition": 36
      }
    ]
  },
  {
    "id": 8,
    "name": "Wartortle",
    "species": "Turtle Pokemon",
    "type": ["Water"],
    "height": "0.99 m",
    "weight": "22.5 kg",
    "abilities": ["Torrent", "Rain Dish"],
    "eggGroups": ["Monster", "Water 1"],
    "baseStats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "specialAttack": 65,
      "specialDefense": 80,
      "speed": 58,
      "total": 405
    },
    "evYield": [{ "defense": 1 }],
    "preEvolutions": [
      {
        "name": "Squirtle",
        "method": "Level Up",
        "condition": 16
      }
    ],
    "evolutions": [
      {
        "name": "Blastoise",
        "method": "Level Up",
        "condition": 36
      }
    ]
  },
  {
    "id": 9,
    "name": "Blastoise",
    "species": "Shellfish Pokemon",
    "type": ["Water"],
    "height": "1.60 m",
    "weight": "85.5 kg",
    "abilities": ["Torrent", "Rain Dish"],
    "eggGroups": ["Monster", "Water 1"],
    "baseStats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "specialAttack": 85,
      "specialDefense": 105,
      "speed": 78,
      "total": 530
    },
    "forms": [
      {
        "formName": "Mega",
        "displayName": "Mega Blastoise",
        "type": ["Water"],
        "isBattleForm": true
      },
      {
        "formName": "Gigantamax",
        "displayName": "G-Max Blastoise",
        "type": ["Water"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [
      {
        "name": "Squirtle",
        "method": "Level Up",
        "condition": 16
      },
      {
        "name": "Wartortle",
        "method": "Level Up",
        "condition": 36
      }
    ],
    "evolutions": []
  },
  {
    "id": 10,
    "name": "Caterpie",
    "species": "Worm Pokemon",
    "type": ["Bug"],
    "height": "0.30 m",
    "weight": "2.9 kg",
    "abilities": ["Shield Dust", "Run Away"],
    "eggGroups": ["Bug"],
    "baseStats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 45,
      "total": 195
    },
    "evYield": [{ "hp": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Metapod",
        "method": "Level Up",
        "condition": 7
      },
      {
        "name": "Butterfree",
        "method": "Level Up",
        "condition": 10
      }
    ]
  },
  {
    "id": 11,
    "name": "Metapod",
    "species": "Cocoon Pokemon",
    "type": ["Bug"],
    "height": "0.71 m",
    "weight": "9.9 kg",
    "abilities": ["Shed Skin"],
    "eggGroups": ["Bug"],
    "baseStats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 30,
      "total": 205
    },
    "evYield": [{ "defense": 2 }],
    "forms": [],
    "preEvolutions": [
      {
        "name": "Caterpie",
        "method": "Level Up",
        "condition": 7
      }
    ],
    "evolutions": [
      {
        "name": "Butterfree",
        "method": "Level Up",
        "condition": 10
      }
    ]
  },
  {
    "id": 12,
    "name": "Butterfree",
    "species": "Butterfly Pokemon",
    "type": ["Bug", "Flying"],
    "height": "1.09 m",
    "weight": "32.0 kg",
    "abilities": ["Compound Eyes", "Tinted Lens"],
    "eggGroups": ["Bug"],
    "baseStats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 70,
      "total": 395
    },
    "evYield": [{ "specialAttack": 1 }],
    "forms": [
      {
        "formName": "Gigantamax",
        "displayName": "G-Max Butterfree",
        "type": ["Bug", "Flying"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [
      {
        "name": "Caterpie",
        "method": "Level Up",
        "condition": 7
      },
      {
        "name": "Metapod",
        "method": "Level Up",
        "condition": 10
      }
    ],
    "evolutions": []
  },
  {
    "id": 13,
    "name": "Weedle",
    "species": "Hairy Bug Pokemon",
    "type": ["Bug", "Poison"],
    "height": "0.30 m",
    "weight": "3.2 kg",
    "abilities": ["Shield Dust", "Run Away"],
    "eggGroups": ["Bug"],
    "baseStats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "specialAttack": 20,
      "specialDefense": 20,
      "speed": 50,
      "total": 195
    },
    "evYield": [{ "attack": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Kakuna",
        "method": "Level Up",
        "condition": 7
      },
      {
        "name": "Beedrill",
        "method": "Level Up",
        "condition": 10
      }
    ]
  },
  {
    "id": 14,
    "name": "Kakuna",
    "species": "Cocoon Pokemon",
    "type": ["Bug", "Poison"],
    "height": "0.61 m",
    "weight": "10.0 kg",
    "abilities": ["Shed Skin"],
    "eggGroups": ["Bug"],
    "baseStats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "specialAttack": 25,
      "specialDefense": 25,
      "speed": 35,
      "total": 205
    },
    "evYield": [{ "defense": 2 }],
    "forms": [],
    "preEvolutions": [
      {
        "name": "Weedle",
        "method": "Level Up",
        "condition": 7
      }
    ],
    "evolutions": [
      {
        "name": "Beedrill",
        "method": "Level Up",
        "condition": 10
      }
    ]
  },
  {
    "id": 15,
    "name": "Beedrill",
    "species": "Poison Bee Pokemon",
    "type": ["Bug", "Poison"],
    "height": "0.99 m",
    "weight": "29.5 kg",
    "abilities": ["Swarm", "Sniper"],
    "eggGroups": ["Bug"],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "specialAttack": 45,
      "specialDefense": 80,
      "speed": 75,
      "total": 395
    },
    "evYield": [{ "attack": 2 }],
    "forms": [
      {
        "formName": "Mega",
        "displayName": "Mega Beedrill",
        "type": ["Bug", "Poison"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [
      {
        "name": "Weedle",
        "method": "Level Up",
        "condition": 7
      },
      {
        "name": "Kakuna",
        "method": "Level Up",
        "condition": 10
      }
    ],
    "evolutions": []
  },
  {
    "id": 16,
    "name": "Pidgey",
    "species": "Tiny Bird Pokemon",
    "type": ["Normal", "Flying"],
    "height": "0.30 m",
    "weight": "1.8 kg",
    "abilities": ["Keen Eye", "Tangled Feet", "Big Pecks"],
    "eggGroups": ["Flying"],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "specialAttack": 35,
      "specialDefense": 35,
      "speed": 56,
      "total": 251
    },
    "evYield": [{ "speed": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Pidgeotto",
        "method": "Level Up",
        "condition": 18
      },
      {
        "name": "Pidgeot",
        "method": "Level Up",
        "condition": 36
      }
    ]
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "species": "Bird Pokemon",
    "type": ["Normal", "Flying"],
    "height": "1.09 m",
    "weight": "30.0 kg",
    "abilities": ["Keen Eye", "Tangled Feet", "Big Pecks"],
    "eggGroups": ["Flying"],
    "baseStats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71,
      "total": 349
    },
    "evYield": [{ "speed": 2 }],
    "forms": [],
    "preEvolutions": [
      {
        "name": "Pidgey",
        "method": "Level Up",
        "condition": 18
      }
    ],
    "evolutions": [
      {
        "name": "Pidgeot",
        "method": "Level Up",
        "condition": 36
      }
    ]
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "species": "Bird Pokemon",
    "type": ["Normal", "Flying"],
    "height": "1.50 m",
    "weight": "39.5 kg",
    "abilities": ["Keen Eye", "Tangled Feet", "Big Pecks"],
    "eggGroups": ["Flying"],
    "baseStats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "specialAttack": 70,
      "specialDefense": 70,
      "speed": 101,
      "total": 479
    },
    "evYield": [{ "speed": 3 }],
    "forms": [
      {
        "formName": "Mega",
        "displayName": "Mega Pidgeot",
        "type": ["Normal", "Flying"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [
      {
        "name": "Pidgey",
        "method": "Level Up",
        "condition": 18
      },
      {
        "name": "Pidgeotto",
        "method": "Level Up",
        "condition": 36
      }
    ],
    "evolutions": []
  },
  {
    "id": 19,
    "name": "Rattata",
    "species": "Mouse Pokemon",
    "type": ["Normal"],
    "height": "0.30 m",
    "weight": "3.5 kg",
    "abilities": ["Run Away", "Guts", "Hustle"],
    "eggGroups": ["Field"],
    "baseStats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "specialAttack": 25,
      "specialDefense": 35,
      "speed": 72,
      "total": 253
    },
    "evYield": [{ "attack": 1 }],
    "forms": [
      {
        "formName": "Rattata-Alola",
        "displayName": "Alolan Rattata",
        "type": ["Dark", "Normal"],
        "abilities": ["Gluttony", "Hustle", "Thick Fat"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Raticate",
        "method": "Level Up",
        "condition": 20
      }
    ]
  },
  {
    "id": 20,
    "name": "Raticate",
    "species": "Mouse Pokemon",
    "type": ["Normal"],
    "height": "0.71 m",
    "weight": "18.5 kg",
    "abilities": ["Run Away", "Guts", "Hustle"],
    "eggGroups": ["Field"],
    "baseStats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "specialAttack": 50,
      "specialDefense": 70,
      "speed": 97,
      "total": 413
    },
    "evYield": [{ "attack": 2 }],
    "forms": [
      {
        "formName": "Raticate-Alola",
        "displayName": "Alolan Raticate",
        "type": ["Dark", "Normal"],
        "abilities": ["Gluttony", "Hustle", "Thick Fat"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [
      {
        "name": "Rattata",
        "method": "Level Up",
        "condition": 20
      }
    ],
    "evolutions": []
  },
  {
    "id": 21,
    "name": "Spearow",
    "species": "Tiny Bird Pokemon",
    "type": ["Normal", "Flying"],
    "height": "0.30 m",
    "weight": "2.0 kg",
    "abilities": ["Keen Eye", "Sniper"],
    "eggGroups": ["Flying"],
    "baseStats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "specialAttack": 31,
      "specialDefense": 31,
      "speed": 70,
      "total": 262
    },
    "evYield": [{ "attack": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Fearow",
        "method": "Level Up",
        "condition": 20
      }
    ]
  },
  {
    "id": 22,
    "name": "Fearow",
    "species": "Beak Pokemon",
    "type": ["Normal", "Flying"],
    "height": "1.19 m",
    "weight": "38.0 kg",
    "abilities": ["Keen Eye", "Sniper"],
    "eggGroups": ["Flying"],
    "baseStats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "specialAttack": 61,
      "specialDefense": 61,
      "speed": 100,
      "total": 442
    },
    "evYield": [{ "attack": 2 }],
    "forms": [],
    "preEvolutions": [
      {
        "name": "Spearow",
        "method": "Level Up",
        "condition": 20
      }
    ],
    "evolutions": []
  },
  {
    "id": 23,
    "name": "Ekans",
    "species": "Snake Pokemon",
    "type": ["Poison"],
    "height": "2.01 m",
    "weight": "6.9 kg",
    "abilities": ["Intimidate", "Shed Skin", "Unnerve"],
    "eggGroups": ["Field", "Dragon"],
    "baseStats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "specialAttack": 40,
      "specialDefense": 54,
      "speed": 55,
      "total": 288
    },
    "evYield": [{ "attack": 1 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Arbok",
        "method": "Level Up",
        "condition": 22
      }
    ]
  },
  {
    "id": 24,
    "name": "Arbok",
    "species": "Cobra Pokemon",
    "type": ["Poison"],
    "height": "3.51 m",
    "weight": "65.0 kg",
    "abilities": ["Intimidate", "Shed Skin", "Unnerve"],
    "eggGroups": ["Field", "Dragon"],
    "baseStats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80,
      "total": 448
    },
    "evYield": [{ "attack": 2 }],
    "forms": [],
    "preEvolutions": [
      {
        "name": "Ekans",
        "method": "Level Up",
        "condition": 22
      }
    ],
    "evolutions": []
  },
  {
    "id": 25,
    "name": "Pikachu",
    "species": "Mouse Pokemon",
    "type": ["Electric"],
    "height": "0.41 m",
    "weight": "6.0 kg",
    "abilities": ["Static", "Lightning Rod"],
    "eggGroups": ["Field", "Fairy"],
    "baseStats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90,
      "total": 320
    },
    "evYield": [{ "speed": 1 }],
    "forms": [
      {
        "formName": "Pikachu-Partner",
        "displayName": "Partner Pikachu",
        "type": ["Electric"],
        "isBattleForm": false
      },
      {
        "formName": "Pikachu-Original",
        "displayName": "Original Cap Pikachu",
        "type": ["Electric"],
        "isBattleForm": false
      },
      {
        "formName": "Pikachu-Hoenn",
        "displayName": "Hoenn Cap Pikachu",
        "type": ["Electric"],
        "isBattleForm": false
      },
      {
        "formName": "Pikachu-Sinnoh",
        "displayName": "Sinnoh Cap Pikachu",
        "type": ["Electric"],
        "isBattleForm": false
      },
      {
        "formName": "Pikachu-Unova",
        "displayName": "Unova Cap Pikachu",
        "type": ["Electric"],
        "isBattleForm": false
      },
      {
        "formName": "Kalos Cap",
        "displayName": "Kalos Cap Pikachu",
        "type": ["Electric"],
        "isBattleForm": false
      },
      {
        "formName": "Gigantamax",
        "displayName": "G-Max Pikachu",
        "type": ["Electric"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Raichu",
        "method": "Use Thunder Stone"
      },
      {
        "name": "Alolan Raichu",
        "method": "Use Thunder Stone in Alola"
      }
    ]
  },
  {
    "id": 26,
    "name": "Raichu",
    "species": "Mouse Pokemon",
    "type": ["Electric"],
    "height": "0.79 m",
    "weight": "30.0 kg",
    "abilities": ["Static", "Lightning Rod"],
    "eggGroups": ["Field", "Fairy"],
    "baseStats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "specialAttack": 90,
      "specialDefense": 80,
      "speed": 110,
      "total": 485
    },
    "evYield": [{ "speed": 2 }],
    "forms": [
      {
        "formName": "Raichu-Alola",
        "displayName": "Alolan Raichu",
        "type": ["Electric", "Psychic"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [
      {
        "name": "Pikachu",
        "method": "Use Thunder Stone"
      }
    ],
    "evolutions": []
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "species": "Mouse Pokemon",
    "type": ["Ground"],
    "height": "0.61 m",
    "weight": "12.0 kg",
    "abilities": ["Sand Veil", "Sand Rush"],
    "eggGroups": ["Field"],
    "baseStats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "specialAttack": 20,
      "specialDefense": 30,
      "speed": 40,
      "total": 300
    },
    "evYield": [{ "defense": 1 }],
    "forms": [
      {
        "formName": "Sandshrew-Alola",
        "displayName": "Alolan Sandshrew",
        "type": ["Ice", "Steel"],
        "abilities": ["Snow Cloak", "Slush Rush"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Sandslash",
        "method": "Level Up",
        "condition": 22
      }
    ]
  },
  {
    "id": 151,
    "name": "Mew",
    "species": "New Species Pokemon",
    "type": ["Psychic"],
    "height": "0.41 m",
    "weight": "4.0 kg",
    "abilities": ["Synchronize"],
    "eggGroups": ["Undiscovered"],
    "baseStats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "specialAttack": 100,
      "specialDefense": 100,
      "speed": 100,
      "total": 600
    },
    "evYield": [{ "hp": 3 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": []
  },
  {
    "id": 201,
    "name": "Unown",
    "species": "Symbol Pokemon",
    "type": ["Psychic"],
    "height": "0.51 m",
    "weight": "5.0 kg",
    "abilities": ["Levitate"],
    "eggGroups": ["Undiscovered"],
    "baseStats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "specialAttack": 72,
      "specialDefense": 48,
      "speed": 48,
      "total": 336
    },
    "evYield": [{ "attack": 1 }, { "specialAttack": 1 }],
    "forms": [
      {
        "formName": "Unown-A",
        "displayName": "Unown A",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "Unown-B",
        "displayName": "Unown B",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "C",
        "displayName": "Unown C",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "D",
        "displayName": "Unown D",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "E",
        "displayName": "Unown E",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "F",
        "displayName": "Unown F",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "G",
        "displayName": "Unown G",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "H",
        "displayName": "Unown H",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "I",
        "displayName": "Unown I",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "J",
        "displayName": "Unown J",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "K",
        "displayName": "Unown K",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "L",
        "displayName": "Unown L",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "M",
        "displayName": "Unown M",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "N",
        "displayName": "Unown N",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "O",
        "displayName": "Unown O",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "P",
        "displayName": "Unown P",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "Q",
        "displayName": "Unown Q",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "R",
        "displayName": "Unown R",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "S",
        "displayName": "Unown S",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "T",
        "displayName": "Unown T",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "U",
        "displayName": "Unown U",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "V",
        "displayName": "Unown V",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "W",
        "displayName": "Unown W",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "X",
        "displayName": "Unown X",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "Y",
        "displayName": "Unown Y",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "Z",
        "displayName": "Unown Z",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "!",
        "displayName": "Unown !",
        "type": ["Psychic"],
        "isBattleForm": false
      },
      {
        "formName": "?",
        "displayName": "Unown ?",
        "type": ["Psychic"],
        "isBattleForm": false
      }
    ]
  },
  {
    "id": 778,
    "name": "Mimikyu",
    "species": "Disguise Pokemon",
    "type": ["Ghost", "Fairy"],
    "height": "0.20 m",
    "weight": "0.7 kg",
    "abilities": ["Disguise"],
    "eggGroups": ["Amorphous"],
    "baseStats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "specialAttack": 50,
      "specialDefense": 105,
      "speed": 96,
      "total": 476
    },
    "evYield": [{ "specialDefense": 2 }],
    "forms": [
      {
        "formName": "Busted Form",
        "displayName": "Busted Mimikyu",
        "type": ["Ghost", "Fairy"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [],
    "evolutions": []
  },
  {
    "id": 1012,
    "name": "Poltchageist",
    "species": "Matcha Pokemon",
    "type": ["Grass", "Ghost"],
    "height": "0.10 m",
    "weight": "1.1 kg",
    "abilities": ["Hospitality", "Heatproof"],
    "eggGroups": ["Amorphous", "Mineral"],
    "baseStats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "specialAttack": 74,
      "specialDefense": 54,
      "speed": 50,
      "total": 308
    },
    "evYield": [{ "specialAttack": 1 }],
    "forms": [
      {
        "formName": "Counterfeit Form",
        "displayName": " Counterfeit Form Poltchageist",
        "type": ["Grass", "Ghost"],
        "formAbility": ["Hospitality", "Heatproof"],
        "isBattleForm": false
      },
      {
        "formName": "Artisan Form",
        "displayName": "Artisan Form Poltchageist",
        "type": ["Grass", "Ghost"],
        "formAbility": ["Hospitality", "Heatproof"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [],
    "evolutions": [
      {
        "name": "Poltchageist",
        "method": "Item",
        "condition": ["Unremarkable Teacup", "Masterpiece Teacup"]
      }
    ]
  },
  {
    "id": 1013,
    "name": "Sinistcha",
    "species": "Matcha Pokemon",
    "type": ["Grass", "Ghost"],
    "height": "0.20 m",
    "weight": "2.2 kg",
    "abilities": ["Hospitality", "Heatproof"],
    "eggGroups": ["Amorphous", "Mineral"],
    "baseStats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "specialAttack": 121,
      "specialDefense": 80,
      "speed": 70,
      "total": 508
    },
    "evYield": [{ "specialAttack": 2 }],
    "forms": [
      {
        "formName": "Unremarkable Form",
        "displayName": "Unremarkable Form Sinistcha",
        "type": ["Grass", "Ghost"],
        "formAbility": ["Hospitality", "Heatproof"],
        "isBattleForm": false
      },
      {
        "formName": "Masterpiece Form",
        "displayName": "Masterpiece Form Sinistcha",
        "type": ["Grass", "Ghost"],
        "formAbility": ["Hospitality", "Heatproof"],
        "isBattleForm": false
      }
    ],
    "preEvolutions": [
      {
        "name": "Poltchageist",
        "method": "Item",
        "condition": ["Unremarkable Teacup", "Masterpiece Teacup"]
      }
    ],
    "evolutions": []
  },
  {
    "id": 1014,
    "name": "Okidogi",
    "species": "Retainer Pokemon",
    "type": ["Poison", "Fighting"],
    "height": "1.80 m",
    "weight": "92.0 kg",
    "abilities": ["Toxic Chain", "Guard Dog"],
    "eggGroups": ["Undiscovered"],
    "baseStats": {
      "hp": 88,
      "attack": 128,
      "defense": 115,
      "specialAttack": 58,
      "specialDefense": 86,
      "speed": 80,
      "total": 555
    },
    "evYield": [{ "attack": 3 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": []
  },
  {
    "id": 1015,
    "name": "Munkidori",
    "species": "Retainer Pokemon",
    "type": ["Poison", "Psychic"],
    "height": "1.00 m",
    "weight": "12.2 kg",
    "abilities": ["Toxic Chain", "Frisk"],
    "eggGroups": ["Undiscovered"],
    "baseStats": {
      "hp": 88,
      "attack": 75,
      "defense": 66,
      "specialAttack": 130,
      "specialDefense": 90,
      "speed": 106,
      "total": 555
    },
    "evYield": [{ "specialAttack": 3 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": []
  },
  {
    "id": 1016,
    "name": "Fezandipiti",
    "species": "Retainer Pokemon",
    "type": ["Poison", "Fairy"],
    "height": "1.40 m",
    "weight": "30.1 kg",
    "abilities": ["Toxic Chain", "Technician"],
    "eggGroups": ["Undiscovered"],
    "baseStats": {
      "hp": 88,
      "attack": 91,
      "defense": 82,
      "specialAttack": 70,
      "specialDefense": 125,
      "speed": 99,
      "total": 555
    },
    "evYield": [{ "specialDefense": 3 }],
    "forms": [],
    "preEvolutions": [],
    "evolutions": []
  },
  {
    "id": 1017,
    "name": "Ogerpon",
    "species": "Mask Pokemon",
    "type": ["Grass"],
    "height": "1.20 m",
    "weight": "39.8 kg",
    "abilities": ["Defiant"],
    "eggGroups": ["Undiscovered"],
    "baseStats": {
      "hp": 80,
      "attack": 120,
      "defense": 84,
      "specialAttack": 60,
      "specialDefense": 96,
      "speed": 110,
      "total": 550
    },
    "evYield": [{ "attack": 3 }],
    "forms": [
      {
        "formName": "Ogerpon-Teal",
        "displayName": "Teal Mask Ogerpon",
        "type": ["Grass"],
        "formAbility": ["Defiant"],
        "isBattleForm": false
      },
      {
        "formName": "Ogerpon-Hearthflame",
        "displayName": "Hearthflame Mask Ogerpon",
        "type": ["Grass", "Fire"],
        "formAbility": ["Mold Breaker"],
        "isBattleForm": false
      },
      {
        "formName": "Ogerpon-Wellspring",
        "displayName": "Wellspring Mask Ogerpon",
        "type": ["Grass", "Water"],
        "formAbility": ["Water Absorb"],
        "isBattleForm": false
      },
      {
        "formName": "Ogerpon-Cornerstone",
        "displayName": "Cornerstone Mask Ogerpon",
        "type": ["Grass", "Rock"],
        "formAbility": ["Sturdy"],
        "isBattleForm": false
      },
      {
        "formName": "Ogerpon-Teal-Tera",
        "displayName": "Tera Teal Mask Ogerpon",
        "type": ["Grass"],
        "formAbility": ["Embody Aspect"],
        "isBattleForm": true
      },
      {
        "formName": "Ogerpon-Hearthflame-Tera",
        "displayName": "Tera Hearthflame Mask Ogerpon",
        "type": ["Grass", "Fire"],
        "formAbility": ["Embody Aspect"],
        "isBattleForm": true
      },
      {
        "formName": "Ogerpon-Wellspring-Tera",
        "displayName": "Tera Wellspring Mask Ogerpon",
        "type": ["Grass", "Water"],
        "formAbility": ["Embody Aspect"],
        "isBattleForm": true
      },
      {
        "formName": "Ogerpon-Cornerstone-Tera",
        "displayName": "Tera Cornerstone Mask Ogerpon",
        "type": ["Grass", "Rock"],
        "formAbility": ["Embody Aspect"],
        "isBattleForm": true
      }
    ],
    "preEvolutions": [],
    "evolutions": []
  }
]
