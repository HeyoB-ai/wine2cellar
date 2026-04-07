export interface Producer {
  id: string;
  name: string;
  region: string;
  country: string;
  description: string;
  image: string;
  founded: number;
  hectares: number;
  awards: string[];
  wines: Wine[];
  videoUrl?: string;
  website?: string;
  email?: string;
}

export interface Wine {
  id: string;
  name: string;
  vintage: number;
  type: string;
  price: number;
  image: string;
  description: string;
}

export const producers: Producer[] = [
  {
    id: 'domaine-leflaive',
    name: 'Domaine Leflaive',
    region: 'Bourgogne',
    country: 'Frankrijk',
    description: 'Een van de meest gerenommeerde wijnhuizen van Bourgogne, bekend om hun uitzonderlijke witte wijnen van Chardonnay. Biodynamisch wijnbouwen staat centraal.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
    founded: 1905,
    hectares: 24,
    awards: ['Wine Spectator Top 100', 'Decanter Platinum', 'Biodynamisch gecertificeerd'],
    website: 'https://domaineleflaive.fr',
    email: 'contact@leflaive.fr',
    wines: [
      { id: 'puligny-1', name: 'Puligny-Montrachet Premier Cru', vintage: 2021, type: 'Wit', price: 185, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', description: 'Elegant en mineraal met noten van wit fruit en hazelnoot.' },
      { id: 'bienvenues-1', name: 'Bienvenues-Bâtard-Montrachet Grand Cru', vintage: 2020, type: 'Wit', price: 420, image: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=400&q=80', description: 'Groot wijn met een intense complexiteit en lang aanhoudende afdronk.' },
    ],
  },
  {
    id: 'vega-sicilia',
    name: 'Vega Sicilia',
    region: 'Ribera del Duero',
    country: 'Spanje',
    description: 'Spanje\'s meest iconische wijnhuis, opgericht in 1864. Hun Único is een van de meest gezochte rode wijnen ter wereld.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    founded: 1864,
    hectares: 250,
    awards: ['Wine Advocate 100pt', 'Único — Wijn van het Jaar', 'Robert Parker 98pt'],
    website: 'https://vega-sicilia.com',
    email: 'info@vega-sicilia.com',
    wines: [
      { id: 'unico-1', name: 'Único Reserva Especial', vintage: 2019, type: 'Rood', price: 650, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80', description: 'Het paradepaardje van Vega Sicilia. Diep, complex en eeuwig jong.' },
      { id: 'valbuena-1', name: 'Valbuena 5°', vintage: 2018, type: 'Rood', price: 180, image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=80', description: 'Krachtig en elegantie tegelijkertijd, met rijpe rode vruchten en cederhout.' },
    ],
  },
  {
    id: 'antinori',
    name: 'Marchesi Antinori',
    region: 'Toscane',
    country: 'Italië',
    description: 'Zes eeuwen wijntraditie in één naam. De Antinoris zijn pioniers van de Super Toscanen en een van de meest invloedrijke wijnfamilies van Italië.',
    image: 'https://images.unsplash.com/photo-1543418219-44e30b057fea?w=800&q=80',
    founded: 1385,
    hectares: 3000,
    awards: ['Wine Enthusiast Hall of Fame', 'Decanter Man of the Year', 'Gambero Rosso Tre Bicchieri'],
    website: 'https://antinori.it',
    email: 'wine@antinori.it',
    wines: [
      { id: 'tignanello-1', name: 'Tignanello', vintage: 2020, type: 'Rood', price: 120, image: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80', description: 'De moeder van alle Super Toscanen. Sangiovese met Cabernet Sauvignon en Franc.' },
      { id: 'solaia-1', name: 'Solaia', vintage: 2019, type: 'Rood', price: 320, image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=400&q=80', description: 'Bordeaux-stijl blend met een Toscaans hart. Uitzonderlijke rijpheid en diepte.' },
    ],
  },
  {
    id: 'penfolds',
    name: 'Penfolds',
    region: 'South Australia',
    country: 'Australië',
    description: 'Australiës meest gerenommeerde wijnhuis, opgericht in 1844. De Grange is een van de weinige niet-Bordeaux wijnen op de Pauillac First Growth lijst.',
    image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80',
    founded: 1844,
    hectares: 0,
    awards: ['Grange — Wijn van de Eeuw', 'Wine Spectator #1', 'James Halliday 5-sterren'],
    website: 'https://penfolds.com',
    email: 'winemaker@penfolds.com',
    wines: [
      { id: 'grange-1', name: 'Grange', vintage: 2018, type: 'Rood', price: 950, image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=400&q=80', description: 'Een nationale schat van Australië. Shiraz van ongeëvenaarde concentratie en levensduur.' },
      { id: 'bin707-1', name: 'Bin 707 Cabernet Sauvignon', vintage: 2020, type: 'Rood', price: 380, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80', description: 'Krachtige Cabernet met zwarte bes, ceder en chocolade. Indrukwekkende structuur.' },
    ],
  },
  {
    id: 'chateau-margaux',
    name: 'Château Margaux',
    region: 'Bordeaux',
    country: 'Frankrijk',
    description: 'Premier Grand Cru Classé en een van de vijf First Growths van Bordeaux. Het meest elegante en verfijnde van de First Growths.',
    image: 'https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?w=800&q=80',
    founded: 1590,
    hectares: 82,
    awards: ['Premier Grand Cru Classé 1855', 'Wine Spectator 100pt', 'Jancis Robinson 20/20'],
    website: 'https://chateau-margaux.com',
    email: 'contact@chateau-margaux.com',
    wines: [
      { id: 'margaux-1', name: 'Château Margaux', vintage: 2019, type: 'Rood', price: 1100, image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=80', description: 'De belichaming van elegantie. Fluwelen tannines, violetten en zwarte vruchten.' },
      { id: 'pavillon-rouge-1', name: 'Pavillon Rouge', vintage: 2020, type: 'Rood', price: 220, image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=400&q=80', description: 'De tweede wijn van Margaux. Toegankelijker maar met dezelfde DNA.' },
    ],
  },
  {
    id: 'ornellaia',
    name: 'Ornellaia',
    region: 'Bolgheri',
    country: 'Italië',
    description: 'Een van de absolute toppers van de Toscaanse kust. Ornellaia combineert Bordeaux-druivenrassen met de warmte en intensiteit van de Maremma.',
    image: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80',
    founded: 1981,
    hectares: 97,
    awards: ['Wine Spectator Wijn van het Jaar', 'Decanter 5 sterren', 'Gambero Rosso Tre Bicchieri'],
    website: 'https://ornellaia.com',
    email: 'info@ornellaia.com',
    wines: [
      { id: 'ornellaia-1', name: 'Ornellaia', vintage: 2020, type: 'Rood', price: 280, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', description: 'Seductief en verfijnd. Zwarte kers, cederhout en elegante tannines.' },
      { id: 'masseto-1', name: 'Masseto', vintage: 2019, type: 'Rood', price: 1200, image: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80', description: 'Italiës meest iconische Merlot. Opulent, complex en eeuwig jong.' },
    ],
  },
];
