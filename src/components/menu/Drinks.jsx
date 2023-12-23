import { Menu } from "antd";
import Menulist from "./Menulist";
const titles = "Drinks";
// const menulists = [
//   {
//     subtittle: "Drinks Mo:Mo",
//     price: "230",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Drinks",
//     price: "330",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chickendddd Mo:Mo",
//     price: "3330",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
//   {
//     subtittle: "Chicken Mo:Mo",
//     price: "30",
//     aboutFood:
//       "Chicken Mo:Mo is a test hidden inside the hungry belly of beautiful human being, almost all around the world.",
//   },
// ];
const fizzList = [
  {
    subtittle: "Tar & RosesProsecco",
    price: "65",
    aboutFood: "King Valley, VIC ",
    date: "(NV)",
  },
  {
    subtittle: " Apogee DeluxeBrut",
    price: "145",
    aboutFood: "Piper’s River, TAS",
    date: "(2020)",
  },
  {
    subtittle: " Marions Vineyard Blanc de Blancs",
    price: "120",
    aboutFood: "Tamar Valley, TAS",
    date: "(2016)",
  },
  {
    subtittle: " Sven Joschke Pét Nat",
    price: "80",
    aboutFood: "Barossa Valley,SA",
    date: "(2022)",
  },
  {
    subtittle: " Deviation Road ‘Altair’ Sparkling Rosé",
    price: "105",
    aboutFood: "Adelaide Hills, SA",
    date: "(NV)",
  },
  {
    subtittle: " Witches Falls Moscato",
    price: "60",
    aboutFood: "Granite Belt, QLD",
    date: "(2023)",
  },
  // {
  //   subtittle:"",
  //   price:"",
  //   aboutFood:"",
  //   date:""(
  
];

