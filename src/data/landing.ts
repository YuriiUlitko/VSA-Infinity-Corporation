import { asset } from '../utils/asset';

export const contact = {
  email: 'vsainfinity@gmail.com',
  phone: '(267) 903-9999',
  phoneHref: 'tel:+12679039999',
  /** Opens WhatsApp chat with this US number */
  whatsappHref: 'https://wa.me/12679039999',
};


export const heroImage = asset('hero-bathroom.jpg');


export const trustItems = [
{ title: 'Full Turnkey Delivery', detail: 'One crew from demolition to final fixture.' },
{ title: 'Custom Tile & Waterproofing', detail: 'Membrane-sealed pans and hand-set tile.' },
{ title: 'Transparent Pricing', detail: 'A written fixed quote before work begins.' },
{ title: 'Fast & Tidy Turnaround', detail: 'Protected floors and daily clean-up.' }];


export const services = [
{
  title: 'Full Bathroom Remodeling',
  description:
  'Turnkey demolition, drywall, plumbing, tile, lighting, and custom vanity — managed start to finish by one licensed team.',
  tags: ['Demolition', 'Plumbing', 'Tile', 'Lighting', 'Custom vanity'],
  image: asset('service-full-remodel.jpg')

},
{
  title: 'Tub-to-Shower Conversions',
  description: 'Curbless walk-in showers and frameless glass enclosures.',
  tags: ['Demo & removal', 'Waterproofing', 'Tile', 'Glass enclosure', 'Fixtures'],
  image: asset('service-tub-shower.jpg')

},
{
  title: 'Custom Tile & Flooring',
  description: 'Porcelain, natural stone, and waterproof shower pans.',
  tags: ['Porcelain', 'Natural stone', 'Mosaic', 'Shower pans', 'Heated floors'],
  image: asset('service-flooring.jpg')

},
{
  title: 'Vanities, Fixtures & Finishes',
  description: 'Modern LED mirrors, faucets, and premium hardware.',
  tags: ['Vanities', 'LED mirrors', 'Faucets', 'Hardware', 'Lighting'],
  image: asset('service-vanity.jpg')

}];


export const steps = [
{
  number: '01',
  title: 'Consultation',
  description: 'We visit your home, measure the space, and talk through layout, finishes, and budget.'
},
{
  number: '02',
  title: 'Scope & Fixed Quote',
  description: 'You receive a detailed written scope and one fixed price — no hourly surprises.'
},
{
  number: '03',
  title: 'Expert Installation',
  description: 'Our licensed crew handles demo, rough-in, waterproofing, tile, and fixtures on schedule.'
},
{
  number: '04',
  title: 'Final Walkthrough',
  description: 'We review every detail together and don’t sign off until you’re fully satisfied.'
}];

export const remodelReasons = [
  {
    title: 'Create Comfort',
    description:
      'Transform your bathroom into a rejuvenating spa retreat — a place built for genuine relaxation rather than daily compromise.',
  },
  {
    title: 'Enhance Safety',
    description:
      'Eliminate slipping hazards by trading traditional tubs for seamless walk-in showers and subtle grab bars designed for effortless accessibility.',
  },
  {
    title: 'Save Water and Energy',
    description:
      'High-efficiency fixtures drastically curb resource waste while shrinking monthly bills — a modern toilet upgrade alone can preserve around 13,000 gallons each year.',
  },
  {
    title: 'Maximize Property Equity',
    description:
      'Remodeling your bath stands as one of the highest-yield home projects, consistently returning 60% to 70% of its initial cost upon resale.',
  },
];


export const serviceAreas = [
'Collegeville',
'Trappe',
'Phoenixville',
'Royersford',
'Limerick',
'Skippack',
'King of Prussia',
'Schwenksville',
'Audubon',
'Oaks',
'Eagleville',
'Worcester',
'Blue Bell',
'Norristown',
'Lansdale'];

/** Pin tip positions as % of public/service-areas-map.png (zoomed crop of photo/map.png). */
export const serviceAreaPins: { name: string; x: number; y: number }[] = [
  { name: 'Schwenksville', x: 32.5, y: 8.0 },
  { name: 'Lansdale', x: 75.3, y: 12.9 },
  { name: 'Limerick', x: 18.6, y: 16.4 },
  { name: 'Skippack', x: 47.9, y: 19.1 },
  { name: 'Worcester', x: 60.5, y: 26.2 },
  { name: 'Trappe', x: 29.7, y: 27.7 },
  { name: 'Collegeville', x: 35.3, y: 31.5 },
  { name: 'Royersford', x: 14.8, y: 32.0 },
  { name: 'Eagleville', x: 45.7, y: 41.7 },
  { name: 'Blue Bell', x: 79.5, y: 42.6 },
  { name: 'Oaks', x: 33.4, y: 49.6 },
  { name: 'Phoenixville', x: 20.3, y: 49.9 },
  { name: 'Audubon', x: 40.1, y: 50.6 },
  { name: 'Norristown', x: 62.0, y: 52.9 },
  { name: 'King of Prussia', x: 48.6, y: 63.8 },
];

