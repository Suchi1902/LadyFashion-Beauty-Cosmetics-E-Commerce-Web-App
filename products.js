const products = [
  {
    id: 1,
    name: "Organic Aloe Vera Gel",
    category: "skincare",
    price: 299,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/61qCaXePu6S._UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    name: "Rose Water Facial Mist",
    category: "skincare",
    price: 199,
    discount: 5,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    name: "Lipstick",
    category: "makeup",
    price: 299,
    discount: 10,
    image: "data:image/webp;base64,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"
  },
  {
    id: 4,
    name: "Perfume",
    category: "fragrances",
    price: 1299,
    discount: 25,
    image: "https://www.visconti.in/cdn/shop/files/hero-04.png?v=1725435938&width=1946"
  },
  {
    id: 5,
    name: "Face Mask",
    category: "skincare",
    price: 399,
    discount: 30,
    image: "https://cosmocosmetics.in/cdn/shop/products/Charcoal-625g-1a.jpg?v=1747028497"
  },
  {
    id: 6,
    name: "Shampoo",
    category: "haircare",
    price: 249,
    discount: 5,
    image: "https://m.media-amazon.com/images/I/71JGByuyvfL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 7,
    name: "Foundation",
    category: "makeup",
    price: 899,
    discount: 20,
    image: "https://www.paccosmetics.com/cdn/shop/files/8904341204276_IMG.main.jpg?v=1742281316&width=2048"
  },
  {
    id: 8,
    name: "Body Lotion",
    category: "skincare",
    price: 599,
    discount: 15,
    image: "https://joypersonalcare.com/cdn/shop/files/Skin_Fruits_Apple_Infused_Fruit_Moisturizing_Body_Lotion_500ml_948205fe-8a6b-4fba-b64e-e8cbc5dc8376.jpg?v=1753782559"
  },
  {
    id: 9,
    name: "Hair Conditioner",
    category: "haircare",
    price: 349,
    discount: 10,
    image: "https://assets.unileversolutions.com/v1/1417855.png"
  },
  {
    id: 10,
    name: "Nail Polish",
    category: "makeup",
    price: 199,
    discount: 5,
    image: "https://verymiss.in/cdn/shop/files/252.jpg?v=1700894678"
  },
  {
    id: 11,
    name: "Eye Cream",
    category: "skincare",
    price: 799,
    discount: 20,
    image: "https://images-static.nykaa.com/media/catalog/product/u/n/under_eye_cream_1.jpg?tr=w-500"
  },
  {
    id: 12,
    name: "Hair Serum",
    category: "haircare",
    price: 599,
    discount: 15,
    image: "https://images-static.nykaa.com/media/catalog/product/u/n/under_eye_cream_1.jpg?tr=w-500"
  },
  {
    id: 13,
    name: "Blush",
    category: "makeup",
    price: 399,
    discount: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLel_-5Q7lNmcPVFAbuMiIcKMt0e6AXRUpXg&s"
  },
  {
    id: 14,
    name: "Body Scrub",
    category: "skincare",
    price: 499,
    discount: 25,
    image: "https://www.mcaffeine.com/cdn/shop/files/Card-1_option1_1.jpg?v=1713269480"
  },
  {
    id: 15,
    name: "Hair Mask",
    category: "haircare",
    price: 699,
    discount: 30,
    image: "https://www.letscurlup.com/cdn/shop/files/IntenseHydratingHairMask_c7545fae-ec50-4b2c-95f9-b230272d7283_1800x1800.webp?v=1724398423"
  },
  {
    id: 16,
    name: "Lip Gloss",
    category: "makeup",
    price: 249,
    discount: 5,
    image: "https://www.makeupbymario.com/cdn/shop/files/mbm-sslg-packshot-sunlit-6750c831dae0e.jpg?crop=center&height=480&v=1733347615&width=480"
  },
  {
    id: 17,
    name: "Sunscreen",
    category: "skincare",
    price: 799,
    discount: 20,
    image: "https://www.drsheths.com/cdn/shop/files/27.jpg?v=1689311556"
  },
  {
    id: 18,
    name: "Hair Spray",
    category: "haircare",
    price: 399,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/71OHOrMQj+L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 19,
    name: "Eyeliner",
    category: "makeup",
    price: 299,
    discount: 10,
    image: "https://sdcdn.io/cl/cl_sku_V4R303_2400x2400_0.jpg"
  },
  {
    id: 20,
    name: "Hand Cream",
    category: "skincare",
    price: 199,
    discount: 5,
    image: "https://m.media-amazon.com/images/I/61FbvHn0W4L.jpg"
  },
  {
    id: 21,
    name: "Hair Gel",
    category: "haircare",
    price: 249,
    discount: 5,
    image: "https://www.arata.in/cdn/shop/files/curl-defining-hair-gel-150ml-styling-product-594.webp?v=1749898380"
  },
  {
    id: 22,
    name: "Lip Liner",
    category: "makeup",
    price: 199,
    discount: 5,
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABCFBMVEX///8AAAAVFRezs7MTExUYGBoLDAu6urrVyMednZ0VFRXW1td3AAAbGx22trYgICIlIiatq6zHx8eNGRqFDxB+GhwAAAahoaKmpqZra2vLy8twcHAaGBvS0tMRDxPk4+aMjIt8fHwxMDXa2d3r6vDEt7SIGhy6oaTd19R8HBScc3CMKyd2NjGwlI6UOC+IRkKZPz25rKvu6+iYRjyHMy9kGhbbsp/ShmPDd2akXE6ORjjf0tLMjHLWfVvPh2XRrqHBiHTeycC7dVjhjWjciG7GmYnUlXW4eWg9PT1aWlpLSUpCQUGPjpImJiIRCxdpCABzJSVhIB1YFw1pDRKQEhGSKCmoT1SnZmVsBHXoAAAEQUlEQVR4nO2djXbTRhBGM6vVKrYjyVKCZMW2LAkV4gJpakrdNjgtwRQpTiCQAO//Jl054Ql69uzJx9wnmHtmdmb0Z+/sMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzD/A+eHtmOwDTzn21HYJjdZ89th2CYF8dz8DL95WT+q+0YjLKYv3yGfRB35y9/e2U7CKP8vvzjz79ObUdhktfr1fLsb9tRGGSxXK1Wy39sh2GQN53g6nxhOw5zvFutV29X529sx2GOs/V6/XZ5/s52HMY4Wr4+O/t3+f697UCMMSJSSdJXNLMdiSlSUtIXuVCPbUdiih6pvutKOYQ29F3Rzwe2IzHFnSF4DqU/kbKC7TTfc1ghV6nQhmKCboidQ9nlkOANoafFtkqHU9uRmOK+l4oc2VD+ABNfG06QDe+2NuROA26Ywm9tKXwOR6RITATwPBwRZY0vZYhs2BStEvmh7UhMoQ3btCTgKo2ILoKCBHSn8YtxIivYKtU5LCsSYgJbpdtOM06ADSOqLsosEcid5qLUhsA7jT6HTU/3UtyJrw3HTTctgA1VUxRljpzDajNusXeatijGJH3kTkOUCzcBzqEfOd1OA7y19WeziKB3GsqCTQ58V19X6eFminz15JAfd4Z5bDsSUzh6p5lulAiBc0iHnm6muPPQoSqiKfLmrXPoDXokXNh5qA2jyxFBn0PpzTLkThMQOVFKQsIa6iqd6qUN2lANZin2OaQiKxLgvbSbFrMSPIeHU4dc5L1UlaWe+MhVqqbTgc4h8k6Tdnf1cd++1IaDqKtS4M1beU2D/AatNqTLmFxCPoeLWauED1ylpHoxAd8v1YZxr82B3zbRhuVAX1y4sFWqrw8jT++lAjmHXnyJfZ8mH5IS2BO/H/rIz56CraHrEngOXeAq/Z7DxLMdiSnuDAW8YZJXsN9bdIauylrcb0i1IbWz+nIIbEhVXXsNcg5pVEekkM8hTeurXDawO41H9LhWOfDX6h5ttGFzhWxY13VVx7j3aTxdpHU46+E+mdmew74eGeCGAvj7QzZ8+NwbCnBDXwjczbsz3PEF8C8OeJVK/DwhHzaHQa9sy2Jclrg5bHtBUWYpsCGpPPQVubBVqg3dYejKENxQCHRDnUPgib81FLjTIr6vUtx39bVhf+hPBG4v1YZNs5HAz/Fjoizq5RI5h9nVVUihhN1pYooCJ0hLqm1HYop4E1IpSX3ArdIsSAPHcSa4hkR5KBLC/dJZTwu/Cl33g2M7ElNow4neaSQFtiMxxe7Hm5vr61efPv9kOxJT7O4dHDx58ujRDbThvlYEN9xnw4cMGz58tOHtLRs+aLoqPYA3hD+H+Ia3W0PYv0DUhvvwhgddL/0Ia3i0t/fl68n+/Br2LsbO6beTr8fH33AFNYvTU+D/BmQYhmEYhmEYhmEYhmEYhmEYhmEYhmEY5kfnP681Z9raB7FaAAAAAElFTkSuQmCC"
  },
  {
    id: 23,
    name: "Face Mist",
    category: "skincare",
    price: 399,
    discount: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmwxgW5MJAe6OUZpcrV1o-UwstCjWCfB0dA&s"
  },
  {
    id: 24,
    name: "Hair Comb",
    category: "haircare",
    price: 99,
    discount: 5,
    image: "https://m.media-amazon.com/images/I/71WmBY-nquL.jpg"
  },
  {
    id: 25,
    name: "Mascara",
    category: "makeup",
    price: 499,
    discount: 15,
    image: "https://sdcdn.io/cl/cl_sku_V82P01_2400x2400_0.jpg"
  },
  {
    id: 26,
    name: "Foot Cream",
    category: "skincare",
    price: 299,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/51wtB7FDN1L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 27,
    name: "Hair Brush",
    category: "haircare",
    price: 199,
    discount: 5,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FWet-Hair-Brush-Metallic-Pink%2Fdp%2FB0095JFWK0&psig=AOvVaw2dslCijWmEtto0HWaZhsZ8&ust=1759486816625000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjw7KalhZADFQAAAAAdAAAAABAE"
  },
  {
    id: 28,
    name: "Lip Balm",
    category: "makeup",
    price: 149,
    discount: 5,
    image: "https://aqualogica.in/cdn/shop/files/Pink_Sorbet_Plump__Lip_balm.jpg?v=1722338000"
  },
  {
    id: 29,
    name: "Shaving Cream",
    category: "skincare",
    price: 399,
    discount: 10,
    image: "https://images-static.nykaa.com/media/catalog/product/7/9/797776127306_1a.jpg?tr=w-500"
  },
  {
    id: 30,
    name: "Hair Color",
    category: "haircare",
    price: 799,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61FCrSdaPlL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 31,
    name: "Lip Tint",
    category: "makeup",
    price: 299,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/51pi8pP1c4L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 32,
    name: "Face Cleanser",
    category: "skincare",
    price: 499,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/51ldoDeRrcL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 33,
    name: "Hair Tonic",
    category: "haircare",
    price: 599,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/5100CZVUT0L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 34,
    name: "Lip Scrub",
    category: "makeup",
    price: 199,
    discount: 5,
    image: "https://images-cdn.ubuy.co.in/6419d2f8c566b620ed2a1ecd-barry-m-lip-scrub.jpg"
  },
  {
    id: 35,
    name: "Hand Wash",
    category: "skincare",
    price: 249,
    discount: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH0cB0qMSHZiMb5G5s6s9wsG508U5Z6_SpQ&s"
 
  },
    {
    id: 36,
    name: "Face Toner",
    category: "skincare",
    price: 399,
    discount: 10,
    image: "https://plumgoodness.com/cdn/shop/files/001_41d5040f-b66f-4d3e-8b6d-eafd4e4928c0.jpg?v=1757660268&width=1214"
  },
  {
    id: 37,
    name: "Hair Mousse",
    category: "haircare",
    price: 349,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/51AFRGz9t1L._UF350,350_QL80_.jpg"
  },
  {
    id: 38,
    name: "Eyeshadow Palette",
    category: "makeup",
    price: 899,
    discount: 20,
    image: "https://marscosmetics.in/cdn/shop/products/MG_6125-2_f89c9a23-1d52-438a-85c3-64f2a32a0c59.jpg?v=1719475457&width=2000"
  },
  {
    id: 39,
    name: "Body Butter",
    category: "skincare",
    price: 499,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/41vbEh35rRL._SR290,290_.jpg"
  },
  {
    id: 40,
    name: "Hair Straightener",
    category: "haircare",
    price: 1999,
    discount: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2PgOzwThXtmFkauKyDkRdvnW-7zhHF-wDA&s"
  },
  {
    id: 41,
    name: "Compact Powder",
    category: "makeup",
    price: 399,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/61J33J5nBBL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 42,
    name: "Face Serum",
    category: "skincare",
    price: 699,
    discount: 20,
    image: "https://www.themancompany.com/cdn/shop/files/TMC_2_Salicylic_Primary_Image_6_61471d0b-1c41-4ed3-b4b8-0182b84a6bc0.jpg?v=1720693342"
  },
  {
    id: 43,
    name: "Hair Dryer",
    category: "haircare",
    price: 1499,
    discount: 15,
    image: "https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/g/h/ghpddabepp10_5_.jpg"
  },
  {
    id: 44,
    name: "Eyelash Curler",
    category: "makeup",
    price: 499,
    discount: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNQ2rnBdy0WT7ZYaKr-i5RE3nr5ArfVKU_A&s"
  },
  {
    id: 45,
    name: "Moisturizing Cream",
    category: "skincare",
    price: 599,
    discount: 15,
    image: "https://yellowbee.online/cdn/shop/files/cetaphil-moisturising-cream-ultimate-hydration-for-face-body-dry-to-normal-skin-80g-606496.jpg?v=1727835925"
  },
  {
    id: 46,
    name: "Hair Serum Anti-Frizz",
    category: "haircare",
    price: 699,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/51eIUfDK9vL.jpg"
  },
  {
    id: 47,
    name: "Makeup Brush Set",
    category: "makeup",
    price: 899,
    discount: 25,
    image: "https://www.paccosmetics.com/cdn/shop/files/8904341200162_img.main.jpg?v=1738232745&width=1500"
  },
  {
    id: 48,
    name: "Anti-Aging Cream",
    category: "skincare",
    price: 799,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/81HHI-Vtw5L.jpg"
  },
  {
    id: 49,
    name: "Hair Conditioner Repair",
    category: "haircare",
    price: 449,
    discount: 15,
    image: "https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2,q-40/static/img/product/266068/naturali-damage-repair-conditioner-180ml_1_display_1747718889_1c261519.jpg"
  },
  {
    id: 50,
    name: "Blending Sponge",
    category: "makeup",
    price: 199,
    discount: 5,
    image: "https://m.media-amazon.com/images/I/61HJ9QYfjBL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 51,
    name: "Face Exfoliator",
    category: "skincare",
    price: 399,
    discount: 15,
    image: "https://innovist.com/cdn/shop/files/face_scrub_54f0fe24-c739-446f-92ae-600449c7eff0.jpg?v=1756492227&width=900"
  },
  {
    id: 52,
    name: "Hair Misting Spray",
    category: "haircare",
    price: 299,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/51b1TQRWEWL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 53,
    name: "Contour Kit",
    category: "makeup",
    price: 699,
    discount: 20,
    image: "https://iloveluscious.com/cdn/shop/products/LusciousCosmetics-FaceContourKit.png?v=1743767514"
  },
  {
    id: 54,
    name: "Face Cleansing Gel",
    category: "skincare",
    price: 499,
    discount: 15,
    image: "https://d2wfc4v12a2zxr.cloudfront.net/resized/medium/products/sinoz-sebum-face-cleansing-gel__22809_23273_1705574838.webp"
  },
  {
    id: 55,
    name: "Hair Oil Nourishing",
    category: "haircare",
    price: 549,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71daoJjmS9L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 56,
    name: "Makeup Remover",
    category: "makeup",
    price: 399,
    discount: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZv7eQ2jwHhsIU6DbjKMgNH1w3BlhE2WNFg&s"
  },
  {
    id: 57,
    name: "Body Wash",
    category: "skincare",
    price: 299,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/51ZLM+t9+yL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 58,
    name: "Hair Mask Repair",
    category: "haircare",
    price: 699,
    discount: 20,
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/135688/2025/2/27/8fb3cb98-4116-4ef1-b0db-b24e5879ce491740655608317-LOreal-Paris-Total-Repair-5-Hair-Masque-200ml-51017406556079-1.jpg"
  },
  {
    id: 59,
    name: "Lipstick Matte",
    category: "makeup",
    price: 349,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/51whWS0xHkL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 60,
    name: "Face Pack",
    category: "skincare",
    price: 299,
    discount: 10,
    image: "https://imgs.justfreeup.com/fit-in/600x600/filters:upscale()/66ab869344795ba9b5efacb7b71b013c.jpg"
  },
  {
    id: 61,
    name: "Hair Serum Shine",
    category: "haircare",
    price: 599,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61+hry7xIuL.jpg"
  },
  {
    id: 62,
    name: "Eyeliner Liquid",
    category: "makeup",
    price: 249,
    discount: 10,
    image: "https://marscosmetics.in/cdn/shop/products/EL03-4W.jpg?v=1647930734"
  },
  {
    id: 63,
    name: "Hand Lotion",
    category: "skincare",
    price: 199,
    discount: 5,
    image: "https://images-cdn.ubuy.co.in/6856921a948bd479350ac990-hand-cream-moisturizing-hydrating-hand.jpg"
  },
  {
    id: 64,
    name: "Hair Spray Volume",
    category: "haircare",
    price: 399,
    discount: 15,
    image: "https://in.moroccanoil.com/cdn/shop/files/108_STYLE-FINISHER_VOLUMIZING-MIST_160mL_v2_64277ce1-a41e-4c3d-8478-4f4420c86b1e.jpg?v=1687337730"
  },
  {
    id: 65,
    name: "Compact Matte Powder",
    category: "makeup",
    price: 499,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61FDV10Re5L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 66,
    name: "Face Moisturizer",
    category: "skincare",
    price: 599,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/51SJEUEt1NL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 67,
    name: "Hair Styling Wax",
    category: "haircare",
    price: 299,
    discount: 10,
    image: "https://www.jiomart.com/images/product/original/rvcicevtcy/inamorata-mg5-hair-wax-for-men-and-boys-hair-styling-wax-hair-gel-pack-of-4-product-images-orvcicevtcy-p597976883-1-202301310101.jpg?im=Resize=(420,420)"
  },
  {
    id: 68,
    name: "Lipstick Glossy",
    category: "makeup",
    price: 299,
    discount: 10,
    image: "https://images-cdn.ubuy.co.in/67ee2f3104cde8b8dd05ba25-dark-red-lipstick-for-women-moisture.jpg"
  },
  {
    id: 69,
    name: "Face Wash Gel",
    category: "skincare",
    price: 399,
    discount: 15,
    image: "https://images.thedermaco.com/catalog/product/t/e/texture_1.jpg?auto=format&fit=contain&width=720&auto=compress?format=auto"
  },
  {
    id: 70,
    name: "Hair Straightening Cream",
    category: "haircare",
    price: 699,
    discount: 20,
    image: "https://images-static.nykaa.com/media/catalog/product/9/0/902d4e18901247577299_1.jpg"
  },
    {
    id: 71,
    name: "Eyeshadow Single",
    category: "makeup",
    price: 249,
    discount: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEIwWeIHlYipWH68A1KlYw4zDRtotRk-tMg&s"
  },
  {
    id: 72,
    name: "Face Scrub",
    category: "skincare",
    price: 399,
    discount: 15,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/scrub/r/r/2/-original-imaguybze2n6kwcr.jpeg?q=9"
  },
  {
    id: 73,
    name: "Hair Oil Anti-Dandruff",
    category: "haircare",
    price: 549,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/51RB01ZmNCL.jpg"
  },
  {
    id: 74,
    name: "Lip Crayon",
    category: "makeup",
    price: 199,
    discount: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZVvECMKcPM_747IDJNcesjiTzGfiRp0WSg&s"
  },
  {
    id: 75,
    name: "Moisturizing Body Cream",
    category: "skincare",
    price: 499,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/51GsfZwnoxL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 76,
    name: "Hair Serum Smooth",
    category: "haircare",
    price: 699,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/512LtMvZZ2L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 77,
    name: "Blush Stick",
    category: "makeup",
    price: 299,
    discount: 10,
    image: "https://artdeco.com/cdn/shop/files/img_product-6be46e39b83d73e274a69a7732e334a3.jpg?v=1741162508"
  },
  {
    id: 78,
    name: "Face Serum Vitamin E",
    category: "skincare",
    price: 799,
    discount: 25,
    image: "https://mridulmadhok.in/cdn/shop/products/IMG-20220109-WA0011.jpg?v=1749724432&width=957"
  },
  {
    id: 79,
    name: "Hair Conditioner Moisture",
    category: "haircare",
    price: 449,
    discount: 15,
    image: "https://ayurherbals.co/cdn/shop/files/hair-conditioner-50ml.jpg?v=1751263058"
  },
  {
    id: 80,
    name: "Lipstick Creamy",
    category: "makeup",
    price: 349,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/51SzjoY5sUL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 81,
    name: "Face Cream Night",
    category: "skincare",
    price: 699,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/71Fz0oBzjVL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 82,
    name: "Hair Oil Shine",
    category: "haircare",
    price: 499,
    discount: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQta5Q1Kd4G5hIdIVQ6kD-BXocUZjJSE0CKPA&s"
  },
  {
    id: 83,
    name: "Concealer Stick",
    category: "makeup",
    price: 399,
    discount: 10,
    image: "https://makeupempire.in/cdn/shop/files/JG-272-05-1_1120x.png?v=1715219779"
  },
  {
    id: 84,
    name: "Face Moisturizer SPF",
    category: "skincare",
    price: 599,
    discount: 15,
    image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/moisturizers/am-facial-moisturizing-lotion-with-sunscreen/am-30-facial-moisturizer_front.jpg?rev=675a526e833f404e8ab1a167f77c7b58&w=900&hash=D20AD679891C2D1AD2A24B2A15C7F7D6"
  },
  {
    id: 85,
    name: "Hair Mousse Curl",
    category: "haircare",
    price: 349,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/61oDqD4en-L.jpg"
  },
  {
    id: 86,
    name: "Lipstick Matte Red",
    category: "makeup",
    price: 299,
    discount: 5,
    image: "https://m.media-amazon.com/images/I/51Afi6te6pL.jpg"
  },
  {
    id: 87,
    name: "Face Pack Brightening",
    category: "skincare",
    price: 399,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/71HJeHrxv2L.jpg"
  },
  {
    id: 88,
    name: "Hair Oil Repair",
    category: "haircare",
    price: 599,
    discount: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26w15zD3PtAFB9bC5CzNv_XetdbaEVda9yg&s"
  },
  {
    id: 89,
    name: "Lip Gloss Pink",
    category: "makeup",
    price: 249,
    discount: 5,
    image: "https://marscosmetics.in/cdn/shop/files/9.1.jpg?v=1750833422&width=2000"
  },
  {
    id: 90,
    name: "Face Toner Rose",
    category: "skincare",
    price: 399,
    discount: 10,
    image: "https://joypersonalcare.com/cdn/shop/files/WhatsAppImage2025-06-26at14.39.03_4f13aa59.jpg?v=1750930076"
  },
  {
    id: 91,
    name: "Hair Serum Anti-Dry",
    category: "haircare",
    price: 699,
    discount: 20,
    image: "https://images-static.nykaa.com/media/catalog/product/e/a/eaa86558901088134590_1.jpg"
  },
  {
    id: 92,
    name: "Blush Powder",
    category: "makeup",
    price: 299,
    discount: 10,
    image: "https://www.newu.in/cdn/shop/products/8902656402745-2_1024x1024.jpg?v=1671792815"
  },
  {
    id: 93,
    name: "Face Serum Hydrating",
    category: "skincare",
    price: 799,
    discount: 25,
    image: "https://www.dotandkey.com/cdn/shop/files/1c_feeeecf5-a597-40aa-94f2-fc367e5df797.jpg?v=1727355174"
  },
  {
    id: 94,
    name: "Hair Conditioner Soft",
    category: "haircare",
    price: 449,
    discount: 15,
    image: "https://m.media-amazon.com/images/I/51rsm5ixP0L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 95,
    name: "Lip Liner Brown",
    category: "makeup",
    price: 199,
    discount: 5,
    image: "https://m.media-amazon.com/images/I/71JgOmPmLTL.jpg"
  },
  {
    id: 96,
    name: "Face Scrub Aloe",
    category: "skincare",
    price: 399,
    discount: 10,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 97,
    name: "Hair Oil Nourish",
    category: "haircare",
    price: 549,
    discount: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06SjuJVe73CTBd7j6l9QQwIczf4CQPOiRvA&s"
  },
  {
    id: 98,
    name: "Lip Balm Strawberry",
    category: "makeup",
    price: 149,
    discount: 5,
    image: "https://www.dotandkey.com/cdn/shop/files/1_fa77191d-35f3-41c9-8644-f6c7a0fc7774.jpg?v=1744711227"
  },
  {
    id: 99,
    name: "Face Cream Day",
    category: "skincare",
    price: 699,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61fqwozv1BL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 100,
    name: "Hair Mask Deep Repair",
    category: "haircare",
    price: 799,
    discount: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06SjuJVe73CTBd7j6l9QQwIczf4CQPOiRvA&s"
  },
]


  

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <div class="product-actions">
        <button class="btn-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="btn-wishlist" onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      </div>
    `;

    productList.appendChild(card);
  });
}
function applyFilters() {
  const category = document.getElementById("categoryFilter").value;
  const priceRange = document.getElementById("priceFilter").value;

  let filteredProducts = products;

  // Category filter
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  // Price filter
  if (priceRange !== "all") {
    if (priceRange.includes("-")) {
      const [min, max] = priceRange.split("-").map(Number);
      filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    } else if (priceRange === "2000") {
      filteredProducts = filteredProducts.filter(p => p.price > 2000);
    }
  }

  renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(list) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = "<p>No products match your filters.</p>";
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <div class="product-actions">
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      </div>
    `;

    productList.appendChild(card);
  });
}


 document.addEventListener("DOMContentLoaded", displayProducts);

 let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(id) {
  const product = products.find(p => p.id === id);

  if (!wishlist.some(w => w.id === id)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(product.name + " added to Wishlist!");
  } else {
    alert(product.name + " is already in your Wishlist!");
  }
}



 






 
