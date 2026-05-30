import cakesSpecialImg from './assets/images/cakes_special_1779797201179.png';
import browniesSpecialImg from "./assets/images/Brownie01.png";
import cupcakesSpecialImg from './assets/images/Cupcake01.png';
import Blackforestcake from './assets/images/Black forest.webp';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';
import vanillaCake from './assets/images/Vanilla-cake.jpg';

export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'brownies' | 'chocolate-cupcakes' | 'vanilla-cupcakes';
  price: number;
  unit: string;
  badge?: 'Bestseller' | 'New Arrival' | 'Chef Special' | 'Get 10% Off' | 'Must Try' | 'Gift Pack';
  badgeColor?: 'pink' | 'gold' | 'teal';
  description: string;
  image: string;
  features: string[];
  isVeg: boolean;
}

export const PRODUCTS: Product[] = [
  // 1. Cakes Category
  {
    id: 'cake-vanilla',
    name: 'Vanilla cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Decadent rich vanilla bean sponge cake layered with premium white vanilla diplomat cream and white chocolate shavings.',
    image: vanillaCake,
    features: ['Madagascar vanilla bean', 'Smooth whipping cream', 'Perfect elegant look'],
    isVeg: true,
  },

  {
    id: 'cake-blackforest',
    name: 'Black forest cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Classic rich chocolate sponge layers filled with sweet whipped cream and juicy cherries, topped with chocolate shavings.',
    image: Blackforestcake,
    features: ['Dark chocolate flakes', 'Fresh cream piping', 'Traditional cherry layers'],
    isVeg: true,
  },
  {
    id: 'cake-pineapple',
    name: 'Pineapple cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Light and airy vanilla sponge cake layered with chopped pineapples, juicy pineapple syrup, and rich fresh cream.',
    image: 'src/assets/images/pineapple-cake-700x700.webp',
    features: ['Real pineapple chunks', 'Soft vanilla sponge', 'Melt-in-mouth icing'],
    isVeg: true,
  },
  {
    id: 'cake-kulfi-falooda',
    name: 'Kulfi Falooda cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'Signature fusion dessert cake blending classic royal rose syrup, falooda vermicelli textures, and rich cardamom-infused kulfi flavors.',
    image: 'src/assets/images/kulfi faluda.jpg',
    features: ['Cardamom & Saffron notes', 'Fusion Indian flavor', 'Pistachio toppings'],
    isVeg: true,
  },
  {
    id: 'cake-gulab-gulkand',
    name: 'Gulab gulkand cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'Distinctive sponge cake layered with premium aromatic sweetened rose petal preservation (gulkand) and soft gulab jamun bites.',
    image: 'src/assets/images/Gulab gulkand.jpg',
    features: ['Rich premium gulkand syrup', 'Soft gulab jamun garnish', 'Royal rose scent'],
    isVeg: true,
  },
  {
    id: 'cake-coffee',
    name: 'Coffee cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'New Arrival',
    badgeColor: 'teal',
    description: 'Aromatic espresso-infused sponge layers sandwiched between airy coffee whipped cream frosting and cocoa dust.',
    image: 'src/assets/images/coffee cake.jpeg',
    features: ['Fresh espresso infusion', 'Perfect bittersweet balance', 'Grated dark chocolate'],
    isVeg: true,
  },
  {
    id: 'cake-oreo',
    name: 'Oreo cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Must Try',
    badgeColor: 'pink',
    description: 'Crunchy crushed Oreo cookies folded into cookies-and-cream chocolate frosting inside beautiful moist cocoa cake layers.',
    image: 'src/assets/images/oreo cake.jpg',
    features: ['Real Oreo cookies', 'Creamy Oreo frosting', 'Kid-friendly bestseller'],
    isVeg: true,
  },
  {
    id: 'cake-rasmalai',
    name: 'Rasmalai cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Decadent cake infused with royal saffron-pistachio cardamom milk, stuffed with real cottage cheese Rasmalai chunks.',
    image: 'src/assets/images/Rasmalai.webp',
    features: ['Authentic sweet Rasmalai', 'Rich saffron-pistachio cream', 'Elegant festive highlight'],
    isVeg: true,
  },
  {
    id: 'cake-chocolate',
    name: 'Chocolate cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Must Try',
    badgeColor: 'teal',
    description: 'Perfect simple cocoa sponge layered with sweet, chocolate fresh cream and beautiful chocolate curls.',
    image: 'src/assets/images/chocolate.webp',
    features: ['Smooth chocolate cream', 'Moist layers', 'Includes celebration accessories'],
    isVeg: true,
  },
  {
    id: 'cake-truffle',
    name: 'Chocolate truffle cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Decadent multi-layered moist chocolate sponge sandwiched with dark chocolate ganache, finished with a mirror-glaze truffle coat.',
    image: 'src/assets/images/truffle cake.jpeg',
    features: ['Real premium dark chocolate', 'Moist layers', 'Includes candle & spatula'],
    isVeg: true,
  },
  {
    id: 'cake-photoprint',
    name: 'Photo print cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Gift Pack',
    badgeColor: 'gold',
    description: 'Fully personalized cake featuring high-definition edible sugar-sheet printing of your favorite memory photo.',
    image: 'src/assets/images/photo print cake.jpeg',
    features: ['100% edible photo ink', 'Custom premium frame design', 'Personalized text details'],
    isVeg: true,
  },
  {
    id: 'cake-barbiedoll',
    name: 'Barbie doll cake',
    category: 'cakes',
    price: 0,
    unit: '1 kg / 1.5 kg',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'Stunning 3D princess doll cake styled with custom designer pink fresh cream frosting cascades and star sprinkles.',
    image: 'src/assets/images/barbie.jpeg',
    features: ['Elegant Barbie centerpiece', 'Intricate rosette skirt piping', 'Perfect for child birthday theme'],
    isVeg: true,
  },
  {
    id: 'cake-plum',
    name: 'Plum cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / Pack of 3',
    badge: 'New Arrival',
    badgeColor: 'teal',
    description: 'Rich traditional-blend fruit cake loaded with rum-infused black currants, candied orange peels, walnuts, and fine warm spices.',
    image: 'src/assets/images/plum cake.jpg',
    features: ['Matured dry fruits selection', 'Rich winter spice blend', 'Sponge buttery finish'],
    isVeg: true,
  },
  {
    id: 'cake-vintage',
    name: 'Vintage cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Must Try',
    badgeColor: 'pink',
    description: 'Charming, retro-style cake styled with elaborate buttercream piping ribbons, royal ruffles, and classic maraschino cherries on top.',
    image: 'src/assets/images/vintage cake.jpg',
    features: ['Ornate Victorian piping', 'Rich customizable base sponge', 'Charming retro-inspired finish'],
    isVeg: true,
  },
  {
    id: 'cake-spacer',
    name: 'Spacer cake',
    category: 'cakes',
    price: 0,
    unit: '1 kg / 1.5 kg',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'A structural masterpiece featuring elegant rising structural spacer rings, allowing beautiful flower arrays or light installations beneath higher layers.',
    image: 'src/assets/images/spacer cake.jpg',
    features: ['Modern multi-tier design', 'Customizable crystal/acrylic tier spacer', 'Dramatic party statement look'],
    isVeg: true,
  },
  {
    id: 'cake-theme',
    name: 'Theme cake',
    category: 'cakes',
    price: 0,
    unit: '0.5 kg / 1 kg',
    badge: 'Gift Pack',
    badgeColor: 'teal',
    description: 'Individually conceptualized themed cakes built to match your design palette—perfect for anniversaries, anime styles, professions, or kid cartoons.',
    image: 'src/assets/images/theme cake.jpg',
    features: ['Personalized handcrafted elements', 'Colorful food-safe fondant details', 'Signature gourmet filling flavor'],
    isVeg: true,
  },
  // 2. Brownies Category
  {
    id: 'brownie-walnut',
    name: 'Brownie',
    category: 'brownies',
    price: 40,
    unit: '1 piece / Pack of 4',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Delectable, rich and fudgy homemade eggless brownie loaded with premium toasted California walnuts.',
    image: browniesSpecialImg,
    features: ['Fudgy center with crackly top', 'Crunchy premium walnuts', '100% pure veg'],
    isVeg: true,
  },

  // {
  //   id: 'brownie-fudge',
  //   name: 'Choco fudge brownie',
  //   category: 'brownies',
  //   price: 40,
  //   unit: '1 piece / Pack of 4',
  //   badge: 'Must Try',
  //   badgeColor: 'gold',
  //   description: 'Decadent chocolate brownie topped with thick, luxurious chocolate fudge ganache drizzle.',
  //   image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
  //   features: ['Double chocolate goodness', 'Dense chewiness', 'Perfect with ice cream'],
  //   isVeg: true,
  // },

  // 3. Chocolate Cupcakes Category
  {
    id: 'cupcake-chocolate-fudge',
    name: 'Cupcake',
    category: 'chocolate-cupcakes',
    price: 50,
    unit: '1 piece / Pack of 6',
    badge: 'Bestseller',
    badgeColor: 'pink',
    description: 'Fluffy chocolate sponge base topped with rich and smooth cocoa frosting spirals and sweet sprinkles.',
    image: cupcakesSpecialImg,
    features: ['Signature cocoa butter sponge', 'Velvety frosting', 'Handcrafted decoration'],
    isVeg: true,
  },

  // {
  //   id: 'cupcake-choco-lava',
  //   name: 'Choco lava cupcake',
  //   category: 'chocolate-cupcakes',
  //   price: 50,
  //   unit: '1 piece / Pack of 6',
  //   badge: 'New Arrival',
  //   badgeColor: 'teal',
  //   description: 'Moist chocolate cupcake filled with a rich, molten liquid chocolate core that oozes on the first bite.',
  //   image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
  //   features: ['Molten chocolate center', 'Warm & soft texture', 'Decadent cocoa selection'],
  //   isVeg: true,
  // },

  // 4. Vanilla Sponge Cupcakes Category
  {
    id: 'cupcake-vanilla-sponge',
    name: 'Vanilla sponge cupcake',
    category: 'vanilla-cupcakes',
    price: 50,
    unit: '1 piece / Pack of 6',
    badge: 'Chef Special',
    badgeColor: 'gold',
    description: 'Light and airy vanilla sponge cupcakes crowned with luscious, creamy milk chocolate peaks and chocolate flakes.',
    image: 'src/assets/images/Vanilla sponge cupcakes.jpeg',
    features: ['Premium vanilla base', 'Milk chocolate whipped frosting', 'Delicate crumb texture'],
    isVeg: true,
  }
];

