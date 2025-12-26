# Choose Restaurant - Austin, TX

A fun, playful web app that helps you decide where to eat in Austin, Texas! Select your preferences and spin the wheel to get a restaurant recommendation.

## Features

- 🎡 **Wheel of Fortune-style spinner** - Watch the wheel spin before revealing your restaurant
- 🍕 **Cuisine Selection** - Choose from Italian, Mexican, Thai, Japanese, or Other
- 💰 **Price Range** - Select your budget: $, $$, or $$$
- 📍 **Location** - Pick your area: North, South, East, or West Austin
- 🔗 **Direct Links** - Click through to each restaurant's website

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **React Hooks** - State management

## Project Structure

```
ChooseRestaurant/
├── app/
│   ├── page.tsx          # Main page component
│   ├── page.module.css   # Page styles
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Wheel.tsx         # Spinning wheel component
│   └── Wheel.module.css  # Wheel styles
├── data/
│   └── restaurants.ts    # Restaurant data
└── package.json
```

## How It Works

1. User selects cuisine type, cost range, and location
2. Clicks "Spin the Wheel!" button
3. Wheel spins for 2-3 seconds
4. App filters restaurants based on selections
5. Random restaurant from filtered list is displayed
6. User can visit restaurant website or try again

## Future Enhancements

- Integration with Yelp API for reviews
- Additional filtering options
- Save favorite restaurants
- Share recommendations



RESTAURANTS
Uchi


Cuisine: Japanese/Sushi
Cost: $$$
Location: South (South Lamar)
URL: https://uchi.uchirestaurants.com/location/sushi-austin/
Uchiko


Cuisine: Japanese/Sushi
Cost: $$$
Location: North (North Lamar)
URL: https://uchiko.uchirestaurants.com/location/sushi-austin/
Uchibā


Cuisine: Japanese (Izakaya-style)
Cost: $$$
Location: Downtown (2nd Street)
URL: https://uchiba.uchirestaurants.com/location/sushi-austin/
Franklin Barbecue


Cuisine: Barbecue
Cost: $$
Location: East (11th Street)
URL: https://franklinbbq.com/
Terry Black's Barbecue


Cuisine: Barbecue
Cost: $$
Location: South (Barton Springs Road)
URL: https://www.terryblacksbbq.com/
LeRoy and Lewis Barbecue


Cuisine: Barbecue (New School)
Cost: $$
Location: South Austin
URL: https://leroyandlewis.com/
Interstellar BBQ


Cuisine: Barbecue
Cost: $$
Location: North (620 North)
URL: https://interstellarbbq.com/
la Barbecue


Cuisine: Barbecue
Cost: $$
Location: East Austin
URL: https://www.labarbecue.com/
Suerte


Cuisine: Mexican (Contemporary)
Cost: $$
Location: East (East 6th Street)
URL: https://suerteatx.com/
Nixta Taqueria


Cuisine: Mexican (Tacos)
Cost: $
Location: East Austin
URL: https://www.nixtatacos.com/
Paprika


Cuisine: Mexican (Tacos)
Cost: $
Location: Multiple locations
URL: https://www.paprikaaustin.com/
Canje


Cuisine: Caribbean/Guyanese
Cost: $$
Location: East (6th Street)
URL: https://www.canjeatx.com/
Bufalina


Cuisine: Italian (Pizza/Pasta)
Cost: $$
Location: East Austin
URL: https://www.bufalina-austin.com/
Poeta


Cuisine: Italian
Cost: $$$
Location: Central Austin
URL: https://www.poetaaustin.com/
Il Brutto


Cuisine: Italian
Cost: $$
Location: East Austin
URL: https://www.ilbrutto.com/
Intero


Cuisine: Italian
Cost: $$
Location: East Austin
URL: https://www.interorestaurant.com/
Sammie's Italian


Cuisine: Italian
Cost: $$
Location: Downtown
URL: https://www.sammiesitalian.com/
Lenoir


Cuisine: New American
Cost: $$$
Location: South Austin
URL: https://www.lenoirrestaurant.com/
Odd Duck


Cuisine: New American
Cost: $$
Location: South (South Lamar)
URL: https://oddduckaustin.com/
Le Calamar


Cuisine: French-Texan
Cost: $$$
Location: South (South 1st)
URL: https://lecalamaratx.com/
Emmer & Rye


Cuisine: New American
Cost: $$$
Location: Rainey Street
URL: https://emmerandrye.com/
Barley Swine


Cuisine: New American (Farm-to-Table)
Cost: $$$
Location: Burnet Road (North)
URL: https://barleyswine.com/
Hestia


Cuisine: New American (Wood-fired)
Cost: $$$
Location: Downtown
URL: https://hestiaustin.com/
Olamaie


Cuisine: Southern
Cost: $$$
Location: South Austin
URL: https://www.olamaieaustin.com/
Jeffrey's Restaurant


Cuisine: New American
Cost: $$$
Location: West (Clarksville)
URL: https://jeffreysofaustin.com/
Dai Due


Cuisine: New American (Farm-to-Table)
Cost: $$
Location: East Austin
URL: https://daidue.com/
Birdie's


