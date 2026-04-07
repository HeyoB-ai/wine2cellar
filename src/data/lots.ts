export interface Lot {
  id: string
  wineryName: string
  wineryCountry: string
  wineryRegion: string
  title: string
  description: string
  lotType: 'restpartij' | 'schadepartij' | 'overproductie' | 'anders'
  wineType: 'rood' | 'wit' | 'rosé' | 'mousseux' | 'overig'
  vintage: number
  grapeVariety: string
  quantityBottles: number
  pricePerBottle: number
  pricePerBox?: number
  minimumOrderBottles: number
  availableFor: ('particulier' | 'horeca')[]
  status: 'actief'
}

export const mockLots: Lot[] = [
  {
    id: '1',
    wineryName: 'Château Beaulieu',
    wineryCountry: 'Frankrijk',
    wineryRegion: 'Bordeaux',
    title: 'Restpartij Bordeaux rouge 2021',
    description: 'Overgebleven voorraad na exportorder. Uitstekende kwaliteit, originele etiketten. Ideaal voor restaurants en wijnwinkels.',
    lotType: 'restpartij',
    wineType: 'rood',
    vintage: 2021,
    grapeVariety: 'Merlot, Cabernet Sauvignon',
    quantityBottles: 240,
    pricePerBottle: 6.50,
    pricePerBox: 78.00,
    minimumOrderBottles: 12,
    availableFor: ['particulier', 'horeca'],
    status: 'actief',
  },
  {
    id: '2',
    wineryName: 'Domaine de la Croix',
    wineryCountry: 'Frankrijk',
    wineryRegion: 'Provence',
    title: 'Schadepartij rosé 2022 — beschadigde etiketten',
    description: 'Identieke wijn als onze reguliere rosé, maar met licht beschadigde etiketten door opslag. Inhoud en kwaliteit 100%. Grote korting.',
    lotType: 'schadepartij',
    wineType: 'rosé',
    vintage: 2022,
    grapeVariety: 'Grenache, Cinsault',
    quantityBottles: 180,
    pricePerBottle: 4.00,
    minimumOrderBottles: 24,
    availableFor: ['particulier', 'horeca'],
    status: 'actief',
  },
  {
    id: '3',
    wineryName: 'Fattoria Toscana',
    wineryCountry: 'Italië',
    wineryRegion: 'Toscane',
    title: 'Overproductie Chianti Classico 2020',
    description: 'Uitzonderlijk goede oogst resulteerde in overproductie. Gecertificeerde DOCG-wijn, ook beschikbaar per pallet voor groothandel.',
    lotType: 'overproductie',
    wineType: 'rood',
    vintage: 2020,
    grapeVariety: 'Sangiovese',
    quantityBottles: 500,
    pricePerBottle: 5.00,
    pricePerBox: 60.00,
    minimumOrderBottles: 12,
    availableFor: ['particulier', 'horeca'],
    status: 'actief',
  },
  {
    id: '4',
    wineryName: 'Bodegas Rioja Alta',
    wineryCountry: 'Spanje',
    wineryRegion: 'La Rioja',
    title: 'Restpartij Rioja Crianza 2019 — alleen horeca',
    description: 'Professionele restpartij na horecaorder die niet doorging. Minimale afname 1 pallet (600 flessen). Uitsluitend voor horeca en slijterijen.',
    lotType: 'restpartij',
    wineType: 'rood',
    vintage: 2019,
    grapeVariety: 'Tempranillo',
    quantityBottles: 300,
    pricePerBottle: 7.00,
    pricePerBox: 84.00,
    minimumOrderBottles: 60,
    availableFor: ['horeca'],
    status: 'actief',
  },
  {
    id: '5',
    wineryName: 'Weingut Mosel',
    wineryCountry: 'Duitsland',
    wineryRegion: 'Moezel',
    title: 'Overproductie Riesling Spätlese 2022',
    description: 'Uitstekende oogst leidde tot overproductie van onze Spätlese. Fruitig en elegant, geschikt voor particulieren die graag grotere hoeveelheden bestellen.',
    lotType: 'overproductie',
    wineType: 'wit',
    vintage: 2022,
    grapeVariety: 'Riesling',
    quantityBottles: 200,
    pricePerBottle: 5.50,
    pricePerBox: 66.00,
    minimumOrderBottles: 6,
    availableFor: ['particulier', 'horeca'],
    status: 'actief',
  },
]