export const DELIVERY_ZONES = [
  {
    name: 'Navi Mumbai',
    areas: ['Vashi', 'Nerul', 'Koparkhairane', 'Belapur', 'Kharghar', 'Ghansoli', 'Airoli'],
    description: 'Carefully packed cake boxes delivered in air-conditioned courier transit to protect frosting.'
  },
  {
    name: 'Central Mumbai',
    areas: ['Kanjurmarg', 'Bhandup', 'Mulund', 'Ghatkopar', 'Vikhroli', 'Sion', 'Kurla', 'Dadrar'],
    description: 'Local lightning delivery from our Kanjurmarg West workspace. Freshly out of the oven.'
  },
  {
    name: 'Western Mumbai',
    areas: ['Andheri', 'Bandra', 'Borivali', 'Malad', 'Goregaon', 'Juhu', 'Santacruz'],
    description: 'Reliable doorstep delivery in specialized insulation boxes to retain ideal chilled texture.'
  }
];

export const CONTACT_INFO = {
  owner: 'Vaishali Nilesh Sarang',
  brand: 'Vaishali Bakers',
  phone: '9892047995',
  phoneDisplay: '+91 9892047995',
  email: 'vaishalisarang1985@gmail.com',
  address: '232/B-3, Dockyard Colony, Kanjurmarg (W), Mumbai 400078',
  hours: '8:00 AM — 11:00 PM',
  whatsappLink: 'https://wa.me/919892047995',
};
