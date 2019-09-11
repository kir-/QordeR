const arr_app = [
  {
    name: "Miso Soup",
    price_cents: 195,
    image: "https://hikarimiso.com/wp-content/uploads/2018/02/Basic-Miso-Soup_M1nuteMiso_HikariMiso-500x500.jpg",
  },
  {
    name: "House Green Salad",
    price_cents: 495,
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2019/01/best-simple-green-salad-3-500x500.jpg",
  },
  {
    name: "Gyoza",
    price_cents: 495,
    image: "https://www.lafujimama.com/wp-content/uploads/2019/04/Vegan-Gyoza-2-500x500.jpg",
  },
  {
    name: "Edamame",
    price_cents: 495,
    image: "http://www.minghongfood.com/photos/large/80688%20new.gif",
  },
  {
    name: "Harumaki",
    price_cents: 495,
    image: "https://thewoksoflife.com/wp-content/uploads/2017/05/summer-rolls-10-1-500x500.jpg",
  },
  {
    name: "Seaweed Salad",
    price_cents: 445,
    image: "https://i.pinimg.com/originals/d1/7b/bb/d17bbb66db93728bcfbaf113d1d1c7e0.jpg",
  },
  {
    name: "Agedashi Tofu",
    price_cents: 495,
    image: "https://www.hungryhuy.com/wp-content/uploads/1-agedashi-tofu2-1-500x500.jpg",
  },
  {
    name: "Sunomono Salad",
    price_cents: 395,
    image: "https://www.oyakata.com.pl/cache/przepisy/sunomono/sunomono-salatka.jpg_alpha-0_cr-hp_500x500_im.jpg",
  },
  {
    name: "Chicken Karage",
    price_cents: 495,
    image: "http://irodoricooking.com/wp-content/uploads/2016/06/IMG_5470-500x500.jpg",
  },
  {
    name: "Soft Shell Crab",
    price_cents: 795,
    image: "https://cdn.vox-cdn.com/uploads/chorus_image/image/62089363/1-_MG_2085.0.0.jpeg",
  },
  {
    name: "Tuna Tataki",
    price_cents: 995,
    image: "https://yuhoki.co.uk/image/cache/data/food/new/13_tuna%20tataki_1-500x500.jpg",
  },
  {
    name: "Potato Croquette",
    price_cents: 595,
    image: "http://mymealspinner.com/uploads/recipe/coverImg/20160508_200153_s201704071622499018.jpg",
  },
  {
    name: "Tuna Carppachio",
    price_cents: 995,
    image: "http://1.bp.blogspot.com/_EwUNOylP8Pk/TOwv5m5G8NI/AAAAAAAABTE/wA3blui-DKg/s1600/Tuna+Tartare20.jpg",
  }
];
const arr_tempura = [
  {
    name: "Prawn Tempura",
    price_cents: 745,
    image: "https://yuhoki.co.uk/image/cache/data/food/new/4_prawn%20tempura_1-500x500.jpg",
  },
  {
    name: "Yam Tempura",
    price_cents: 645,
    image: "https://www.dashofsanity.com/wp-content/uploads/2013/10/Sweet-Potato-Foccasia-Bread-1-500x500.jpg",
  },
  {
    name: "Vegetable Tempura",
    price_cents: 645,
    image: "https://deliciouslittlebites.com/wp-content/uploads/2017/03/Wasabi-Vegetable-Tempura-9-500x500.jpg",
  },
  {
    name: "Assorted Tempura",
    price_cents: 1345,
    image: "https://sushimonster.com.au/wp-content/uploads/2019/03/tempura-assorted.jpg",
  },
  {
    name: "Appetizer Tempura",
    price_cents: 595,
    image: "http://japangomoncton.com/wp-content/uploads/2017/12/Assorted-Tempura.jpg",
  },
  {
    name: "Sweet Potato Tempura",
    price_cents: 645,
    image: "https://plantbasedcityliving.com/wp-content/uploads/2018/05/Edited_April_-9-500x500.jpg",
  }
];
const arr_udon = [
  {
    name: "Plain Udon",
    price_cents: 595,
    image: "https://www.flour.co.jp/en/images/wheatflour/SanukiNoYume-noodle.jpg",
  },
  {
    name: "Beef Udon",
    price_cents: 745,
    image: "https://i.pinimg.com/originals/a6/3e/67/a63e67ddb36f8175d9255a33f8501d46.jpg",
  },
  {
    name: "Chicken Udon",
    price_cents: 745,
    image: "https://www.mygorgeousrecipes.com/wp-content/uploads/2016/08/Miso-udon-noodle-soup-with-shiitake-mushrooms-3.jpg",
  },
  {
    name: "Seafood Udon",
    price_cents: 895,
    image: "https://www.kikusushidowntown.com/wp-content/uploads/2019/02/Udon-Nabeyaki-Udon-1-500x500.jpg",
  },
  {
    name: "Beef Yakiudon",
    price_cents: 995,
    image: "https://omnivorescookbook.com/wp-content/uploads/2018/08/1808_Beef-Chow-Mein_800-500x500.jpg",
  },
  {
    name: "Chicken Yakiudon",
    price_cents: 995,
    image: "http://theblowfishgroup.com/izanagi/wp-content/uploads/2018/12/iza10019-2-500x500.jpg",
  },
  {
    name: "Seafood Yakiudon",
    price_cents: 1295,
    image: "https://www.jessicagavin.com/wp-content/uploads/2018/07/pad-thai-6-1200.jpg",
  },
  {
    name: "Nabeyaki Udon",
    price_cents: 1395,
    image: "https://www.kikusushidowntown.com/wp-content/uploads/2019/02/Udon-Nabeyaki-Udon-1-500x500.jpg",
  }
];
const arr_carte = [
  {
    name: "Chicken Teriyaki",
    price_cents: 1145,
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/06/slow-cooker-teriyaki-chicken-1-500x500.jpg",
  },
  {
    name: "Beef Teriyaki",
    price_cents: 1145,
    image: "https://cookingwithbliss.com/wp-content/uploads/2019/05/teriyaki-beef-stir-fry-5-500x500.jpg",
  },
  {
    name: "Chicken Curry",
    price_cents: 1145,
    image: "https://www.whiskaffair.com/wp-content/uploads/2017/12/Ginger-Chicken-Curry-4-500x500.jpg",
  },
  {
    name: "Beef Curry",
    price_cents: 1145,
    image: "https://www.swatifood.com/wp-content/uploads/2018/10/Indian-beef-curry-recipe-500x500.jpg",
  },
  {
    name: "Chicken Teriyaki Donburi",
    price_cents: 1145,
    image: "https://norecipes.com/wp-content/uploads/2012/09/easy-chicken-teriyaki-pan-fried.1024x1024-1.jpg",
  },
  {
    name: "Beef Teriyaki Donburi",
    price_cents: 1145,
    image: "https://i2.wp.com/deliciousbydesign.net/wp-content/uploads/2019/06/teriyaki-steak-2-e1559592142124.jpg?resize=500%2C500&ssl=1",
  },
  {
    name: "Sable Fish",
    price_cents: 1345,
    image: "https://www.alaskasfinestseafood.com/wp-content/uploads/2010/09/p-287-1lb_Sable_Fish___4c598d7b29182-500x500.jpg",
  },
  {
    name: "Unagi Donburi",
    price_cents: 1495,
    image: "https://farm5.staticflickr.com/4640/38428393364_11d764fe51.jpg",
  }
];
const arr_maki = [
  {
    name: "Kappa Roll",
    price_cents: 345,
    image: "http://japangomoncton.com/wp-content/uploads/2017/11/kappa-Roll.jpg",
  },
  {
    name: "Oshinko Roll",
    price_cents: 345,
    image: "https://greatocean.ca/wp-content/uploads/2016/11/191.jpg",
  },
  {
    name: "Salmon Roll",
    price_cents: 395,
    image: "https://sushibar-vn.com/wp-content/uploads/2016/01/NEGI-SAKE-MAKI.jpg",
  },
  {
    name: "Tuna Roll",
    price_cents: 395,
    image: "https://www.kksushi.ca/media/com_eshop/products/resized/92-650x650.jpg",
  },
  {
    name: "Negitoro Roll",
    price_cents: 445,
    image: "https://dtlscuh0h90jk.cloudfront.net/item/photos/IDGFSTI00000ngi/1541069306455535684_f3a84675415a45d49ecf9a0813bb88cd.jpg",
  },
  {
    name: "California Roll",
    price_cents: 445,
    image: "https://norecipes.com/wp-content/uploads/2012/07/recipecalifornia-roll-recipe.1024x1024-500x500.jpg",
  },
  {
    name: "Salmon Avocado Roll",
    price_cents: 495,
    image: "https://yuhoki.co.uk/image/cache/catalog/products-images/products-20-06-2018/45.salmonavoroll-500x500.jpg",
  },
  {
    name: "Yam Tempura Roll",
    price_cents: 495,
    image: "http://christmas.365greetings.com/wp-content/uploads/2019/03/shrimp-tempura-roll-5-500x500.jpg",
  },
  {
    name: "BC Roll",
    price_cents: 495,
    image: "https://d1marr3m5x4iac.cloudfront.net/images/edpborder500/I0-001/044/853/774-3.jpeg_/secret-food-tours-vancouver-74.jpeg",
  },
  {
    name: "Dynamite Roll",
    price_cents: 545,
    image: "https://www.kksushi.ca/media/com_eshop/products/resized/SMR115-650x650.jpg",
  },
  {
    name: "Mango Roll",
    price_cents: 595,
    image: "http://japangomoncton.com/wp-content/uploads/2017/11/mango-roll.png",
  },
  {
    name: "Philadelphia Roll",
    price_cents: 645,
    image: "https://www.kksushi.ca/media/com_eshop/products/resized/SMR129-650x650.jpg",
  },
  {
    name: "Unagi Roll",
    price_cents: 645,
    image: "https://akirasushirestaurant.com/dynamic_content/product_images/671/533_66946604f88db47db94e266681253b40.jpeg",
  },
  {
    name: "Chopped Scallop Roll",
    price_cents: 495,
    image: "https://simplyhomecooked.com/wp-content/uploads/2015/05/Shrimp-tempura-roll-2-500x500.jpg",
  },
  {
    name: "Spicy Salmon Roll",
    price_cents: 495,
    image: "https://i.pinimg.com/originals/66/7a/15/667a15f93e50a88e94ae23f43520fdd1.png",
  },
  {
    name: "Spicy Tuna Roll",
    price_cents: 495,
    image: "https://i.pinimg.com/originals/84/9e/2b/849e2b0ff7626555ab0148b957ab1371.jpg",
  }
];
const arr_temaki = [
  {
    name: "Tuna Cone",
    price_cents: 445,
    image: "https://static.thuisbezorgd.nl/images/restaurants/nl/NOO5ROQ/products/_0103_tuna-salad-handroll-nr-55.png",
  },
  {
    name: "Salmon Cone",
    price_cents: 445,
    image: "http://www.wabisabi.co.mz/wp-content/uploads/2015/09/Sushi1890-retouched.jpg",
  },
  {
    name: "Chopped Scallop Cone",
    price_cents: 495,
    image: "https://norecipes.com/wp-content/uploads/2017/07/temaki-sushi-3.jpg",
  },
  {
    name: "Spicy Tuna Cone",
    price_cents: 495,
    image: "http://www.wabisabi.co.mz/wp-content/uploads/2017/10/T7-800x800-72dpi-500x500.jpg",
  },
  {
    name: "Spicy Salmon Cone",
    price_cents: 495,
    image: "http://www.wabisabi.co.mz/wp-content/uploads/2015/09/T4-800x800-72dpi-500x500.jpg",
  },
  {
    name: "Spicy Chopped Scallop Cone",
    price_cents: 545,
    image: "http://www.wabisabi.co.mz/wp-content/uploads/2015/09/Sushi1890-retouched-686x686.jpg",
  }
];
const arr_nigiri = [
  {
    name: "Inari",
    price_cents: 175,
    image: "http://www.kanfood.fr/image/cache/data/produit/tag/inari-500x500.jpg",
  },
  {
    name: "Tamago",
    price_cents: 175,
    image: "https://www.mymore.com.my/image/data/ms280332/MENU/SUSHI/Sushi_15.png",
  },
  {
    name: "Hokkigai",
    price_cents: 175,
    image: "http://www.poppyhana.co.uk/image/cache/data/14%20(2)-500x500.jpg",
  },
  {
    name: "Wakame",
    price_cents: 175,
    image: "https://cdn.shopify.com/s/files/1/0717/1537/products/63_Chuka_Wakame_580x.jpg?v=1419392433",
  },
  {
    name: "Tuna",
    price_cents: 100,
    image: "https://i.pinimg.com/originals/f1/5b/3a/f15b3ace024ad06cb12dec03ed45baca.jpg",
  },
  {
    name: "Salmon",
    price_cents: 195,
    image: "https://stpierres.co.nz/images/20171103091534.png",
  },
  {
    name: "Sockeye Salmon",
    price_cents: 245,
    image: "http://www.poppyhana.co.uk/image/cache/data/3-500x500.jpg",
  },
  {
    name: "Masago",
    price_cents: 245,
    image: "https://www.eizosushi.fr/324-large_default/masago.jpg",
  },
  {
    name: "Saba",
    price_cents: 195,
    image: "https://static.thuisbezorgd.nl/images/restaurants/nl/OR0QO17/products/saba-nigiri.png",
  },
  {
    name: "Ebi",
    price_cents: 195,
    image: "http://chio-chio-san.az/image/cache/data/ebi-500x500.jpg",
  },
  {
    name: "Tobiko",
    price_cents: 225,
    image: "http://cdn.shopify.com/s/files/1/0717/1537/products/30_Tobikko_7fe2d8e6-9894-44a4-a3f9-e151850fe214_1024x1024.jpg?v=1419388776",
  },
  {
    name: "Tai",
    price_cents: 225,
    image: "https://daikichisushi.com/dynamic_content/product_images/71/533_00386fd2269b98b4478d81cd7e2e9b25.jpg",
  },
  {
    name: "Ika",
    price_cents: 225,
    image: "https://www.ikusushi.com/wp-content/uploads/2017/12/Ika-nigiri.png",
  },
  {
    name: "Toro",
    price_cents: 245,
    image: "http://getnudesushi.com/wp-content/uploads/2015/08/toro.jpg",
  },
  {
    name: "Tobiko & Quall Egg",
    price_cents: 275,
    image: "http://www.samurai.ae/wp-content/uploads/2016/10/tabiko-Sushi-A-La-Carte.png",
  },
  {
    name: "Smoked Salmon",
    price_cents: 245,
    image: "https://5.imimg.com/data5/IE/MD/MY-24954739/cold-smoked-salmon-500x500.jpg",
  },
  {
    name: "Tako",
    price_cents: 245,
    image: "http://www.hetpleintjedemeern.nl/image/cache/data/Nigiri_Tako-500x500.jpg",
  },
  {
    name: "Amaebi",
    price_cents: 275,
    image: "https://www.lugoshanghai.com/image/cache/data/6F6366CA-A351-402D-8A34-855040B185A7-500x500.jpeg",
  },
  {
    name: "Hotategai",
    price_cents: 275,
    image: "https://linkitchen.nl/wp-content/uploads/2019/02/Nigiri-Hotategai.png",
  },
  {
    name: "Unagi",
    price_cents: 275,
    image: "https://www.ikusushi.com/wp-content/uploads/2017/12/Unagi-nigiri.png",
  },
  {
    name: "Ikura",
    price_cents: 275,
    image: "https://www.kikusushidowntown.com/wp-content/uploads/2019/02/NIGIR-lkura-1-500x500.png",
  },
  {
    name: "Hamachi",
    price_cents: 295,
    image: "https://www.bluesakura.nl/zwolle/image/cache/catalog/Nigiri/nigri-7-500x500.jpg",
  },
  {
    name: "Red Tuna",
    price_cents: 295,
    image: "https://www.ikusushi.com/wp-content/uploads/2017/12/tuna-nigiri.png",
  },
  {
    name: "Uni",
    price_cents: 345,
    image: "https://i.pinimg.com/originals/ff/46/61/ff466126c400a1f7d6f75ae8917f6def.jpg",
  }
];
const arr_sashimi = [
  {
    name: "Salmon Sashimi",
    price_cents: 1145,
    image: "https://yuhoki.co.uk/image/cache/data/food/sushi_sashimi/45-salmon-sashimi-93-500x500.jpg",
  },
  {
    name: "Tuna Sashimi",
    price_cents: 1145,
    image: "https://yuhoki.co.uk/image/cache/data/food/sushi_sashimi/44-tuna-sashimi-92-500x500.jpg",
  },
  {
    name: "Spicy Salmon Sashimi",
    price_cents: 1245,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/08/4d/9c/3d/spicy-salmon-sashimi.jpg",
  },
  {
    name: "Spicy Tuna Sashimi",
    price_cents: 1245,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/08/4d/9c/3d/spicy-salmon-sashimi.jpg",
  },
  {
    name: "Tuna & Salmon Sashimi",
    price_cents: 1145,
    image: "http://www.wabisabi.co.mz/wp-content/uploads/2015/09/S5-800x800-72dpi.jpg",
  },
  {
    name: "Sockeye Salmon Sashimi",
    price_cents: 1345,
    image: "http://www.wabisabi.co.mz/wp-content/uploads/2015/09/S3-800x800-72dpi.jpg",
  },
  {
    name: "Hokkigai Sashimi",
    price_cents: 1345,
    image: "http://labukivilnius.lt/image/cache/catalog/Products/cat83/product6696-500x500.jpg",
  },
  {
    name: "Toro Sashimi",
    price_cents: 1545,
    image: "http://novikovrestaurant.co.uk/orders/wp-content/uploads/2014/05/Chu-Toro-Portuguese-300x300.jpg",
  },
  {
    name: "Tako Sashimi",
    price_cents: 1545,
    image: "http://theblowfishgroup.com/izanagi/wp-content/uploads/2018/12/iza10170-2-500x500.jpg",
  },
  {
    name: "Amaebi Sashimi",
    price_cents: 1745,
    image: "http://labukivilnius.lt/image/cache/catalog/Products/cat83/product6703-500x500.jpg",
  },
  {
    name: "Hamachi Sashimi",
    price_cents: 1745,
    image: "http://theblowfishgroup.com/izanagi/wp-content/uploads/2018/12/iza10055-2-500x500.jpg",
  },
  {
    name: "Red Tuna Sashimi",
    price_cents: 1745,
    image: "https://yuhoki.co.uk/image/cache/data/food/sushi_sashimi/44-tuna-sashimi-92-500x500.jpg",
  },
  {
    name: "Uni Sashimi",
    price_cents: 1895,
    image: "https://66.media.tumblr.com/c16ce93a1f494c72070a4a4ec2385a59/tumblr_p3eotkPeh51sxuwguo2_500.jpg",
  }
];
const arr_combo = [
  {
    name: "Party Tray A",
    price_cents: 2195,
    image: "https://www.kikusushidowntown.com/wp-content/uploads/2019/03/Sushi-Combo-A-500x500.jpg",
  },
  {
    name: "Party Tray B",
    price_cents: 3595,
    image: "https://cdn11.bigcommerce.com/s-y80oldc1cd/images/stencil/1280x1280/products/559/907/Sushi_Combo_Large__14936.1537475468.jpg?c=2&imbypass=on",
  },
  {
    name: "Party Tray C",
    price_cents: 559,
    image: "https://cdn11.bigcommerce.com/s-y80oldc1cd/images/stencil/1280x1280/products/558/906/Sushi_Combo_Small__89865.1537474159.jpg?c=2&imbypass=on",
  },
  {
    name: "Spicy Combo",
    price_cents: 1145,
    image: "http://littletreesushibarinc.com/wp-content/uploads/2018/09/PlatterSquare.jpg",
  }
];
const menu = [
  {
    category: "Appetizer",
    items: arr_app
  },
  {
    category: "Tempura",
    items: arr_tempura
  },
  {
    category: "Udon",
    items: arr_udon
  },
  {
    category: "Carte",
    items: arr_carte
  },
  {
    category: "Maki",
    items: arr_maki
  },
  {
    category: "Temaki",
    items: arr_temaki
  },
  {
    category: "Nigiri",
    items: arr_nigiri
  },
  {
    category: "Sashimi",
    items: arr_sashimi
  },
  {
    category: "Combo",
    items: arr_combo
  }
]

module.exports = { menu };