import { alcohol } from './alcohol';

interface DrinksInterface {
    wine: alcohol[];
    beer: alcohol[];
}

export class Drinks implements DrinksInterface {
    public wine = [
        new alcohol("VOLCANIC HILLS",  "Magma White", "5oz 8.75 | Bottle 35", "white"),
        new alcohol("MAYHEM",  "Reisling", "5oz 10.50 | Bottle 43", "white"),
        new alcohol("DIRTY LAUNDRY", "Sauvignon Blanc", "5oz 10 | Bottle 40", "white"),
        new alcohol("HESTER CREEK", "Pinot Blanc", "5oz 10 | Bottle 40", "white"),
        new alcohol("ARROWLEAF CELLARS", "Rosé", "5oz 10.50 | Bottle 43", "rose"),
        new alcohol("THREE SISTERS", "Cab Franc / Merlot Blend", "5oz 8.75 | Bottle 35", "red"),
        new alcohol("SKIMMERHORN", "Devil's Chair", "5oz 9.75 | Bottle 40", "red"),
        new alcohol("VOLCANIC HILLS", "Gamay Noir", "5oz 10 | Bottle 40", "red"),
        new alcohol("KETTLE VALLEY", "Cabernet Sauvignon", "5oz 11 | Bottle 44", "red"),
        new alcohol("ARROWLEAF CELLARS", "Summerston Sparkling Rosé", "Bottle 49", "sparkling"),
        new alcohol("TIME", "Pinot Gris", "5oz 9 | Bottle 36", "feature")
      ];

    public beer = [
        new alcohol("BACKHAND OF GOD",  "Stout", "6.25", "draught"),
        new alcohol("P49", "Craft Lager", "6.25", "draught"),
        new alcohol("OVERTIME", "Split Wit", "6.25", "draught"),
        new alcohol("FEATURE IPA", "ask your server", "6.25", "draught"),
        new alcohol("OVERTIME", "Brown Ale", "6.50", "bottles"),
        new alcohol("NELSON", "Honey Ale", "6.25", "bottles"),
        new alcohol("NELSON", "Harvest Moon Hemp Ale", "6.50", "bottles"),
        new alcohol("FERNIE", "What The Huck Wheat Ale (473 mL)", "7.25", "bottles"),
        new alcohol("PARALLEL 49", "Jerkface 9000 Wheat Ale", "6.50", "bottles"),
        new alcohol("PARALLEL 49", "Tricycle Radler", "6.50", "bottles"),
        new alcohol("PARALLEL 49", "Ruby Tears Red Ale", "6.50", "bottles"),
        new alcohol("STEAMWORKS", "Pilsner", "6.50", "bottles"),
        new alcohol("STEAMWORKS", "Flagship IPA", "6.50", "bottles"),
        new alcohol("LIGHTHOUSE", "Race Rocks Ale", "6.50", "bottles"),
        new alcohol("LIGHTHOUSE", "Company Lager", "6.50", "bottles"),
        new alcohol("MT. BEGBIE", "Kolsch", "6.50", "bottles"),
        new alcohol("MT. BEGBIE", "Nasty Habit IPA", "6.50", "bottles"),
        new alcohol("WHISTLER", "Forager", "7.50", "Gluten Free"),
        new alcohol("LUCKY", "Lager", "4.50", "dirtbag"),
        new alcohol("SOMA", "Apple Cider", "6.25", "cider"),
        new alcohol("SOMA", "Oak Aged Apple Cider", "6.25", "cider"),
        new alcohol("WARDS", "Ginger Cider", "6.25", "cider"),
        new alcohol("HOPPING MAD", "Apple Cider w/ Hops", "6.25", "cider"),
        new alcohol("LONETREE", "Cranberry Apple Cider", "6.25", "cider")
      ];