const whiteList = [
  {
    subtittle: " Rieslingfreak No. 5 Riesling -Off Dry",
    price: "75",
    aboutFood: "Clare Valley, SA",
    date: "(2023)",
  },
  {
    subtittle: " Grosset ‘Springvale’ Riesling",
    price: "125",
    aboutFood: "Clare Valley, SA",
    date: "(2023)",
  },
  {
    subtittle: " Mitchell ‘McNicol’ Riesling",
    price: "110",
    aboutFood: "Clare Valley, SA",
    date: "(2013)",
  },
  {
    subtittle: " Stargazer ‘Single Vineyard’ Riesling",
    price: "80",
    aboutFood: "Coal River, TAS",
    date: "(2023)",
  },
  {
    subtittle: " Frankland Estate Riesling",
    price: "85",
    aboutFood: "Frankland River, WA",
    date: "(2022)",
  },
  {
    subtittle: " Witches Fall ‘Provenance’ Verdelho",
    price: "60",
    aboutFood: "Granite Belt, QLD",
    date: "(2023)",
  },
  {
    subtittle: " Nick Spencer Grüner Veltliner",
    price: "80",
    aboutFood: "Tumbarumba, NSW",
    date: "(2022)",
  },
  {
    subtittle: " Shadowfax Gewürtzraminer",
    price: "75",
    aboutFood: "Macedon Ranges, VIC",
    date: "(2023)",
  },
  {
    subtittle: " Jim Barry Assyrtiko",
    price: "95",
    aboutFood: "Clare Valley, SA",
    date: "(2023)",
  },
  {
    subtittle: " Lino Ramble Pinot Grigio",
    price: "65",
    aboutFood: "Adelaide Hills, SA",
    date: "(2023)",
  },
  {
    subtittle: " Stefano Lubiana Pinot Gris",
    price: "115",
    aboutFood: "Derwent Valley, TAS",
    date: "(2022)",
  },
  {
    subtittle: " Tai Tira Sauvignon Blanc",
    price: "60",
    aboutFood: "Marlborough, NZ",
    date: "(2023)",
  },
  {
    subtittle: " Pyramid Valley ‘Weaver’ Sauvignon Blanc",
    price: "145",
    aboutFood: "Marlborough, NZ",
    date: "(2021)",
  },
  {
    subtittle: " Tyrrell’s ‘HVD Single Vineyard’ Sémillon",
    price: "100",
    aboutFood: "Hunter Valley, NSW",
    date: "(2017)",
  },
  {
    subtittle: " Yarra Yering ‘Dry #1’ Sémillon & Chardonnay",
    price: "150",
    aboutFood: "Yarra Valley, VIC ",
    date: "(2021)",
  },
  {
    subtittle: " Charlotte Dalton ‘Love You Love Me’ Sémillon",
    price: "65",
    aboutFood: "Adelaide Hills, SA",
    date: "(2023)",
  },
  {
    subtittle: " Stoney Rise Savagnin",
    price: "90",
    aboutFood: "Tamar Valley, TAS",
    date: "(2022)",
  },
  {
    subtittle: " MMAD Chenin Blanc",
    price: "115",
    aboutFood: "McLaren Vale, SA",
    date: "(2021)",
  },
  {
    subtittle: " Corymbia ‘Rocket’s Vineyard’ Chenin Blanc",
    price: "80",
    aboutFood: "Swan Valley, WA",
    date: "(2023)",
  },
  {
    subtittle: " L.A.S Vino ‘CBDB’ Chenin Blanc",
    price: "140",
    aboutFood: "Margaret River, WA",
    date: "(2022)",
  },
  {
    subtittle: " La Petite Mort Chardonnay",
    price: "90",
    aboutFood: "Granit Belt, QLD",
    date: "(2022)",
  },
  {
    subtittle: " Giant Steps Chardonnay",
    price: "85",
    aboutFood: "Yarra Valley, VIC",
    date: "(2022)",
  },
  {
    subtittle: "By Farr Chardonnay",
    price: "190",
    aboutFood: "Geelong, VIC",
    date: "(2022)",
  },
  {
    subtittle: " Tolpuddle Chardonnay",
    price: "205",
    aboutFood: "Coal River, TAS",
    date: "(2022)",
  },
  {
    subtittle: " Stefano Lubiana ‘Primavera’ Chardonnay",
    price: "120",
    aboutFood: "Derwent Valley, TAS",
    date: "(2022)",
  },
  {
    subtittle: " Shaw + Smith Chardonnay",
    price: "150",
    aboutFood: "Adelaide Hills, SA",
    date: "(2015)",
  },
  {
    subtittle: " Si. Vintners ‘Bella’ Chardonnay",
    price: "90",
    aboutFood: "Margaret River, WA",
    date: "(2022)",
  },
  {
    subtittle: " Neudorf ‘Rosie’s Block ’ Amphora Chardonnay",
    price: "125",
    aboutFood: "Nelson, NZ",
    date: "(2022)",
  },
  {
    subtittle: "Blank Canvas ‘Reed Vineyard’ Chardonnay",
    price: "145",
    aboutFood: "Marlborough, NZ",
    date: "(2022)",
  },
  // {
  //   subtittle:"",
  //   price:"",
  //   aboutFood:"",
  //   date:""(
  
];
const skinContactList = [
  {
    subtittle: " La Petite Mort ‘Qveri’ Viognier, Marsanne , Roussanne",
    price: "85",
    aboutFood: "Granit Belt, QLD",
    date: "(2021)",
  },
  {
    subtittle: " Koerner ‘Pigato’ Vermentino",
    price: "95",
    aboutFood: "Clare Valley, SA",
    date: "(2022)",
  },
  {
    subtittle: " Yangarra ‘Ovitelli’ Grenache Blanc & Roussanne",
    price: "130",
    aboutFood: "McLaren Vale, SA",
    date: "(2020)",
  },
  {
    subtittle: " Dominique Portet ‘Fontaine’ Rosé",
    price: "75",
    aboutFood: "Yarra Valley, VIC",
    date: "(2022)",
  },
  {
    subtittle: " Swinney Rosé Rosé",
    price: "125",
    aboutFood: "Frankland River, WA",
    date: "(2023)",
  },
  {
    subtittle: " Sven Joschke ‘La Adeline’ Rosé",
    price: "85",
    aboutFood: "Barossa Valley, SA",
    date: "(2022)",
  },

  
];