Cuisine: New American
Cost: $$
Location: South Austin
URL: https://www.birdiesaustin.com/
Aba


Cuisine: Mediterranean
Cost: $$$
Location: Downtown (3rd Street)
URL: https://www.abarestaurants.com/austin/
Kalimotxo


Cuisine: Spanish (Tapas)
Cost: $$
Location: East (Arrive Hotel)
URL: https://www.kalimotxoaustin.com/
OKO


Cuisine: Filipino
Cost: $$$
Location: East Austin
URL: https://www.oko-austin.com/
Craft Omakase


Cuisine: Japanese (Omakase)
Cost: $$$
Location: North Austin
URL: https://www.craftomakase.com/
Fabrik


Cuisine: Vegan
Cost: $$
Location: East Austin
URL: https://fabrikatx.com/
Bouldin Creek Cafe


Cuisine: Vegetarian/Vegan
Cost: $
Location: South (South 1st)
URL: https://bouldincreekcafe.com/
Thai Fresh


Cuisine: Thai
Cost: $
Location: South Austin
URL: https://www.thai-fresh.com/
Elizabeth Street Cafe


Cuisine: Vietnamese/French
Cost: $$
Location: South (South 1st)
URL: https://www.elizabethstreetcafe.com/
Qi Austin


Cuisine: Chinese
Cost: $$
Location: East Austin
URL: https://www.qiaustin.com/
Oseyo


Cuisine: Korean
Cost: $$
Location: East (7th Street)
URL: https://www.oseyoaustin.com/
J Carver's


Cuisine: Steakhouse
Cost: $$$
Location: East Austin
URL: https://jcarvers.com/
Dean's Italian Steakhouse


Cuisine: Italian/Steakhouse
Cost: $$$
Location: Downtown (2nd Street)
URL: https://www.deansaustin.com/
Paperboy


Cuisine: New American/Breakfast
Cost: $$
Location: East (11th Street)
URL: https://www.paperboyaustin.com/
COFFEE SHOPS
Houndstooth Coffee


Cuisine: Coffee Shop
Cost: $$
Location: Multiple (Downtown, North Lamar, East MLK)
URL: https://www.houndstoothcoffee.com/
Merit Coffee


Cuisine: Coffee Shop
Cost: $$
Location: Multiple locations
URL: https://www.meritcoffee.com/
Figure 8 Coffee


Cuisine: Coffee Shop
Cost: $
Location: East (Chicon Street)
URL: https://www.figure8coffee.com/
Caffé Medici


Cuisine: Coffee Shop
Cost: $$
Location: Multiple (Clarksville, East Austin)
URL: https://caffemedici.com/
Jo's Coffee


Cuisine: Coffee Shop
Cost: $
Location: Multiple (South Congress flagship)
URL: https://www.joscoffee.com/
Fleet Coffee


Cuisine: Coffee Shop
Cost: $
Location: East Austin (Webberville, Manor)
URL: https://www.fleetcoffeeco.com/
Flattrack Coffee


Cuisine: Coffee Shop
Cost: $
Location: East (Cesar Chavez)
URL: https://www.flattrackcoffee.com/
Barrett's Coffee


Cuisine: Coffee Shop
Cost: $$
Location: North (North Lamar)
URL: https://barrettscoffee.com/
Desnudo Coffee Roasters


Cuisine: Coffee Shop
Cost: $$
Location: Multiple locations
URL: https://desnudocoffeeroasters.com/
Cuvée Coffee


Cuisine: Coffee Shop
Cost: $$
Location: Downtown (Rainey Street)
URL: https://cuveecoffee.com/
Hank's Austin


Cuisine: Coffee Shop
Cost: $$
Location: North (Berkman Drive)
URL: https://www.hanksaustin.com/
Radio Coffee & Beer


Cuisine: Coffee Shop/Bar
Cost: $
Location: Multiple locations
URL: https://radiocoffeeandbeer.com/
Wright Bros. Brew & Brew


Cuisine: Coffee Shop/Bar
Cost: $$
Location: East (San Marcos Street)
URL: https://www.wrightbrosbrewandbrew.com/
Cosmic Coffee + Beer Garden


Cuisine: Coffee Shop/Bar
Cost: $
Location: South and East Austin
URL: https://cosmiccoffeeandbeer.com/
Better Half Coffee & Cocktails


Cuisine: Coffee Shop/Restaurant
Cost: $$
Location: West (Clarksville)
URL: https://www.betterhalfaustin.com/
Proud Mary


Cuisine: Coffee Shop/Restaurant
Cost: $$
Location: South Austin
URL: https://proudmarycoffee.com/
Civil Goat Coffee


Cuisine: Coffee Shop
Cost: $$
Location: Multiple (North and East Austin)
URL: https://www.civilgoatcoffee.com/
Palomino Coffee


Cuisine: Coffee Shop
Cost: $
Location: South Austin
URL: https://www.palominocoffee.com/
Epoch Coffee


Cuisine: Coffee Shop (24-hour at North Loop)
Cost: $
Location: Multiple locations
URL: https://www.epochcoffee.com/
Cenote Coffee


Cuisine: Coffee Shop
Cost: $
Location: East (Cesar Chavez)
URL: https://www.cenotecoffee.com/

