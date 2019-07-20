const albumList = [
    {
        "artist": "Foreigner",
        "album": "4",
        "year": 1981,
        "uri": "spotify:album:2Pw51hAGvWpTA3AYl2WVuu",
        "listPosition": 100
    },
    {
        "artist": "Tom Petty And The Heartbreakers",
        "album": "Tom Petty And The Heartbreakers",
        "year": 1976,
        "uri": "spotify:album:6TLTd0P2CUI0Q29AQ1LyFi",
        "listPosition": 99
    },
    {
        "artist": "Megadeth",
        "album": "Peace Sells... But Who's Buying?",
        "year": 1986,
        "uri": "spotify:album:4U8ZF5zDIRy4lBnnXBN2uO",
        "listPosition": 98
    },
    {
        "artist": "Pink Floyd",
        "album": "The Piper At The Gates Of Dawn",
        "year": 1967,
        "uri": "spotify:album:0Fke5eiQ6lszQHlwiFygqn",
        "listPosition": 97
    },
    {
        "aritst": "Soundgarden",
        "album": "Superunknown",
        "year": 1994,
        "uri": "spotify:album:4K8bxkPDa5HENw0TK7WxJh",
        "listPosition": 96
    },
    {
        "artist": "Genesis",
        "album": "The Lamb Lies Down On Broadway",
        "year": 1974,
        "uri": "spotify:album:6kuKRIu6YGYxQLwasTL3Gx",
        "listPosition": 95
    },
    {
        "artist": "Black Sabbath",
        "album": "Sabotage",
        "year": 1975,
        "uri": "spotify:album:2hurj4babJXt1cIxmYFqqo",
        "listPosition": 94
    },
    {
        "artist": "Cheap Trick",
        "album": "at Budokan",
        "year": 1978,
        "uri": "spotify:album:5ttDbNMKXczvp0Z8QRgKs6",
        "listPosition": 93
    },
    {
        "artist": "The Rolling Stones",
        "album": "Beggars Banquet",
        "year": 1968,
        "uri": "spotify:album:6OHri5qNxwCdVSdyCslspd",
        "listPosition": 92
    },
    {
        "artist": "ZZ Tops",
        "album": "Tres Hombres",
        "year": 1973,
        "uri": "spotify:album:0Em8m9kRctyH9S3MTXAHvY",
        "listPosition": 91
    },
    {
        "artist": "Red Hot Chili Peppers",
        "album": "Blood Sugar Sex Magik",
        "year": 1991,
        "uri": "spotify:album:30Perjew8HyGkdSmqguYyg",
        "listPosition": 90
    },
    {
        "artist": "Kiss",
        "album": "Destroyer",
        "year": 1976,
        "uri": "",
        "listPosition": 89
    },
    {
        "artist": "David Bowie",
        "album": "Hunky Dory",
        "year": 1971,
        "uri": "",
        "listPosition": 88
    },
    {
        "artist": "Yes",
        "album": "Fragile",
        "year": 1971,
        "uri": "",
        "listPosition": 87
    },
    {
        "artist": "Bob Dylan",
        "album": "Highway 61 Revisited",
        "year": 1965,
        "uri": "",
        "listPosition": 86
    },
    {
        "artist": "Queensrÿche",
        "album": "Operation: Mindcrime",
        "year": 1988,
        "uri": "",
        "listPosition": 85
    },
    {
        "artist": "Rage Against The Machine",
        "album": "Rage Against The Machine",
        "year": 1992,
        "uri": "",
        "listPosition": 84
    },
    {
        "artist": "Whitesnake",
        "album": "1987",
        "year": 1987,
        "uri": "",
        "listPosition": 83,
    },
    {
        "artist": "Deep Purple",
        "album": "Burn",
        "year": 1974,
        "uri": "",
        "listPosition": 82,
    },
    {
        "artist": "Ramones",
        "album": "Ramones",
        "year": 1976,
        "uri": "",
        "listPosition": 81
    },
    {
        "artist": "Alice Cooper",
        "album": "Billion Dollar Babies",
        "year": 1973,
        "uri": "",
        "listPosition": 80
    },
    {
        "artist": "Radiohead",
        "album": "OK Computer",
        "year": 1997,
        "uri": "",
        "listPosition": 79
    },
    {
        "artist": "Iron Maiden",
        "album": "Seventh Son Of A Seventh Son",
        "year": 1988,
        "uri": "",
        "listPosition": 78
    },
    {
        "artist": "The Who",
        "album": "Tommy",
        "year": 1969,
        "uri": "",
        "listPosition": 77
    },
    {
        "artist": "Bon Jovi",
        "album": "Slippery When Wet",
        "year": 1986,
        "uri": "",
        "listPosition": 76
    },
    {
        "artist": "Dire Straits",
        "album": "Brothers In Arms",
        "year": 1985,
        "uri": "",
        "listPosition": 75
    },
    {
        "artist": "AC/DC",
        "album": "Powerage",
        "year": 1978,
        "uri": "",
        "listPosition": 74
    },
    {
        "artist": "Bruce Springsteen",
        "album": "Born In The USA",
        "year": 1984,
        "uri": "",
        "listPosition": 73
    },
    {
        "artist": "Cream",
        "album": "Disraeli Gears",
        "year": 1967,
        "uri": "",
        "listPosition": 72
    },
    {
        "artist": "Kiss",
        "album": "Alive!",
        "year": 1975,
        "uri": "",
        "listPosition": 71
    },
    {
        "artist": "UFO",
        "album": "Strangers In The Night",
        "year": 1979,
        "uri": "",
        "listPosition": 70
    },
    {
        "artist": "Jimi Hendrix Experience",
        "album": "Axis: Bold As Love",
        "year": 1967,
        "uri": "",
        "listPosition": 69
    },
    {
        "artist": "Lynyrd Skynyrd",
        "album": "(pronounced 'leh-'nérd 'skin-'nérd)",
        "year": 1973,
        "uri": "",
        "listPosition": 68
    },
    {
        "artist": "The Who",
        "album": "Live At Leeds",
        "year": 1970,
        "uri": "",
        "listPosition": 67
    },
    {
        "artist": "Bad Company",
        "album": "Bad Company",
        "year": 1974,
        "uri": "",
        "listPosition": 66
    },
    {
        "artist": "Thin Lizzy",
        "album": "Live And Dangerous",
        "year": 1978,
        "uri": "",
        "listPosition": 65
    },
    {
        "artist": "Derek & The Dominos",
        "album": "Layla And Other Assorted Love Songs",
        "year": 1970,
        "uri": "",
        "listPosition": 64
    },
    {
        "artist": "Motörhead",
        "album": "Ace Of Spades",
        "year": 1980,
        "uri": "",
        "listPosition": 63
    },
    {
        "artist": "Deep Purple",
        "album": "In Rock",
        "year": 1970,
        "uri": "",
        "listPosition": 62
    },
    {
        "artist": "AC/DC",
        "album": "Let There Be Rock",
        "year": 1977,
        "uri": "",
        "listPosition": 61
    },
    {
        "artist": "Def Leppard",
        "album": "Pyromania",
        "year": 1983,
        "uri": "",
        "listPosition": 60
    },
    {
        "artist": "King Crimson",
        "album": "In The Court Of The Crimson King",
        "year": 1969,
        "uri": "",
        "listPosition": 59
    },
    {
        "artist": "The Who",
        "album": "Quadrophenia",
        "year": 1973,
        "uri": "",
        "listPosition": 58
    },
    {
        "artist": "Aerosmith",
        "album": "Rocks",
        "year": 1976,
        "uri": "",
        "listPosition": 57
    },
    {
        "artist": "Jethro Tull",
        "album": "Aqualung",
        "year": 1971,
        "uri": "",
        "listPositions": 56
    },
    {
        "artist": "Thin Lizzy",
        "album": "Jailbreak",
        "year": 1976,
        "uri": "",
        "listPositions": 55
    },
    {
        "artist": "Judas Priest",
        "album": "British Steel",
        "year": 1980,
        "uri": "",
        "listPosition": 54
    },
    {
        "artist": "The Beach Boys",
        "album": "Pet Sounds",
        "year": 1966,
        "uri": "",
        "listPosition": 53
    },
    {
        "artist": "Bruce Springsteen",
        "album": "Born To Run",
        "year": 1975,
        "uri": "",
        "listPosition": 52
    },
    {
        "artist": "Sex Pistols",
        "album": "Never Mind The Bollocks, Here's The Sex Pistols",
        "year": 1977,
        "uri": "",
        "listPosition": 51,
    },
    {
        "artist": "Prince",
        "album": "Purple Rain",
        "year": 1984,
        "uri": "",
        "listPosition": 50
    }
]

export default albumList;