const redList = [
  {
    subtittle: " Latta ‘Fresca’ Sangiovese -Chilled",
    price: "110",
    aboutFood: "Ballarat, VIC",
    date: "(2021)",
  },
  {
    subtittle: "imla Pinot Noir, Gamay, Chardonnay, Riesling –Chilled",
    price: "95",
    aboutFood: " Tasmania, TAS",
    date: "(2023)",
  },
  {
    subtittle: " Denton Shed Pinot Noir",
    price: "70",
    aboutFood: "Yarra Valley, VIC",
    date: "(2022)",
  },
  {
    subtittle: " Timo Mayer ‘Bloody Hills Coldstream’Pinot Noir",
    price: "95",
    aboutFood: "Yarra Valley, VIC",
    date: "(2023)",
  },
  {
    subtittle: " Ten Minutes By Tractor ‘Up The Hill’ Pinot Noir",
    price: "145",
    aboutFood: "Mornington Peninsula, VIC",
    date: "(2022)",
  },
  {
    subtittle: " Ocean Eight ‘The Gippslander’ Pinot Noir",
    price: "105",
    aboutFood: "Mornington Peninsula, VIC",
    date: "(2018)",
  },
  {
    subtittle: " Strelley Farm Pinot Noir",
    price: "80",
    aboutFood: "Multi-Regions, TAS",
    date: "(2022)",
  },
  {
    subtittle: " Holyman Pinot Noir",
    price: "180",
    aboutFood: "Tamar Valley, TAS",
    date: "(2017)",
  },
  {
    subtittle: " Tolpuddle Pinot Noir",
    price: "205",
    aboutFood: "Coal River, TAS",
    date: "(2022)",
  },
  {
    subtittle: " Marco Lubiana Pinot Noir",
    price: "125",
    aboutFood: "Huon & Derwent,TAS",
    date: "(2022)",
  },
  {
    subtittle: " Craggy Range ‘Te Muna Road Vineyard’Pinot Noir",
    price: "140",
    aboutFood: " Martinborough, NZ",
    date: "(2020)",
  },
  {
    subtittle: " Carrick Estate Pinot Noir",
    price: "90",
    aboutFood: "Central Otago, NZ",
    date: "(2021)",
  },
  {
    subtittle: " La Petite Mort ‘Reserva’ Tempranillo",
    price: "100",
    aboutFood: "Granite Belt, QLD",
    date: "(2018)",
  },
  {
    subtittle: " Ravensworth ‘Tinto’ Grenache, Tempranillo, Graciano",
    price: "70",
    aboutFood: "Hilltops, NSW",
    date: "(2022)",
  },
  {
    subtittle: " Minim ‘Colbinabbin’ Sangiovese",
    price: "95",
    aboutFood: "Heathcote, VIC",
    date: "(2022)",
  },
  {
    subtittle: " Longview ‘Saturnus’ Riserva Nebbiolo",
    price: "125",
    aboutFood: "Adelaide Hills, SA",
    date: "(2020)",
  },
  {
    subtittle: " Aphelion ‘Welkin’ Nero D’Avola",
    price: "65",
    aboutFood: "McLaren Vale, SA",
    date: "(2022)",
  },
  {
    subtittle: " Ministry Of Clouds ‘Kintsugi’ Grenache, Mataro , Shiraz",
    price: "185",
    aboutFood: " McLaren Vale, SA",
    date: "(2020)",
  },
  {
    subtittle: " Spinifex ‘Sol Solice’ Grenache",
    price: "135",
    aboutFood: "Eden & Barossa Valley, SA",
    date: "(2022)",
  },
  {
    subtittle: " Thousand Candles ‘Gathering Fields’ Shiraz & Malbec",
    price: "75",
    aboutFood: "Yarra Valley, VIC",
    date: "(2021)",
  },
  {
    subtittle: " Toolangi ‘D Block’ Shiraz",
    price: "135",
    aboutFood: "Yarra Valley, VIC",
    date: "(2019)",
  },
  {
    subtittle: "ead ‘Old Vine’ Shiraz",
    price: "85",
    aboutFood: "Barossa Valley, SA",
    date: "(2021)",
  },
  {
    subtittle: " Kaesler ‘Alte Reben’ Shiraz",
    price: "200",
    aboutFood: "Barossa Valley, SA",
    date: "(2017)",
  },
  {
    subtittle: " Ochota Barrels ‘Where’s The Pope’Syrah",
    price: "115",
    aboutFood: "McLaren Vale, SA",
    date: "(2023)",
  },
  {
    subtittle: " Warramate Cabernets Blend",
    price: "95",
    aboutFood: "Yarra Valley, VIC",
    date: "(2021)",
  },
  {
    subtittle: " Domaine Naturaliste ‘Morus’ Cabernet Sauvignon",
    price: "180",
    aboutFood: "Margaret River, WA",
    date: "(2018)",
  },
  {
    subtittle: " Te Mata ‘Awatea’ Cabernets & Merlot",
    price: "125",
    aboutFood: "Hawke’s Bay, NZ",
    date: "(2020)",
  },
];

