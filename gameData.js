// A large dataset to support the daily game loop.
window.ALL_CATEGORIES = [
    {
        category: "Largest UK Stadiums (Capacity)",
        description: "Name one of the top 10 largest stadiums in the UK by seating capacity.",
        data: [
            { rank: 1, name: "Wembley Stadium", aliases: ["wembley"] },
            { rank: 2, name: "Twickenham Stadium", aliases: ["twickenham"] },
            { rank: 3, name: "Old Trafford", aliases: ["old trafford", "man utd", "manchester united"] },
            { rank: 4, name: "Principality Stadium", aliases: ["principality", "millennium stadium", "millennium"] },
            { rank: 5, name: "Tottenham Hotspur Stadium", aliases: ["tottenham", "spurs", "new white hart lane"] },
            { rank: 6, name: "London Stadium", aliases: ["london stadium", "west ham", "olympic stadium"] },
            { rank: 7, name: "Anfield", aliases: ["anfield", "liverpool"] },
            { rank: 8, name: "Emirates Stadium", aliases: ["emirates", "arsenal"] },
            { rank: 9, name: "Murrayfield", aliases: ["murrayfield"] },
            { rank: 10, name: "Celtic Park", aliases: ["celtic park", "parkhead", "celtic"] }
        ]
    },
    {
        category: "Most Populous US States",
        description: "Name one of the top 10 US states by population (2020 Census).",
        data: [
            { rank: 1, name: "California", aliases: ["california", "ca"] },
            { rank: 2, name: "Texas", aliases: ["texas", "tx"] },
            { rank: 3, name: "Florida", aliases: ["florida", "fl"] },
            { rank: 4, name: "New York", aliases: ["new york", "ny"] },
            { rank: 5, name: "Pennsylvania", aliases: ["pennsylvania", "pa"] },
            { rank: 6, name: "Illinois", aliases: ["illinois", "il"] },
            { rank: 7, name: "Ohio", aliases: ["ohio", "oh"] },
            { rank: 8, name: "Georgia", aliases: ["georgia", "ga"] },
            { rank: 9, name: "North Carolina", aliases: ["north carolina", "nc"] },
            { rank: 10, name: "Michigan", aliases: ["michigan", "mi"] }
        ]
    },
    {
        category: "Highest Grossing Films (Worldwide)",
        description: "Name one of the top 10 highest-grossing movies of all time (not adjusted for inflation).",
        data: [
            { rank: 1, name: "Avatar", aliases: ["avatar"] },
            { rank: 2, name: "Avengers: Endgame", aliases: ["avengers endgame", "endgame"] },
            { rank: 3, name: "Avatar: The Way of Water", aliases: ["avatar 2", "way of water", "avatar the way of water"] },
            { rank: 4, name: "Titanic", aliases: ["titanic"] },
            { rank: 5, name: "Star Wars: The Force Awakens", aliases: ["force awakens", "star wars 7", "episode 7"] },
            { rank: 6, name: "Avengers: Infinity War", aliases: ["infinity war", "avengers infinity war"] },
            { rank: 7, name: "Spider-Man: No Way Home", aliases: ["no way home", "spiderman no way home", "spider man no way home"] },
            { rank: 8, name: "Jurassic World", aliases: ["jurassic world"] },
            { rank: 9, name: "The Lion King (2019)", aliases: ["lion king", "the lion king"] },
            { rank: 10, name: "The Avengers", aliases: ["avengers", "marvel's the avengers"] }
        ]
    },
    {
        category: "Most Visited Websites (Global)",
        description: "Name one of the top 10 most visited websites worldwide (by monthly traffic).",
        data: [
            { rank: 1, name: "Google", aliases: ["google.com", "google"] },
            { rank: 2, name: "YouTube", aliases: ["youtube.com", "youtube"] },
            { rank: 3, name: "Facebook", aliases: ["facebook.com", "facebook", "fb"] },
            { rank: 4, name: "Instagram", aliases: ["instagram.com", "instagram", "insta"] },
            { rank: 5, name: "X (Twitter)", aliases: ["twitter", "x.com", "x"] },
            { rank: 6, name: "Baidu", aliases: ["baidu.com", "baidu"] },
            { rank: 7, name: "Wikipedia", aliases: ["wikipedia.org", "wikipedia", "wiki"] },
            { rank: 8, name: "Yahoo", aliases: ["yahoo.com", "yahoo"] },
            { rank: 9, name: "Yandex", aliases: ["yandex.ru", "yandex"] },
            { rank: 10, name: "WhatsApp", aliases: ["whatsapp.com", "whatsapp"] }
        ]
    },
    {
        category: "Countries by Population",
        description: "Name one of the top 10 most populous countries in the world.",
        data: [
            { rank: 1, name: "India", aliases: ["india"] },
            { rank: 2, name: "China", aliases: ["china", "prc"] },
            { rank: 3, name: "United States", aliases: ["usa", "us", "america", "united states"] },
            { rank: 4, name: "Indonesia", aliases: ["indonesia"] },
            { rank: 5, name: "Pakistan", aliases: ["pakistan"] },
            { rank: 6, name: "Nigeria", aliases: ["nigeria"] },
            { rank: 7, name: "Brazil", aliases: ["brazil"] },
            { rank: 8, name: "Bangladesh", aliases: ["bangladesh"] },
            { rank: 9, name: "Russia", aliases: ["russia", "russian federation"] },
            { rank: 10, name: "Mexico", aliases: ["mexico"] }
        ]
    },
    {
        category: "Longest Rivers in the World",
        description: "Name one of the top 10 longest rivers in the world.",
        data: [
            { rank: 1, name: "Nile", aliases: ["nile", "river nile"] },
            { rank: 2, name: "Amazon", aliases: ["amazon", "amazon river"] },
            { rank: 3, name: "Yangtze", aliases: ["yangtze", "yangtse"] },
            { rank: 4, name: "Mississippi-Missouri", aliases: ["mississippi", "missouri", "mississippi river"] },
            { rank: 5, name: "Yenisey", aliases: ["yenisey", "yenisei"] },
            { rank: 6, name: "Yellow River", aliases: ["yellow river", "huang he"] },
            { rank: 7, name: "Ob", aliases: ["ob", "ob-irtysh"] },
            { rank: 8, name: "Paraná", aliases: ["parana", "rio de la plata"] },
            { rank: 9, name: "Congo", aliases: ["congo", "congo river"] },
            { rank: 10, name: "Amur", aliases: ["amur", "heilong jiang"] }
        ]
    },
    {
        category: "Planets by Size (Radius)",
        description: "Name one of the 8 planets in our solar system by radius (largest to smallest).",
        data: [
            { rank: 1, name: "Jupiter", aliases: ["jupiter"] },
            { rank: 2, name: "Saturn", aliases: ["saturn"] },
            { rank: 3, name: "Uranus", aliases: ["uranus"] },
            { rank: 4, name: "Neptune", aliases: ["neptune"] },
            { rank: 5, name: "Earth", aliases: ["earth"] },
            { rank: 6, name: "Venus", aliases: ["venus"] },
            { rank: 7, name: "Mars", aliases: ["mars"] },
            { rank: 8, name: "Mercury", aliases: ["mercury"] },
            { rank: 9, name: "Pluto (Dwarf)", aliases: ["pluto"] }, // Included for fun/trivia
            { rank: 10, name: "Eris (Dwarf)", aliases: ["eris"] }
        ]
    },
    {
        category: "Best Selling Video Games (All Time)",
        description: "Name one of the top 10 best-selling video games of all time.",
        data: [
            { rank: 1, name: "Minecraft", aliases: ["minecraft"] },
            { rank: 2, name: "Grand Theft Auto V", aliases: ["gta v", "gta 5", "grand theft auto 5", "grand theft auto v"] },
            { rank: 3, name: "Tetris (EA)", aliases: ["tetris"] },
            { rank: 4, name: "Wii Sports", aliases: ["wii sports"] },
            { rank: 5, name: "PUBG: Battlegrounds", aliases: ["pubg", "playerunknowns battlegrounds"] },
            { rank: 6, name: "Mario Kart 8", aliases: ["mario kart 8", "mk8", "mario kart 8 deluxe"] },
            { rank: 7, name: "Super Mario Bros.", aliases: ["super mario bros", "mario bros"] },
            { rank: 8, name: "Red Dead Redemption 2", aliases: ["rdr2", "red dead 2", "red dead redemption 2"] },
            { rank: 9, name: "Overwatch", aliases: ["overwatch"] },
            { rank: 10, name: "The Witcher 3", aliases: ["witcher 3", "the witcher 3"] }
        ]
    },
    {
        category: "Tallest Mountains (8000m+)",
        description: "Name one of the top 10 highest mountains on Earth (above sea level).",
        data: [
            { rank: 1, name: "Mount Everest", aliases: ["everest", "mt everest"] },
            { rank: 2, name: "K2", aliases: ["k2", "godwin austen"] },
            { rank: 3, name: "Kangchenjunga", aliases: ["kangchenjunga"] },
            { rank: 4, name: "Lhotse", aliases: ["lhotse"] },
            { rank: 5, name: "Makalu", aliases: ["makalu"] },
            { rank: 6, name: "Cho Oyu", aliases: ["cho oyu"] },
            { rank: 7, name: "Dhaulagiri", aliases: ["dhaulagiri"] },
            { rank: 8, name: "Manaslu", aliases: ["manaslu"] },
            { rank: 9, name: "Nanga Parbat", aliases: ["nanga parbat"] },
            { rank: 10, name: "Annapurna", aliases: ["annapurna", "annapurna i"] }
        ]
    },
    {
        category: "Most Spoken Languages (Native)",
        description: "Name one of the top 10 languages by number of native speakers.",
        data: [
            { rank: 1, name: "Mandarin Chinese", aliases: ["mandarin", "chinese"] },
            { rank: 2, name: "Spanish", aliases: ["spanish", "espanol"] },
            { rank: 3, name: "English", aliases: ["english"] },
            { rank: 4, name: "Hindi", aliases: ["hindi"] },
            { rank: 5, name: "Bengali", aliases: ["bengali", "bangla"] },
            { rank: 6, name: "Portuguese", aliases: ["portuguese"] },
            { rank: 7, name: "Russian", aliases: ["russian"] },
            { rank: 8, name: "Japanese", aliases: ["japanese"] },
            { rank: 9, name: "Western Punjabi", aliases: ["punjabi", "western punjabi"] },
            { rank: 10, name: "Marathi", aliases: ["marathi"] }
        ]
    },
    {
        category: "Chemical Elements (Most Abundant in Earth's Crust)",
        description: "Name one of the top 10 most abundant elements in the Earth's crust by mass.",
        data: [
            { rank: 1, name: "Oxygen", aliases: ["oxygen", "o"] },
            { rank: 2, name: "Silicon", aliases: ["silicon", "si"] },
            { rank: 3, name: "Aluminum", aliases: ["aluminum", "aluminium", "al"] },
            { rank: 4, name: "Iron", aliases: ["iron", "fe"] },
            { rank: 5, name: "Calcium", aliases: ["calcium", "ca"] },
            { rank: 6, name: "Sodium", aliases: ["sodium", "na"] },
            { rank: 7, name: "Magnesium", aliases: ["magnesium", "mg"] },
            { rank: 8, name: "Potassium", aliases: ["potassium", "k"] },
            { rank: 9, name: "Titanium", aliases: ["titanium", "ti"] },
            { rank: 10, name: "Hydrogen", aliases: ["hydrogen", "h"] }
        ]
    },
    {
        category: "Most Followed Instagram Accounts",
        description: "Name one of the top 10 most followed individual accounts on Instagram (excluding the brand account).",
        data: [
            { rank: 1, name: "Cristiano Ronaldo", aliases: ["ronaldo", "cristiano"] },
            { rank: 2, name: "Lionel Messi", aliases: ["messi", "leo messi"] },
            { rank: 3, name: "Selena Gomez", aliases: ["selena gomez", "selena"] },
            { rank: 4, name: "Kylie Jenner", aliases: ["kylie", "kylie jenner"] },
            { rank: 5, name: "Dwayne Johnson", aliases: ["the rock", "dwayne johnson", "rock"] },
            { rank: 6, name: "Ariana Grande", aliases: ["ariana", "ariana grande"] },
            { rank: 7, name: "Kim Kardashian", aliases: ["kim k", "kim kardashian"] },
            { rank: 8, name: "Beyoncé", aliases: ["beyonce", "queen b"] },
            { rank: 9, name: "Khloé Kardashian", aliases: ["khloe", "khloe kardashian"] },
            { rank: 10, name: "Justin Bieber", aliases: ["justin bieber", "bieber"] }
        ]
    },
    {
        category: "Largest Islands in the World",
        description: "Name one of the top 10 largest islands by area (excluding continental landmasses).",
        data: [
            { rank: 1, name: "Greenland", aliases: ["greenland"] },
            { rank: 2, name: "New Guinea", aliases: ["new guinea", "papua new guinea"] },
            { rank: 3, name: "Borneo", aliases: ["borneo"] },
            { rank: 4, name: "Madagascar", aliases: ["madagascar"] },
            { rank: 5, name: "Baffin Island", aliases: ["baffin", "baffin island"] },
            { rank: 6, name: "Sumatra", aliases: ["sumatra"] },
            { rank: 7, name: "Honshu", aliases: ["honshu"] },
            { rank: 8, name: "Victoria Island", aliases: ["victoria island"] },
            { rank: 9, name: "Great Britain", aliases: ["great britain", "uk", "britain"] },
            { rank: 10, name: "Ellesmere Island", aliases: ["ellesmere", "ellesmere island"] }
        ]
    },
    {
        category: "Most Academy Awards Wins (Movies)",
        description: "Name one of the movies that has won the most Oscars (including ties).",
        data: [
            { rank: 1, name: "Titanic", aliases: ["titanic"] },
            { rank: 2, name: "Ben-Hur", aliases: ["ben hur", "ben-hur"] },
            { rank: 3, name: "Lord of the Rings: Return of the King", aliases: ["lotr", "return of the king", "lord of the rings"] },
            { rank: 4, name: "West Side Story (1961)", aliases: ["west side story"] },
            { rank: 5, name: "The English Patient", aliases: ["the english patient", "english patient"] },
            { rank: 6, name: "Gigi", aliases: ["gigi"] },
            { rank: 7, name: "The Last Emperor", aliases: ["the last emperor", "last emperor"] },
            { rank: 8, name: "Gone with the Wind", aliases: ["gone with the wind"] },
            { rank: 9, name: "From Here to Eternity", aliases: ["from here to eternity"] },
            { rank: 10, name: "Slumdog Millionaire", aliases: ["slumdog millionaire", "slumdog"] }
        ]
    },
    {
        category: "Largest Countries by Area",
        description: "Name one of the top 10 largest countries in the world by total area.",
        data: [
            { rank: 1, name: "Russia", aliases: ["russia"] },
            { rank: 2, name: "Canada", aliases: ["canada"] },
            { rank: 3, name: "United States", aliases: ["usa", "united states", "america"] },
            { rank: 4, name: "China", aliases: ["china"] },
            { rank: 5, name: "Brazil", aliases: ["brazil"] },
            { rank: 6, name: "Australia", aliases: ["australia"] },
            { rank: 7, name: "India", aliases: ["india"] },
            { rank: 8, name: "Argentina", aliases: ["argentina"] },
            { rank: 9, name: "Kazakhstan", aliases: ["kazakhstan"] },
            { rank: 10, name: "Algeria", aliases: ["algeria"] }
        ]
    },
    {
        category: "Best Selling Albums of All Time",
        description: "Name one of the top 10 best-selling albums in history (claimed sales).",
        data: [
            { rank: 1, name: "Thriller (Michael Jackson)", aliases: ["thriller", "michael jackson"] },
            { rank: 2, name: "Back in Black (AC/DC)", aliases: ["back in black", "acdc", "ac dc"] },
            { rank: 3, name: "The Bodyguard (Whitney Houston)", aliases: ["bodyguard", "the bodyguard", "whitney houston"] },
            { rank: 4, name: "The Dark Side of the Moon (Pink Floyd)", aliases: ["dark side of the moon", "pink floyd"] },
            { rank: 5, name: "Their Greatest Hits (Eagles)", aliases: ["eagles", "greatest hits", "their greatest hits"] },
            { rank: 6, name: "Hotel California (Eagles)", aliases: ["hotel california"] },
            { rank: 7, name: "Come On Over (Shania Twain)", aliases: ["come on over", "shania twain"] },
            { rank: 8, name: "Rumours (Fleetwood Mac)", aliases: ["rumours", "fleetwood mac"] },
            { rank: 9, name: "Saturday Night Fever (Bee Gees)", aliases: ["saturday night fever", "bee gees"] },
            { rank: 10, name: "Led Zeppelin IV", aliases: ["led zeppelin iv", "led zeppelin 4", "stairway to heaven"] }
        ]
    },
    {
        category: "Fastest Land Animals",
        description: "Name one of the top 10 fastest land animals (maximum speed).",
        data: [
            { rank: 1, name: "Cheetah", aliases: ["cheetah"] },
            { rank: 2, name: "Pronghorn Antelope", aliases: ["pronghorn", "antelope"] },
            { rank: 3, name: "Springbok", aliases: ["springbok"] },
            { rank: 4, name: "Wildebeest", aliases: ["wildebeest", "gnu"] },
            { rank: 5, name: "Lion", aliases: ["lion"] },
            { rank: 6, name: "Blackbuck", aliases: ["blackbuck"] },
            { rank: 7, name: "Hare", aliases: ["hare", "brown hare"] },
            { rank: 8, name: "Greyhound", aliases: ["greyhound", "dog"] },
            { rank: 9, name: "Kangaroo", aliases: ["kangaroo", "red kangaroo"] },
            { rank: 10, name: "African Wild Dog", aliases: ["african wild dog", "wild dog"] }
        ]
    },
    {
        category: "Busiest Airports by Passenger Traffic",
        description: "Name one of the top 10 busiest airports in the world (pre-2020 averages).",
        data: [
            { rank: 1, name: "Hartsfield-Jackson Atlanta", aliases: ["atlanta", "atl", "hartsfield"] },
            { rank: 2, name: "Beijing Capital", aliases: ["beijing", "pek"] },
            { rank: 3, name: "Los Angeles International", aliases: ["lax", "los angeles"] },
            { rank: 4, name: "Dubai International", aliases: ["dubai", "dxb"] },
            { rank: 5, name: "Tokyo Haneda", aliases: ["tokyo", "haneda", "hnd"] },
            { rank: 6, name: "O'Hare International", aliases: ["chicago", "ohare", "ord"] },
            { rank: 7, name: "London Heathrow", aliases: ["heathrow", "london", "lhr"] },
            { rank: 8, name: "Shanghai Pudong", aliases: ["shanghai", "pudong", "pvg"] },
            { rank: 9, name: "Paris Charles de Gaulle", aliases: ["paris", "cdg", "charles de gaulle"] },
            { rank: 10, name: "Dallas/Fort Worth", aliases: ["dallas", "dfw", "fort worth"] }
        ]
    },
    {
        category: "Most Expensive Paintings Ever Sold",
        description: "Name one of the top 10 most expensive paintings ever sold at auction.",
        data: [
            { rank: 1, name: "Salvator Mundi (Da Vinci)", aliases: ["salvator mundi", "da vinci"] },
            { rank: 2, name: "Interchange (de Kooning)", aliases: ["interchange", "de kooning"] },
            { rank: 3, name: "The Card Players (Cézanne)", aliases: ["the card players", "card players", "cezanne"] },
            { rank: 4, name: "Nafea Faa Ipoipo (Gauguin)", aliases: ["nafea faa ipoipo", "gauguin"] },
            { rank: 5, name: "Number 17A (Pollock)", aliases: ["number 17a", "pollock"] },
            { rank: 6, name: "No. 6 (Violet, Green and Red) (Rothko)", aliases: ["no 6", "rothko"] },
            { rank: 7, name: "Portraits of Maerten Soolmans/Oopjen Coppit", aliases: ["rembrandt portraits", "rembrandt"] },
            { rank: 8, name: "Les Femmes d'Alger (Picasso)", aliases: ["les femmes dalger", "picasso"] },
            { rank: 9, name: "Nu couché (Modigliani)", aliases: ["nu couche", "modigliani"] },
            { rank: 10, name: "Masterpiece (Lichtenstein)", aliases: ["masterpiece", "lichtenstein"] }
        ]
    },
    {
        category: "Deepest Ocean Trenches",
        description: "Name one of the top 10 deepest trenches in the world.",
        data: [
            { rank: 1, name: "Mariana Trench", aliases: ["mariana", "mariana trench"] },
            { rank: 2, name: "Tonga Trench", aliases: ["tonga", "tonga trench"] },
            { rank: 3, name: "Philippine Trench", aliases: ["philippine", "philippine trench"] },
            { rank: 4, name: "Kuril-Kamchatka Trench", aliases: ["kuril", "kuril kamchatka"] },
            { rank: 5, name: "Kermadec Trench", aliases: ["kermadec", "kermadec trench"] },
            { rank: 6, name: "Izu-Ogasawara Trench", aliases: ["izu", "izu ogasawara"] },
            { rank: 7, name: "Japan Trench", aliases: ["japan", "japan trench"] },
            { rank: 8, name: "Puerto Rico Trench", aliases: ["puerto rico", "puerto rico trench"] },
            { rank: 9, name: "South Sandwich Trench", aliases: ["south sandwich", "sandwich trench"] },
            { rank: 10, name: "Peru-Chile Trench", aliases: ["peru chile", "atacama trench"] }
        ]
    },
    {
        category: "Largest Companies by Market Cap (Tech)",
        description: "Name one of the top 10 largest technology companies by market cap (approximate recent/historical giants).",
        data: [
            { rank: 1, name: "Apple", aliases: ["apple", "aapl"] },
            { rank: 2, name: "Microsoft", aliases: ["microsoft", "msft"] },
            { rank: 3, name: "Alphabet (Google)", aliases: ["google", "alphabet", "goog"] },
            { rank: 4, name: "Amazon", aliases: ["amazon", "amzn"] },
            { rank: 5, name: "NVIDIA", aliases: ["nvidia", "nvda"] },
            { rank: 6, name: "Meta (Facebook)", aliases: ["meta", "facebook", "fb"] },
            { rank: 7, name: "Tesla", aliases: ["tesla", "tsla"] },
            { rank: 8, name: "TSMC", aliases: ["tsmc", "taiwan semiconductor"] },
            { rank: 9, name: "Tencent", aliases: ["tencent"] },
            { rank: 10, name: "Samsung", aliases: ["samsung"] }
        ]
    },
    {
        category: "Most Grand Slam Wins (Men's Tennis)",
        description: "Name one of the top male tennis players by Grand Slam singles titles.",
        data: [
            { rank: 1, name: "Novak Djokovic", aliases: ["djokovic", "novak"] },
            { rank: 2, name: "Rafael Nadal", aliases: ["nadal", "rafa"] },
            { rank: 3, name: "Roger Federer", aliases: ["federer", "roger"] },
            { rank: 4, name: "Pete Sampras", aliases: ["sampras"] },
            { rank: 5, name: "Roy Emerson", aliases: ["emerson", "roy emerson"] },
            { rank: 6, name: "Rod Laver", aliases: ["laver", "rod laver"] },
            { rank: 7, name: "Bjorn Borg", aliases: ["borg", "bjorn borg"] },
            { rank: 8, name: "Bill Tilden", aliases: ["tilden", "bill tilden"] },
            { rank: 9, name: "Jimmy Connors", aliases: ["connors", "jimmy connors"] },
            { rank: 10, name: "Andre Agassi", aliases: ["agassi", "andre agassi"] }
        ]
    },
     {
        category: "Smallest Countries by Area",
        description: "Name one of the top 10 smallest sovereign states in the world.",
        data: [
            { rank: 1, name: "Vatican City", aliases: ["vatican", "holy see"] },
            { rank: 2, name: "Monaco", aliases: ["monaco"] },
            { rank: 3, name: "Nauru", aliases: ["nauru"] },
            { rank: 4, name: "Tuvalu", aliases: ["tuvalu"] },
            { rank: 5, name: "San Marino", aliases: ["san marino"] },
            { rank: 6, name: "Liechtenstein", aliases: ["liechtenstein"] },
            { rank: 7, name: "Marshall Islands", aliases: ["marshall islands"] },
            { rank: 8, name: "Saint Kitts and Nevis", aliases: ["st kitts", "saint kitts"] },
            { rank: 9, name: "Maldives", aliases: ["maldives"] },
            { rank: 10, name: "Malta", aliases: ["malta"] }
        ]
    },
    {
        category: "Largest Deserts",
        description: "Name one of the top 10 largest deserts in the world (including polar deserts).",
        data: [
            { rank: 1, name: "Antarctic Desert", aliases: ["antarctic", "antarctica"] },
            { rank: 2, name: "Arctic Desert", aliases: ["arctic"] },
            { rank: 3, name: "Sahara", aliases: ["sahara", "sahara desert"] },
            { rank: 4, name: "Great Australian", aliases: ["australian", "great australian"] },
            { rank: 5, name: "Arabian", aliases: ["arabian", "arabian desert"] },
            { rank: 6, name: "Gobi", aliases: ["gobi", "gobi desert"] },
            { rank: 7, name: "Kalahari", aliases: ["kalahari", "kalahari desert"] },
            { rank: 8, name: "Patagonian", aliases: ["patagonian", "patagonian desert"] },
            { rank: 9, name: "Syrian", aliases: ["syrian", "syrian desert"] },
            { rank: 10, name: "Great Basin", aliases: ["great basin", "great basin desert"] }
        ]
    },
    {
        category: "Most Streamed Songs on Spotify",
        description: "Name one of the top 10 most streamed songs on Spotify of all time.",
        data: [
            { rank: 1, name: "Blinding Lights (The Weeknd)", aliases: ["blinding lights", "the weeknd"] },
            { rank: 2, name: "Shape of You (Ed Sheeran)", aliases: ["shape of you", "ed sheeran"] },
            { rank: 3, name: "Someone You Loved (Lewis Capaldi)", aliases: ["someone you loved", "lewis capaldi"] },
            { rank: 4, name: "Sunflower (Post Malone)", aliases: ["sunflower", "post malone"] },
            { rank: 5, name: "Starboy (The Weeknd)", aliases: ["starboy"] },
            { rank: 6, name: "As It Was (Harry Styles)", aliases: ["as it was", "harry styles"] },
            { rank: 7, name: "One Dance (Drake)", aliases: ["one dance", "drake"] },
            { rank: 8, name: "Stay (Kid Laroi & Justin Bieber)", aliases: ["stay"] },
            { rank: 9, name: "Believer (Imagine Dragons)", aliases: ["believer", "imagine dragons"] },
            { rank: 10, name: "Closer (The Chainsmokers)", aliases: ["closer", "chainsmokers"] }
        ]
    },
    {
        category: "Highest Grossing Animated Films",
        description: "Name one of the top 10 highest-grossing animated films of all time.",
        data: [
            { rank: 1, name: "Inside Out 2", aliases: ["inside out 2"] },
            { rank: 2, name: "The Lion King (2019)", aliases: ["lion king", "the lion king"] },
            { rank: 3, name: "Frozen II", aliases: ["frozen 2", "frozen ii"] },
            { rank: 4, name: "The Super Mario Bros. Movie", aliases: ["mario", "super mario", "mario bros"] },
            { rank: 5, name: "Frozen", aliases: ["frozen"] },
            { rank: 6, name: "Incredibles 2", aliases: ["incredibles 2", "the incredibles 2"] },
            { rank: 7, name: "Minions", aliases: ["minions"] },
            { rank: 8, name: "Toy Story 4", aliases: ["toy story 4"] },
            { rank: 9, name: "Toy Story 3", aliases: ["toy story 3"] },
            { rank: 10, name: "Despicable Me 3", aliases: ["despicable me 3"] }
        ]
    },
    {
        category: "Most Popular Dog Breeds (US)",
        description: "Name one of the top 10 most popular dog breeds in the US (AKC 2023).",
        data: [
            { rank: 1, name: "French Bulldog", aliases: ["frenchie", "french bulldog"] },
            { rank: 2, name: "Labrador Retriever", aliases: ["lab", "labrador", "labrador retriever"] },
            { rank: 3, name: "Golden Retriever", aliases: ["golden", "golden retriever"] },
            { rank: 4, name: "German Shepherd", aliases: ["german shepherd", "gsd"] },
            { rank: 5, name: "Poodle", aliases: ["poodle"] },
            { rank: 6, name: "Bulldog", aliases: ["bulldog", "english bulldog"] },
            { rank: 7, name: "Rottweiler", aliases: ["rottweiler", "rottie"] },
            { rank: 8, name: "Beagle", aliases: ["beagle"] },
            { rank: 9, name: "Dachshund", aliases: ["dachshund", "sausage dog", "wiener dog"] },
            { rank: 10, name: "German Shorthaired Pointer", aliases: ["gsp", "german shorthaired pointer"] }
        ]
    },
    {
        category: "Largest Moons in Solar System",
        description: "Name one of the top 10 largest moons in our solar system.",
        data: [
            { rank: 1, name: "Ganymede (Jupiter)", aliases: ["ganymede"] },
            { rank: 2, name: "Titan (Saturn)", aliases: ["titan"] },
            { rank: 3, name: "Callisto (Jupiter)", aliases: ["callisto"] },
            { rank: 4, name: "Io (Jupiter)", aliases: ["io"] },
            { rank: 5, name: "Moon (Earth)", aliases: ["moon", "the moon", "luna"] },
            { rank: 6, name: "Europa (Jupiter)", aliases: ["europa"] },
            { rank: 7, name: "Triton (Neptune)", aliases: ["triton"] },
            { rank: 8, name: "Titania (Uranus)", aliases: ["titania"] },
            { rank: 9, name: "Rhea (Saturn)", aliases: ["rhea"] },
            { rank: 10, name: "Oberon (Uranus)", aliases: ["oberon"] }
        ]
    },
    {
        category: "Deadliest Animals (Human Deaths)",
        description: "Name one of the top animals causing the most human deaths per year.",
        data: [
            { rank: 1, name: "Mosquito", aliases: ["mosquito"] },
            { rank: 2, name: "Human", aliases: ["human", "humans", "people"] },
            { rank: 3, name: "Snake", aliases: ["snake", "snakes"] },
            { rank: 4, name: "Dog", aliases: ["dog", "dogs"] },
            { rank: 5, name: "Tsetse Fly", aliases: ["tsetse fly", "fly"] },
            { rank: 6, name: "Assassin Bug", aliases: ["assassin bug", "kissing bug"] },
            { rank: 7, name: "Freshwater Snail", aliases: ["snail", "freshwater snail"] },
            { rank: 8, name: "Ascaris Roundworm", aliases: ["roundworm", "ascaris"] },
            { rank: 9, name: "Tapeworm", aliases: ["tapeworm"] },
            { rank: 10, name: "Crocodile", aliases: ["crocodile", "croc"] }
        ]
    },
    {
        category: "Most Visited Cities (International)",
        description: "Name one of the top 10 most visited cities by international arrivals (Euromonitor 2023).",
        data: [
            { rank: 1, name: "Istanbul", aliases: ["istanbul"] },
            { rank: 2, name: "London", aliases: ["london"] },
            { rank: 3, name: "Dubai", aliases: ["dubai"] },
            { rank: 4, name: "Antalya", aliases: ["antalya"] },
            { rank: 5, name: "Paris", aliases: ["paris"] },
            { rank: 6, name: "Hong Kong", aliases: ["hong kong"] },
            { rank: 7, name: "Bangkok", aliases: ["bangkok"] },
            { rank: 8, name: "New York City", aliases: ["nyc", "new york", "new york city"] },
            { rank: 9, name: "Cancun", aliases: ["cancun"] },
            { rank: 10, name: "Mecca", aliases: ["mecca", "makkah"] }
        ]
    },
    {
        category: "Hardest Minerals (Mohs Scale)",
        description: "Name one of the 10 reference minerals on the Mohs scale of hardness (10=Hardest).",
        data: [
            { rank: 1, name: "Diamond", aliases: ["diamond"] },
            { rank: 2, name: "Corundum", aliases: ["corundum", "ruby", "sapphire"] },
            { rank: 3, name: "Topaz", aliases: ["topaz"] },
            { rank: 4, name: "Quartz", aliases: ["quartz"] },
            { rank: 5, name: "Orthoclase Feldspar", aliases: ["orthoclase", "feldspar"] },
            { rank: 6, name: "Apatite", aliases: ["apatite"] },
            { rank: 7, name: "Fluorite", aliases: ["fluorite"] },
            { rank: 8, name: "Calcite", aliases: ["calcite"] },
            { rank: 9, name: "Gypsum", aliases: ["gypsum"] },
            { rank: 10, name: "Talc", aliases: ["talc"] }
        ]
    },
    {
        category: "Poker Hands",
        description: "Name one of the standard poker hands in order of rank (highest to lowest).",
        data: [
            { rank: 1, name: "Royal Flush", aliases: ["royal flush"] },
            { rank: 2, name: "Straight Flush", aliases: ["straight flush"] },
            { rank: 3, name: "Four of a Kind", aliases: ["four of a kind", "quads"] },
            { rank: 4, name: "Full House", aliases: ["full house", "boat"] },
            { rank: 5, name: "Flush", aliases: ["flush"] },
            { rank: 6, name: "Straight", aliases: ["straight"] },
            { rank: 7, name: "Three of a Kind", aliases: ["three of a kind", "trips", "set"] },
            { rank: 8, name: "Two Pair", aliases: ["two pair"] },
            { rank: 9, name: "One Pair", aliases: ["one pair", "pair"] },
            { rank: 10, name: "High Card", aliases: ["high card"] }
        ]
    },
    {
        category: "Largest Landlocked Countries",
        description: "Name one of the top 10 largest landlocked countries by area.",
        data: [
            { rank: 1, name: "Kazakhstan", aliases: ["kazakhstan"] },
            { rank: 2, name: "Mongolia", aliases: ["mongolia"] },
            { rank: 3, name: "Chad", aliases: ["chad"] },
            { rank: 4, name: "Niger", aliases: ["niger"] },
            { rank: 5, name: "Mali", aliases: ["mali"] },
            { rank: 6, name: "Ethiopia", aliases: ["ethiopia"] },
            { rank: 7, name: "Bolivia", aliases: ["bolivia"] },
            { rank: 8, name: "Zambia", aliases: ["zambia"] },
            { rank: 9, name: "Afghanistan", aliases: ["afghanistan"] },
            { rank: 10, name: "Central African Republic", aliases: ["car", "central african republic"] }
        ]
    },
    {
        category: "Best Selling Game Consoles",
        description: "Name one of the top 10 best-selling video game consoles of all time.",
        data: [
            { rank: 1, name: "PlayStation 2", aliases: ["ps2", "playstation 2", "sony playstation 2"] },
            { rank: 2, name: "Nintendo DS", aliases: ["ds", "nintendo ds"] },
            { rank: 3, name: "Nintendo Switch", aliases: ["switch", "nintendo switch"] },
            { rank: 4, name: "Game Boy / Color", aliases: ["game boy", "gameboy", "gb", "gbc"] },
            { rank: 5, name: "PlayStation 4", aliases: ["ps4", "playstation 4"] },
            { rank: 6, name: "PlayStation", aliases: ["ps1", "psx", "playstation", "psone"] },
            { rank: 7, name: "Wii", aliases: ["wii", "nintendo wii"] },
            { rank: 8, name: "PlayStation 3", aliases: ["ps3", "playstation 3"] },
            { rank: 9, name: "Xbox 360", aliases: ["xbox 360", "360"] },
            { rank: 10, name: "Game Boy Advance", aliases: ["gba", "game boy advance"] }
        ]
    },
    {
        category: "Most Won Super Bowls (Teams)",
        description: "Name one of the NFL teams with the most Super Bowl victories.",
        data: [
            { rank: 1, name: "New England Patriots", aliases: ["patriots", "pats"] },
            { rank: 2, name: "Pittsburgh Steelers", aliases: ["steelers"] },
            { rank: 3, name: "Dallas Cowboys", aliases: ["cowboys"] },
            { rank: 4, name: "San Francisco 49ers", aliases: ["49ers", "niners"] },
            { rank: 5, name: "Green Bay Packers", aliases: ["packers"] },
            { rank: 6, name: "New York Giants", aliases: ["giants", "ny giants"] },
            { rank: 7, name: "Denver Broncos", aliases: ["broncos"] },
            { rank: 8, name: "Las Vegas Raiders", aliases: ["raiders", "oakland raiders", "la raiders"] },
            { rank: 9, name: "Washington Commanders", aliases: ["commanders", "redskins", "football team"] },
            { rank: 10, name: "Kansas City Chiefs", aliases: ["chiefs"] }
        ]
    },
    {
        category: "Largest Coffee Producing Countries",
        description: "Name one of the top 10 coffee producing countries in the world.",
        data: [
            { rank: 1, name: "Brazil", aliases: ["brazil"] },
            { rank: 2, name: "Vietnam", aliases: ["vietnam"] },
            { rank: 3, name: "Colombia", aliases: ["colombia"] },
            { rank: 4, name: "Indonesia", aliases: ["indonesia"] },
            { rank: 5, name: "Ethiopia", aliases: ["ethiopia"] },
            { rank: 6, name: "Honduras", aliases: ["honduras"] },
            { rank: 7, name: "India", aliases: ["india"] },
            { rank: 8, name: "Uganda", aliases: ["uganda"] },
            { rank: 9, name: "Mexico", aliases: ["mexico"] },
            { rank: 10, name: "Guatemala", aliases: ["guatemala"] }
        ]
    },
    {
        category: "Most Common Surnames (USA)",
        description: "Name one of the top 10 most common surnames in the United States (2010 Census).",
        data: [
            { rank: 1, name: "Smith", aliases: ["smith"] },
            { rank: 2, name: "Johnson", aliases: ["johnson"] },
            { rank: 3, name: "Williams", aliases: ["williams"] },
            { rank: 4, name: "Brown", aliases: ["brown"] },
            { rank: 5, name: "Jones", aliases: ["jones"] },
            { rank: 6, name: "Garcia", aliases: ["garcia"] },
            { rank: 7, name: "Miller", aliases: ["miller"] },
            { rank: 8, name: "Davis", aliases: ["davis"] },
            { rank: 9, name: "Rodriguez", aliases: ["rodriguez"] },
            { rank: 10, name: "Martinez", aliases: ["martinez"] }
        ]
    },
    {
        category: "Fastest Roller Coasters",
        description: "Name one of the top 10 fastest roller coasters in the world.",
        data: [
            { rank: 1, name: "Formula Rossa", aliases: ["formula rossa"] },
            { rank: 2, name: "Kingda Ka", aliases: ["kingda ka"] },
            { rank: 3, name: "Top Thrill 2", aliases: ["top thrill 2", "top thrill dragster", "dragster"] },
            { rank: 4, name: "Red Force", aliases: ["red force"] },
            { rank: 5, name: "Superman: Escape from Krypton", aliases: ["superman", "escape from krypton"] },
            { rank: 6, name: "Steel Dragon 2000", aliases: ["steel dragon", "steel dragon 2000"] },
            { rank: 7, name: "Fury 325", aliases: ["fury 325", "fury"] },
            { rank: 8, name: "Millennium Force", aliases: ["millennium force"] },
            { rank: 9, name: "Leviathan", aliases: ["leviathan"] },
            { rank: 10, name: "Intimidator 305", aliases: ["intimidator", "intimidator 305", "i305", "project 305"] }
        ]
    },
    {
        category: "Largest US Stadiums (Capacity)",
        description: "Name one of the top 10 largest stadiums in the US by capacity.",
        data: [
            { rank: 1, name: "Michigan Stadium", aliases: ["michigan", "big house", "michigan stadium"] },
            { rank: 2, name: "Beaver Stadium", aliases: ["beaver stadium", "penn state"] },
            { rank: 3, name: "Ohio Stadium", aliases: ["ohio stadium", "horseshoe", "ohio state"] },
            { rank: 4, name: "Kyle Field", aliases: ["kyle field", "texas a&m"] },
            { rank: 5, name: "Tiger Stadium", aliases: ["tiger stadium", "lsu"] },
            { rank: 6, name: "Neyland Stadium", aliases: ["neyland", "neyland stadium", "tennessee"] },
            { rank: 7, name: "Bryant-Denny Stadium", aliases: ["bryant denny", "alabama"] },
            { rank: 8, name: "Darrell K Royal-Texas Memorial", aliases: ["dkr", "texas memorial", "texas"] },
            { rank: 9, name: "Sanford Stadium", aliases: ["sanford", "georgia"] },
            { rank: 10, name: "Rose Bowl", aliases: ["rose bowl"] }
        ]
    },
    {
        category: "Most Subscribed YouTubers",
        description: "Name one of the top 10 most subscribed YouTube channels (Individuals/Brands).",
        data: [
            { rank: 1, name: "MrBeast", aliases: ["mrbeast", "jimmy donaldson"] },
            { rank: 2, name: "T-Series", aliases: ["t series", "tseries"] },
            { rank: 3, name: "Cocomelon", aliases: ["cocomelon"] },
            { rank: 4, name: "SET India", aliases: ["set india", "sony entertainment"] },
            { rank: 5, name: "Kids Diana Show", aliases: ["kids diana show", "diana"] },
            { rank: 6, name: "PewDiePie", aliases: ["pewdiepie", "felix kjellberg"] },
            { rank: 7, name: "Like Nastya", aliases: ["like nastya", "nastya"] },
            { rank: 8, name: "Vlad and Niki", aliases: ["vlad and niki"] },
            { rank: 9, name: "Zee Music Company", aliases: ["zee music", "zee music company"] },
            { rank: 10, name: "WWE", aliases: ["wwe", "world wrestling entertainment"] }
        ]
    },
    {
        category: "Highest Grossing Touring Artists",
        description: "Name one of the top 10 highest-grossing concert tours/artists of all time.",
        data: [
            { rank: 1, name: "Taylor Swift", aliases: ["taylor swift"] },
            { rank: 2, name: "Coldplay", aliases: ["coldplay"] },
            { rank: 3, name: "Elton John", aliases: ["elton john"] },
            { rank: 4, name: "Ed Sheeran", aliases: ["ed sheeran"] },
            { rank: 5, name: "U2", aliases: ["u2"] },
            { rank: 6, name: "Harry Styles", aliases: ["harry styles"] },
            { rank: 7, name: "Guns N' Roses", aliases: ["guns n roses", "gnr"] },
            { rank: 8, name: "Beyoncé", aliases: ["beyonce"] },
            { rank: 9, name: "The Rolling Stones", aliases: ["rolling stones", "stones"] },
            { rank: 10, name: "AC/DC", aliases: ["acdc", "ac dc"] }
        ]
    },
    {
        category: "English Football Champions (All Time)",
        description: "Name one of the clubs with the most English League titles (First Div + Premier League).",
        data: [
            { rank: 1, name: "Manchester United", aliases: ["man utd", "manchester united", "united"] },
            { rank: 2, name: "Liverpool", aliases: ["liverpool"] },
            { rank: 3, name: "Arsenal", aliases: ["arsenal"] },
            { rank: 4, name: "Everton", aliases: ["everton"] },
            { rank: 5, name: "Manchester City", aliases: ["man city", "manchester city", "city"] },
            { rank: 6, name: "Aston Villa", aliases: ["aston villa", "villa"] },
            { rank: 7, name: "Sunderland", aliases: ["sunderland"] },
            { rank: 8, name: "Chelsea", aliases: ["chelsea"] },
            { rank: 9, name: "Newcastle United", aliases: ["newcastle", "newcastle united", "toon"] },
            { rank: 10, name: "Sheffield Wednesday", aliases: ["sheffield wednesday", "wednesday"] }
        ]
    },
    {
        category: "Largest Pizza Chains (Global)",
        description: "Name one of the top 10 largest pizza chains by number of locations.",
        data: [
            { rank: 1, name: "Domino's", aliases: ["dominos", "domino's pizza"] },
            { rank: 2, name: "Pizza Hut", aliases: ["pizza hut"] },
            { rank: 3, name: "Little Caesars", aliases: ["little caesars"] },
            { rank: 4, name: "Papa John's", aliases: ["papa johns", "papa john's"] },
            { rank: 5, name: "Telepizza", aliases: ["telepizza"] },
            { rank: 6, name: "PizzaExpress", aliases: ["pizzaexpress", "pizza express"] },
            { rank: 7, name: "Papa Murphy's", aliases: ["papa murphys"] },
            { rank: 8, name: "Sbarro", aliases: ["sbarro"] },
            { rank: 9, name: "Marco's Pizza", aliases: ["marcos", "marcos pizza"] },
            { rank: 10, name: "Chuck E. Cheese", aliases: ["chuck e cheese", "chuck e cheeses"] }
        ]
    }
];
