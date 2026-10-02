import { asset } from '../utils/asset';

export const contact = {
  email: 'vsainfinity@gmail.com',
  phone: '(267) 903-9999',
  phoneHref: 'tel:+12679039999'
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