// bytheglass

const fizzGlass = [
  {
    subtittle: " Tar & Roses Prosecco",
    price: "14",
    aboutFood: "King Valley, VIC",
    date: "(NV)",
  },
  {
    subtittle: " Apogee Deluxe Brut",
    price: "26",
    aboutFood: "Piper’s River, TAS",
    date: "(2020)",
  },
];

const whiteGlass = [
  {
    subtittle: "  Stargazer ‘Single Vineyard’ Riesling",
    price: "17",
    aboutFood: "Coal River, TAS",
    date: "(2023)",
  },
  {
    subtittle: "  Lino Ramble Pinot Grigio",
    price: "14",
    aboutFood: "Adelaide Hills, SA",
    date: "(2023)",
  },
  {
    subtittle: " Tai Tira Sauvignon Blanc ",
    price: "13",
    aboutFood: "Marlborough, NZ",
    date: "(2023)",
  },
  {
    subtittle: " Shadowfax Gewürtzraminer ",
    price: "16",
    aboutFood: "Macedon Ranges, VIC",
    date: "(2023)",
  },
  {
    subtittle: "  MMAD Chenin Blanc",
    price: "19",
    aboutFood: "McLaren Vale, SA",
    date: "(2021)",
  },
  {
    subtittle: " Tyrrell’s HVD Sémillon ",
    price: "20",
    aboutFood: "Hunter Valley, NSW",
    date: "(2017)",
  },
  {
    subtittle: " La Petite Mort Chardonnay ",
    price: "16",
    aboutFood: "Granit Belt, QLD",
    date: "(2022)",
  },
  {
    subtittle: " Shaw + Smith Chardonnay ",
    price: "28",
    aboutFood: "Adelaide Hills, SA",
    date: "(2015)",
  },
];

const orangeGlass = [
  {
    subtittle: "  Koerner ‘Pigato’ Vermentino",
    price: "18",
    aboutFood: "Clare Valley, SA",
    date: "(2022)",
  },
  {
    subtittle: " Yangarra ‘Ovitelli’ Grenache Blanc & Roussanne  ",
    price: "26",
    aboutFood: "McLaren Vale, SA",
    date: "(2020)",
  },
];

const roseGlass = [
  {
    subtittle: "  Dominique Portet ‘Fontaine’ Rosé",
    price: "16",
    aboutFood: "Yarra Valley, VIC",
    date: "(2022)",
  },
];

