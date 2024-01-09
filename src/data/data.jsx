const products = [
  {
    _id: "658d36bf143dee4a1f1aafc7",
    title: "Jockey Men's T-Shirt",
    slug: "Jockey Men's T-Shirt",
    desc: "this is a Premium Tshirt",
    img: "https://m.media-amazon.com/images/I/71hhaL6CM8L._SY879_.jpg",
    category: "tshirt",
    size: "M",
    color: "black",
    price: 699,
    availableQty: 10,
    createdAt: {
      $date: {
        $numberLong: "1703753407125",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703754406235",
      },
    },
    __v: 0,
  },
  {
    _id: "658d36c8143dee4a1f1aafcb",
    title: "AELOMART Men's T Shirt-",
    slug: "AELOMART Men's T Shirt-",
    desc: "Create a lasting impression in this Regular Fit Men’s T-Shirt. Crafted in Premium, Bio-washed 100% Cotton, which is breathable, comfortable, skin friendly, odourless and all natural.",
    img: "https://m.media-amazon.com/images/I/71O1QaI-sbL._SY879_.jpg",
    category: "tshirt",
    size: "L",
    color: "green",
    price: 499,
    availableQty: 10,
    createdAt: {
      $date: {
        $numberLong: "1703753416052",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703754239712",
      },
    },
    __v: 0,
  },
  {
    _id: "658d375b143dee4a1f1aafd2",
    title: "Allen Solly Polo",
    slug: "Allen Solly Polo",
    desc: "Allensolly an initiative of Madura Fashion & Lifestyle, a division of Aditya Birla Fashion and Lifestyle is India’s largest and fastest growing branded apparel companies and a premium lifestyle player in the retail sector. After consolidating its market leadership with its own brands, it introduced premier international labels, enabling Indian consumers to buy the most prestigious global fashionwear and accessories within the country.",
    img: "https://m.media-amazon.com/images/I/916zv3pwF7L._SY879_.jpg",
    category: "tshirt",
    size: "M",
    color: "orange",
    price: 595,
    availableQty: 20,
    createdAt: {
      $date: {
        $numberLong: "1703753563053",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703753563053",
      },
    },
    __v: 0,
  },
  {
    _id: "658d375b143dee4a1f1aafd4",
    title: "Van Heusen",
    slug: "Van Heusen",
    desc: "This Van Heusen tee is made from soft cotton rich fabric for laid-back comfort. Featuring a classic crew neck line and short sleeves, with rib detailing. This top is finished with premium branding on the chest with label free comfort. Available for you in a range of vibrant colours.",
    img: "https://m.media-amazon.com/images/I/51-uEp+OhQL._SY879_.jpg",
    category: "tshirt",
    size: "S",
    color: "blue",
    price: 599,
    availableQty: 100,
    createdAt: {
      $date: {
        $numberLong: "1703753563060",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703753563060",
      },
    },
    __v: 0,
  },
  {
    _id: "658eb97665e966cf6a767f46",
    title: "Classic Hoodie",
    slug: "class hoodies",
    desc: "Cotton & Fleece - harmonious blend of unparalleled coziness",
    img: "https://www.beyoung.in/api/cache/catalog/products/hoodie_for_men_new_images/dream_blue_printed_hoodie_for_men_base_25_11_2023_700x933.jpg",
    category: "hoods",
    size: "M",
    color: "sky blue",
    price: 1299,
    availableQty: 1,
    createdAt: {
      $date: {
        $numberLong: "1703852406129",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703852406129",
      },
    },
    __v: 0,
  },
  {
    _id: "658ebb4965e966cf6a767f4c",
    title: "ADRO Men's Cotton",
    slug: "ADRO Men's Cotton",
    desc: "Occasion: Gym wear, Winter wear or wear it during cold evening to keep your body warm. Please refer to the size chart to select your size",
    img: "https://m.media-amazon.com/images/I/61ylf+ovKHL._SX679_.jpg",
    category: "hoods",
    size: "M",
    color: "Olive",
    price: 999,
    availableQty: 20,
    createdAt: {
      $date: {
        $numberLong: "1703852873474",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703852873474",
      },
    },
    __v: 0,
  },
  {
    _id: "658ebbe365e966cf6a767f56",
    title: "ADRO Hooded Sweatshirt",
    slug: "ADRO Hooded Sweatshirt",
    desc: "Hoodies gives a trendy yet Casual look. Durable fabric, stitching and Quality finish makes this Product a must have this Winter.",
    img: "https://m.media-amazon.com/images/I/51VmIOwoLDL._SX679_.jpg",
    category: "hoods",
    size: "XL",
    color: "Navy Blue",
    price: 949,
    availableQty: 10,
    createdAt: {
      $date: {
        $numberLong: "1703853027398",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703853027398",
      },
    },
    __v: 0,
  },
  {
    _id: "658ebcac65e966cf6a767f5d",
    title: "Regular Fit Hooded Jacket",
    slug: "Regular Fit Hooded Jacket",
    desc: "Super smooth and stretchy Crafted from a sleek scuba fabric, our Alpha collection is super smooth for a gentle feel on skin and stretchy for ease of movement.",
    img: "https://m.media-amazon.com/images/I/71Om6HjUsaL._SY879_.jpg",
    category: "hoods",
    size: "L",
    color: "red",
    price: 1884,
    availableQty: 10,
    createdAt: {
      $date: {
        $numberLong: "1703853228487",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703853228487",
      },
    },
    __v: 0,
  },
  {
    _id: "658ebd3665e966cf6a767f64",
    title: "Regular Fit Hooded Jacket",
    slug: "Regular Fit-M Hooded Jacket",
    desc: "Super smooth and stretchy Crafted from a sleek scuba fabric, our Alpha collection is super smooth for a gentle feel on skin and stretchy for ease of movement.",
    img: "https://m.media-amazon.com/images/I/71Om6HjUsaL._SY879_.jpg",
    category: "hoods",
    size: "M",
    color: "green",
    price: 1884,
    availableQty: 10,
    createdAt: {
      $date: {
        $numberLong: "1703853366350",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703853366350",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec44a65e966cf6a767fbd",
    title: "HASTHIP® 500 Pcs 2 Inch Thank You",
    slug: "HASTHIP® 500 Pcs 2 Inch Thank You",
    desc: "Proper size : 500 stickers per roll, large size 2 inch round stickers,large quantity for decorations, and can be shared with your friends and families,suitable for festive occasions when you want to express something warm",
    img: "https://m.media-amazon.com/images/I/71HQX-AcPjL._SL1500_.jpg",
    category: "stickers",
    size: "M",
    color: "Moon Grey",
    price: 599,
    availableQty: 100,
    createdAt: {
      $date: {
        $numberLong: "1703855178888",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703855178888",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec5b565e966cf6a767fc8",
    title: "Wolf Hacker Sticker",
    slug: "Wolf Hacker Sticker",
    desc: "Wolf Hacker",
    img: "https://juststickers.in/wp-content/uploads/2021/09/wolf-hacker-thumbnail-326x326.png",
    category: "stickers",
    size: "M",
    color: "blue",
    price: 99,
    availableQty: 100,
    createdAt: {
      $date: {
        $numberLong: "1703855541495",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703855541495",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec61165e966cf6a767fcb",
    title: "Custom Stickers WOW",
    slug: "Custom Stickers WOW",
    desc: "WoW !",
    img: "https://printo-cloudinary.mobimedia.ai/dxivtqnri/image/upload/c_fill,f_auto,g_auto,w_640/v1678195795/2023/Stickers/Product-page/Custom_Vinyl_Stickers_Product_Page.jpg",
    category: "stickers",
    size: "M",
    color: "white",
    price: 80,
    availableQty: 100,
    createdAt: {
      $date: {
        $numberLong: "1703855633364",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703855633364",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec6cf65e966cf6a767fcd",
    title: "Custom Laptop Stickers",
    slug: "Custom Laptop Stickers",
    desc: "Think Good Write your plan Customize your laptop to express your unique personality. The perfect icebreaker for co-working spaces and social gatherings. Bring your device to life in a fun, creative way with 11 sizes.",
    img: "https://printo-cloudinary.mobimedia.ai/dxivtqnri/image/upload/c_fill,f_auto,g_auto,w_640/v1678195744/2023/Stickers/Product-page/Custom_Laptop_Stickers_Product_Page.jpg",
    category: "stickers",
    size: "M",
    color: "white",
    price: 350,
    availableQty: 30,
    createdAt: {
      $date: {
        $numberLong: "1703855823670",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703855823670",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec76865e966cf6a767fd2",
    title: "Marvel Thor Coffee Mugs",
    slug: "Marvel Thor Thunderous Kawaii - Coffee Mugs",
    desc: "Think Good Write your plan Customize your laptop to express your unique personality. The perfect icebreaker for co-working spaces and social gatherings. Bring your device to life in a fun, creative way with 11 sizes.",
    img: "https://www.shopdisney.in/media/catalog/product/m/c/mcdcofmthunderousthorkawaii5.jpg",
    category: "mugs",
    size: "M",
    color: "blue",
    price: 450,
    availableQty: 30,
    createdAt: {
      $date: {
        $numberLong: "1703855976853",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703855976853",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec85665e966cf6a767fd5",
    title: "Marvel Spider-Man",
    slug: "Marvel Spider-Man",
    desc: "This mug made with premium quality ceramic material with your favourite designs on it, can be a perfect gift for Coffee Mug Lovers. With a capacity of 11 Oz, you can use the product while sipping coffee or even soda in it. You can also express your fandom by using it as a pen holder or by simply keeping it on the shelf as a trophy. Wait no more and add our Designer Mugs to your existing collection as there is no such thing as too many Mugs.",
    img: "https://www.shopdisney.in/media/catalog/product/c/o/cofmwhtneighborhoodspidey2.jpg",
    category: "mugs",
    size: "M",
    color: "black",
    price: 350,
    availableQty: 30,
    createdAt: {
      $date: {
        $numberLong: "1703856214834",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703856214834",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec8ba65e966cf6a767fdb",
    title: "Mickey Mouse Graffiti",
    slug: "Mickey Mouse Graffiti",
    desc: "This mug made with premium quality ceramic material with your favourite designs on it, can be a perfect gift for Coffee Mug Lovers. With a capacity of 11 Oz, you can use the product while sipping coffee or even soda in it. You can also express your fandom by using it as a pen holder or by simply keeping it on the shelf as a trophy. Wait no more and add our Designer Mugs to your existing collection as there is no such thing as too many Mugs.",
    img: "https://www.shopdisney.in/media/catalog/product/m/c/mcdcofmmickeygraffiti1.jpg",
    category: "mugs",
    size: "M",
    color: "red",
    price: 349,
    availableQty: 20,
    createdAt: {
      $date: {
        $numberLong: "1703856314686",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703856314686",
      },
    },
    __v: 0,
  },
  {
    _id: "658ec91565e966cf6a767fdd",
    title: "Marvel Avengers Assemble Kawaii",
    slug: "Marvel Avengers Assemble Kawaii",
    desc: "This mug made with premium quality ceramic material with your favourite designs on it, can be a perfect gift for Coffee Mug Lovers. With a capacity of 11 Oz, you can use the product while sipping coffee or even soda in it. You can also express your fandom by using it as a pen holder or by simply keeping it on the shelf as a trophy. Wait no more and add our Designer Mugs to your existing collection as there is no such thing as too many Mugs.",
    img: "https://www.shopdisney.in/media/catalog/product/m/c/mcdcofmavengersassemblekawaii1.jpg",
    category: "mugs",
    size: "M",
    color: "black",
    price: 500,
    availableQty: 20,
    createdAt: {
      $date: {
        $numberLong: "1703856405860",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1703856405860",
      },
    },
    __v: 0,
  },
];

export default products;