    public cocktails = [
        new alcohol("MAI TAI", "Rum, Cointreau, Amaretto, Fresh Lime Juice, Simple Syrup (2oz)", "10.25", "cocktail"),
        new alcohol("MISSIONARIES DOWNFALL", "Rum, Peach Liqueur, Pineapple Juice, Fresh Lime, Simple Syrup, Mint (2 oz)", "10.25", "cocktail"),
        new alcohol("HOUSE GIN & TONIC", "Ungava Gin, Bradley’s Kina Tonic, Lime (1oz)", "10.25", "cocktail"),
        new alcohol("FRENCH 75", "Gin, Lemon Champagne", "12.25", "cocktail"),
        new alcohol("ELDERFLOWER COLLINS", "Gin, Elderflower liquor, lemon, simple syrup, soda (2oz)", "10.25", "cocktail"),
        new alcohol("PIMM's CUP", "Pimms, orange juice, lemon, lime, cucumber, mint, ginger ale (2oz)", "10.25", "cocktail"),
        new alcohol("PENICILLIN", "Famous grouse, Laphroaig, lemon, cranberry ginger simple syrup (2oz)", "12.25", "cocktail"),
        new alcohol("WHISKY SOUR", "Bourbon, lemon, egg white, simple syrup (2oz)", "10.25", "cocktail"),
        new alcohol("PEDAL PINK LEMONADE", "Aperol, gin, house lemonade, soda (2oz)", "10.25", "cocktail")
      ];

    public whisky = [
        new alcohol("BOWMORE 12", "Single Malt", "9.50", "single malt"),
        new alcohol("HIGHLAND PARK 12", "Single Malt", "11", "single malt"),
        new alcohol("GLENDRONACH 12", "Single Malt", "12", "single malt"),
        new alcohol("BALVENIE DOUBLE WOOD", "Single Malt", "14", "single malt"),
        new alcohol("CRAGGANMORE 12", "Single Malt", "12", "single malt"),
        new alcohol("TALISKER 10", "Single Malt", "14", "single malt"),
        new alcohol("DALWHINNIE 15", "Single Malt", "14", "single malt"),
        new alcohol("GLENMORANGIE", "Single Malt", "10", "single malt"),
        new alcohol("OBAN 14", "Single Malt", "17", "single malt"),
        new alcohol("MACALLAN 15", "Single Malt", "17", "single malt"),
        new alcohol("LAGAVULIN 16", "Single Malt", "17", "single malt"),
        new alcohol("ARDBEG", "Single Malt", "14", "single malt"),
        new alcohol("GLENLIVET 21", "Single Malt", "40", "single malt"),
        new alcohol("AMRUT", "Single Malt", "14", "single malt"),
        new alcohol("JOHNNY WALKER RED", "Blend", "6", "blend"),
        new alcohol("JOHNNY WALKER BLACK", "Blend", "9", "blend"),
        new alcohol("JOHNNY WALKER BLUE", "Blend", "40", "blend"),
        new alcohol("DEWARS", "Blend", "6.25", "blend"),
        new alcohol("FAMOUS GROUSE", "Blend", "5.25", "blend"),
        new alcohol("BUSHMILLS OLD", "Irish Whiskey", "6", "irish"),
        new alcohol("TULLAMORE DEW", "Irish Whiskey", "5.25", "irish"),
        new alcohol("BLACK BUSH", "Irish Whiskey", "6.25", "irish"),
        new alcohol("TEELING SMALL BATCH", "Irish Whiskey", "9", "irish"),
        new alcohol("WRITER'S TEARS", "Irish Whiskey", "8.50", "irish"),
        new alcohol("BULLEIT", "Bourbon", "6.25", "american"),
        new alcohol("WILD TURKEY", "Bourbon", "6.25", "american"),
        new alcohol("MAKER'S MARK", "Bourbon", "6.25", "american"),
        new alcohol("BUFFALO TRACE", "Bourbon", "6.25", "american"),
        new alcohol("KNOB CREEK", "Bourbon", "7.25", "american"),
        new alcohol("BASIL HAYDENS", "Bourbon", "7.25", "american"),
        new alcohol("BOOKERS", "Bourbon", "9.50", "american"),
        new alcohol("FOUR ROSES", "Bourbon", "9.50", "american"),
        new alcohol("OLD POGUE", "Bourbon", "10.25", "american"),
        new alcohol("SORTILLAGE", "Rye", "7", "canadian"),
        new alcohol("COLLINGWOOD", "Rye", "6.95", "canadian"),
        new alcohol("CROWN ROYAL", "Rye", "5.75", "canadian"),
        new alcohol("WISER'S 18", "Rye", "8.25", "canadian"),
        new alcohol("FORTY CREEK", "Rye", "6.95", "canadian"),
        new alcohol("CROWN HARVEST", "Rye", "30", "canadian"),
        new alcohol("CROWN 16", "Rye", "12", "canadian")
      ];
}