const redGlass = [
  {
    subtittle: "  Simla Pinot Noir, Gamay, Chardonnay, Riesling–Chilled ",
    price: "19",
    aboutFood: " Tasmania, TAS",
    date: "(2023)",
  },
  {
    subtittle: " Ourbis Trousseau  ",
    price: "16",
    aboutFood: "Adelaide Hills, SA",
    date: "(2022)",
  },
  {
    subtittle: "  Denton Shed Pinot Noir ",
    price: "15",
    aboutFood: "Yarra Valley, VIC",
    date: "(2022)",
  },
  {
    subtittle: " Carrick Estate Pinot Noir  ",
    price: "18",
    aboutFood: "Central Otago, NZ",
    date: "(2021)",
  },
  {
    subtittle: "  Ravensworth ‘Tinto’ Grenache, Tempranillo, Graciano ",
    price: "17",
    aboutFood: "Hilltops, NSW",
    date: "(2022)",
  },
  {
    subtittle: "  Thousand Candles ‘Gathering Fields’ Shiraz, Malbec ",
    price: "16",
    aboutFood: "Yarra Valley, VIC",
    date: "(2021)",
  },
  {
    subtittle: "  Head ‘Old Vine’ Shiraz ",
    price: "18",
    aboutFood: "Barossa Valley, SA",
    date: "(2021)",
  },
  {
    subtittle: "  Longview ‘Saturnus’ Riserva Nebbiolo ",
    price: "25",
    aboutFood: "Adelaide Hills, SA",
    date: "(2020)",
  },
];


const cocktails =[
  {
    subtittle: "  The Sweet Life  ",
    price: "18",
    aboutFood: "Vodka, Aperol, Elderflower Liquor, Sugar, Lemon, aqua faba    ",

  },
  {
    subtittle: "Bittersweet Symphony  ",
    price: "18",
    aboutFood: " Gin, Pink Grapefruit Juice, Honey and Tonic water  ",

  },
  {
    subtittle: " Butter Be Good ",
    price: "20",
    aboutFood: "Bourbon fat washed with Bourbon, Lemon, sugar and aqua faba",

  },
  {
    subtittle: "Mango Tango  ",
    price: "22",
    aboutFood: " Tequila, Chilli Mango puree, Agave, Lime and soda  ",

  },
  {
    subtittle: " Sea Shanty  ",
    price: "20",
    aboutFood: "   Dark Rum, Pineapple Juice, Salted Caramel Syrup, Lime and aromatic bitters",

  },
  {
    subtittle: "Euphoria  ",
    price: "18",
    aboutFood: " Vodka, Pineapple Juice, Passoa, Vanilla syrup, Lime  ",

  },
 

]

const beer =[
  {
    subtittle: "Black Hops Pale Ale   ",
    price: "11", 
     aboutFood: "  ( on tap ) ",
     
    }, {
      subtittle: "Asahi Super Dry  ",
      price: "14 ",
      aboutFood: "  ( on tap ) ",
  

  }, {
    subtittle: "Peroni Leggera  ",
    price: "11",
    }, {
    subtittle: "Heaps Norma  ",
    price: "11",
    aboutFood:"(0.5)"
   

  },
]
export default function Drinks() {
  return (
    <div className="  ">
      <div className="bg-yellow-100 bg-opacity-50 py-16 px-32 max-sm:p-8  ">
        {/* <Menulist title={titles} lists={menulists} /> */}

        <Menulist title={"SIGNATURE COCKTAILS"} lists={cocktails}/>
        <Menulist title={"BEER"} lists={beer}/>
        <Menulist title={"FIZZ"} lists={fizzList} />
        <Menulist title={"WHITE"} lists={whiteList} />
        <Menulist
          title={"SKIN CONTACT - ORANGE & ROSÉ"}
          lists={skinContactList}
        />
        <Menulist title={"RED"} lists={redList} />
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-5xl text-center font-Cormorant font-semibold border-2 inline-block  p-4 border-black mb-16 max-sm:text-3xl">
            BY THE GLASS
          </h4>
        </div>
        <Menulist title={"FIZZ"} lists={fizzGlass} />
        <Menulist title={"WHITE"} lists={whiteGlass} />
        <Menulist title={"ORANGE"} lists={orangeGlass} />
        <Menulist title={"ROSE"} lists={roseGlass} />
        <Menulist title={"RED"} lists={redGlass} />
      </div>
    </div>
  );
}
