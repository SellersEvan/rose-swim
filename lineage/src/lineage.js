// Add New Memebers here
// If you add a new line made sure to add the ID to the NEW_LINES array
// Make sure each ID for the person is unique
const NEW_LINES = ["matt_schulstad", "dan_skirook", "alex_yaung", "nate_weber", "pat_king"];
const DATA = {

    // LINE 1
    "matt_schulstad": {
        "name": "Matt Schulstad",
        "year": 2015,
        "sons": [
            "andrei_ghejan"
        ]
    },
    "andrei_ghejan": {
        "name": "Andrei Ghejan",
        "year": 2016,
        "sons": [
            "dutch_kipp"
        ]
    },
    "dutch_kipp": {
        "name": "Dutch Kipp",
        "year": 2017,
        "sons": [
            "hayden_walter",
            "evan_sellers"
        ]
    },
    "hayden_walter": {
        "name": "Hayden Walter (Scooter)",
        "year": 2018,
        "sons": [
            "scott_hennarty",
            "logan_mcLaughlin"
        ]
    },
    "scott_hennarty": {
        "name": "Scott Hennarty",
        "year": 2020,
        "sons": []
    },
    "logan_mcLaughlin": {
        "name": "Logan McLaughlin",
        "year": 2019,
        "sons": [
            "zach_eckstrom"
        ]
    },
    "zach_eckstrom": {
        "name": "Zach Eckstrom",
        "year": 2020,
        "sons": [
            "tuan_tran"
        ]
    },
    "tuan_tran": {
        "name": "Tuan Tran",
        "year": 2021,
        "sons": []
    },
    "evan_sellers": {
        "name": "Evan Sellers",
        "year": 2020,
        "sons": [
            "michael_carrabba"
        ]
    },
    "michael_carrabba": {
        "name": "Michael Carrabba",
        "year": 2021,
        "sons": []
    },

    // LINE 2
    "dan_skirook": {
        "name": "Dan Skirook",
        "year": 2014,
        "sons": [
            "connor_bade"
        ]
    },
    "connor_bade": {
        "name": "Connor Bade",
        "year": 2015,
        "sons": [
            "zach_forester"
        ]
    },
    "zach_forester": {
        "name": "Zach Forester",
        "year": 2016,
        "sons": [
            "will_mccoullough",
            "zach_tate"
        ]
    },
    "will_mccoullough": {
        "name": "Will Mccoullough",
        "year": 2017,
        "sons": [
            "will_jordan"
        ]
    },
    "will_jordan": {
        "name": "Will Jordan",
        "year": 2018,
        "sons": []
    },
    "zach_tate": {
        "name": "Zach Tate",
        "year": 2017,
        "sons": [
            "michael_nixon"
        ]
    },
    "michael_nixon": {
        "name": "Michael Nixon",
        "year": 2018,
        "sons": [
            "ryan_nikolic",
            "will_hawkins",
            "noah_lockhart"
        ]
    },
    "ryan_nikolic": {
        "name": "Ryan Nikolic",
        "year": 2019,
        "sons": [
            "jack_kovacs"
        ]
    },
    "jack_kovacs": {
        "name": "Jack Kovacs",
        "year": 2020,
        "sons": []
    },
    "noah_lockhart": {
        "name": "Noah Lockhart",
        "year": 2021,
        "sons": []
    },
    "will_hawkins": {
        "name": "Will Hawkins",
        "year": 2020,
        "sons": []
    },


    // LINE 3
    "alex_yaung": {
        "name": "Alex Yaung",
        "year": 2014,
        "sons": [
            "sean_gish"
        ]
    },
    "sean_gish": {
        "name": "Sean Gish",
        "year": 2015,
        "sons": [
            "noah_boone"
        ]
    },
    "noah_boone": {
        "name": "Noah Boone",
        "year": 2016,
        "sons": [
            "ethan_park"
        ]
    },
    "ethan_park": {
        "name": "Ethan Park",
        "year": 2017,
        "sons": [
            "ben_goldstein"
        ]
    },
    "ben_goldstein": {
        "name": "Ben Goldstein",
        "year": 2018,
        "sons": [
            "zach_junker",
            "christian_buck",
            "ryan_cuda"
        ]
    },
    "zach_junker": {
        "name": "Zach Junker",
        "year": 2019,
        "sons": [
            "antonio_ventresca"
        ]
    },
    "antonio_ventresca": {
        "name": "Antonio Ventresca",
        "year": 2020,
        "sons": [
            "justin_roberts"
        ]
    },
    "justin_roberts": {
        "name": "Justin Roberts",
        "year": 2021,
        "sons": []
    },
    "christian_buck": {
        "name": "Christian Buck",
        "year": 2020,
        "sons": []
    },
    "ryan_cuda": {
        "name": "Ryan Cude",
        "year": 2020,
        "sons": [
            "caleb_munger"
        ]
    },
    "caleb_munger": {
        "name": "Caleb Munger",
        "year": 2021,
        "sons": []
    },


    // LINE 4
    "nate_weber": {
        "name": "Nate Weber",
        "year": 2014,
        "sons": [
            "josh_heidecker"
        ]
    },
    "josh_heidecker": {
        "name": "Josh Heidecker",
        "year": 2015,
        "sons": [
            "nick_barr",
            "zsolt_trukai"
        ]
    },
    "nick_barr": {
        "name": "Nick Barr",
        "year": 2017,
        "sons": [
            "jared_brown"
        ]
    },
    "jared_brown": {
        "name": "Jared Brown",
        "year": 2018,
        "sons": [
            "vineet_ranade"
        ]
    },
    "vineet_ranade": {
        "name": "Vineet Ranade",
        "year": 2021,
        "sons": []
    },
    "zsolt_trukai": {
        "name": "Zsolt Trukai",
        "year": 2016,
        "sons": [
            "william_kemp"
        ]
    },
    "william_kemp": {
        "name": "William Kemp",
        "year": 2017,
        "sons": [
            "colin_beach"
        ]
    },
    "colin_beach": {
        "name": "Colin Beach",
        "year": 2018,
        "sons": [
            "kaden_lindsey"
        ]
    },
    "kaden_lindsey": {
        "name": "Kaden Lindsey",
        "year": 2019,
        "sons": [
            "anthony_napreev",
            "pierce_elling",
            "will_kenyon"
        ]
    },
    "pierce_elling": {
        "name": "Pierce Elling",
        "year": 2019,
        "sons": []
    },
    "will_kenyon": {
        "name": "Will Kenyon",
        "year": 2021,
        "sons": []
    },
    "anthony_napreev": {
        "name": "Anthony Napreev",
        "year": 2021,
        "sons": []
    },


    // LINE 5
    "pat_king": {
        "name": "Pat King",
        "year": 2014,
        "sons": [
            "greg_wenning",
            "nick_jeronis"
        ]
    },
    "greg_wenning": {
        "name": "Greg Wenning",
        "year": 2017,
        "sons": [
            "alex_ketcham"
        ]
    },
    "alex_ketcham": {
        "name": "Alex Ketcham",
        "year": 2018,
        "sons": [
            "jj",
            "josh_harris"
        ]
    },
    "josh_harris": {
        "name": "Josh Harris",
        "year": 2019,
        "sons": []
    },
    "jj": {
        "name": "JJ",
        "year": 2019,
        "sons": []
    },
    "nick_jeronis": {
        "name": "Nick Jeronis",
        "year": 2015,
        "sons": [
            "garrett_beauprez",
            "peter_venema"
        ]
    },
    "garrett_beauprez": {
        "name": "Garrett Beauprez",
        "year": 2016,
        "sons": [
            "sam_flickinger"
        ]
    },
    "sam_flickinger": {
        "name": "Sam Flickinger",
        "year": 2017,
        "sons": [
            "brendan_king"
        ]
    },
    "brendan_king": {
        "name": "Brendan King (BK)",
        "year": 2018,
        "sons": [
            "derick_miller"
        ]
    },
    "derick_miller": {
        "name": "Derick Miller",
        "year": 2019,
        "sons": [
            "tyler_sommer"
        ]
    },
    "tyler_sommer": {
        "name": "Tyler Sommer",
        "year": 2020,
        "sons": [
            "gavin_meier"
        ]
    },
    "gavin_meier": {
        "name": "Gavin Meier",
        "year": 2021,
        "sons": []
    },
    "peter_venema": {
        "name": "Peter Venema",
        "year": 2016,
        "sons": []
    },


};