export const faqs = [
  {
    question: 'How much does a bathroom remodel cost?',
    answer:
      'Every project is different, so we provide a written fixed quote after an in-home consultation. That way you know the full scope and price before work begins — no hourly surprises.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most full bathroom remodels finish in about 1–3 weeks once work starts, depending on size, tile choices, and plumbing or electrical updates. We’ll give you a clear timeline with your quote.',
  },
  {
    question: 'Do I need to move out while you work?',
    answer:
      'Usually not. We protect floors and living areas, clean up daily, and keep the rest of your home usable. We’ll walk you through access and daily schedule before we start.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. VSA Infinity Corporation is a licensed and fully insured home improvement contractor serving Montgomery and Chester Counties in Pennsylvania.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We remodel bathrooms across Montgomery and Chester Counties — including Collegeville, Phoenixville, King of Prussia, Blue Bell, Lansdale, and nearby towns. Don’t see yours? Ask us; we likely cover it.',
  },
  {
    question: 'Is the estimate really free?',
    answer:
      'Yes. Your in-home consultation and written estimate are free and non-binding. Final pricing is confirmed in the fixed quote before we begin.',
  },
];

/** Real Google reviews from John's Handyman House Repair (maps.app.goo.gl/YjVqysEeC6zPWBh27) */
export const testimonials = [
{
  quote:
  'Johnny did an excellent job — fast, high-quality, and very professional. My bathroom has been completely transformed, and the result exceeded my expectations. Huge thanks to Johnny! I highly recommend him — a true professional.',
  name: 'Aleksey S.',
  location: 'Google Review',
  project: 'Bathroom Remodel',
  rating: 5
},
{
  quote:
  'Johnny is fantastic. He has helped us for the past 4 years with making repairs and upgrades to our 100 year old home. He knows how to do everything! He is highly skilled from performing odd jobs to more involved electrical work, plumbing and flooring. Johnny is a kind and fair man who takes pride in his work. He is reliable and has become like a part of our family. He recently replaced our old bathtub with a beautiful new walk in shower. Major makeover.',
  name: 'Joan Carter',
  location: 'Google Review',
  project: 'Tub-to-Shower Conversion',
  rating: 5
},
{
  quote:
  'We’ve known Johnny for over 2 years now. He is reliable, professional and very good at his craft. From hanging curtain rods to remodeling our rental property’s kitchen, Johnny has handled everything to perfection and with fair pricing. Highly recommend him.',
  name: 'Sugandh Goel',
  location: 'Google Review',
  project: 'Kitchen Remodel',
  rating: 5
},
{
  quote:
  'I have used Johnny about 5 times for various tasks (water filter, new outdoor spigot, ice maker repair, bathroom repairs, etc.) He is always fast, fair, and honest. I highly recommend him for any tasks!',
  name: 'Michael McHugh',
  location: 'Google Review',
  project: 'Home Repairs',
  rating: 5
},
{
  quote:
  'I needed to level a 25 foot area in my backyard for a pool install and received some outrageous prices from a few local guys. I got to say I was hesitant at first, but John quickly put my mind at ease giving me a firm, reasonable price. He came out when he said he would updating me along the way. When he came over he got right to work leveled everything and cleared all debris. He even blew off my driveway where the dirt came off the skid steer. Highly highly recommend. Work ethic like this is a rarity and John has it!',
  name: 'Adam R.',
  location: 'Google Review',
  project: 'Yard Leveling',
  rating: 5
}];


/**
 * Curated frames of 3: long review as featured (green),
 * two similar-length reviews on the side so heights stay balanced.
 */
export const testimonialSlides = [
[1, 0, 2], // Joan | Aleksey, Sugandh
[4, 3, 0], // Adam | Michael, Aleksey
[0, 3, 2] // Aleksey | Michael, Sugandh
];


export const serviceTypes = ['Full Remodel', 'Tub-to-Shower', 'Tile & Flooring', 'Vanity/Fixtures'];