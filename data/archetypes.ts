export type ArchetypeId =
  | 'optimizer'
  | 'researcher'
  | 'connector'
  | 'wanderer'
  | 'nightowl'
  | 'shipper'

export interface GuideEntry {
  category: string
  place: string
  description: string
}

export interface Archetype {
  id: ArchetypeId
  name: string
  superlative: string
  vibe: string
  oneliner: string
  description: string
  guide: GuideEntry[]
  cardBg: string
  cardBorder: string
  cardText: string
}

export const archetypes: Archetype[] = [
  {
    id: 'optimizer',
    name: 'The Optimizer',
    superlative: 'Most Likely to Rebuild the Itinerary at 11pm',
    vibe: 'Chiado energy — central, efficient, everything within reach',
    oneliner:
      "You've already mapped the walking routes. You know which tram lines are tourist traps. You have a spreadsheet. Don't pretend you don't.",
    description:
      "You landed and immediately opened Google Maps. Not to explore — to validate. Your Lisbon plan has time blocks, backup restaurants, and a colour-coded system nobody asked for. The group thinks you're \"just organised.\" You know the truth: you physically cannot enjoy a city you haven't pre-optimised. The beautiful part? Everyone benefits. They just don't know the 11pm itinerary rewrite happened. You do your best work when nobody sees the work.",
    guide: [
      { category: 'Your Neighbourhood', place: 'Chiado', description: 'Central, walkable to everything, efficient. You can hit Baixa, Bairro Alto, and the river without backtracking.' },
      { category: 'Your Morning Ritual', place: 'Copenhagen Coffee Lab (Rua Nova da Piedade)', description: "Scandinavian-clean, reliable WiFi, specialty coffee that doesn't require a conversation to order. In and out, or posted up for an hour — it works both ways." },
      { category: 'Your Must-Do', place: 'Walk from Castelo de São Jorge down through Alfama to the river', description: 'Downhill, 40 minutes, covers the three things everyone should see without the three hours everyone wastes.' },
      { category: 'Your Dinner Move', place: 'Corrupio (Baixa)', description: 'Bar seating around an open kitchen. Portuguese classics with smart twists. No standing in line, no guessing.' },
      { category: 'Your Wildcard', place: 'Mercado de Campo de Ourique', description: "Skip the tourist-packed Time Out Market. This is the local version — same concept, fewer crowds, better ratio of food quality to waiting time." },
    ],
    cardBg: '#ffffff',
    cardBorder: '#2323a5',
    cardText: '#0d0d0d',
  },
  {
    id: 'researcher',
    name: 'The Deep Researcher',
    superlative: 'Most Likely to Correct a Tour Guide',
    vibe: 'Belém energy — historical, layered, slow reveal',
    oneliner:
      'You read four longform pieces about Lisbon before packing. You know about the 1755 earthquake, the azulejo tradition, and at least one neighbourhood nobody else has heard of.',
    description:
      "While everyone else packed sunscreen, you packed context. You've already cross-referenced three neighbourhood guides, flagged a museum most people skip, and formed an opinion on whether pastéis de nata peaked in the 1990s. You don't just visit a place — you try to understand it. The team will learn more about Lisbon from you at dinner than from any walking tour. You find this genuinely more fun than the nightlife, and you've stopped pretending otherwise.",
    guide: [
      { category: 'Your Neighbourhood', place: 'Belém', description: 'Jerónimos Monastery, the Berardo Collection, the Monument to the Discoveries — all within a 15-minute walk. This district exists for you.' },
      { category: 'Your Morning Ritual', place: 'Pastéis de Belém', description: "Yes, there will be a queue. Yes, it's worth it. The original pastéis de nata, made from a secret recipe since 1837." },
      { category: 'Your Must-Do', place: 'Museu Nacional do Azulejo', description: "Five centuries of Portuguese tile art in a 16th-century convent. The 23-metre panorama of pre-earthquake Lisbon is the centrepiece. Don't rush it." },
      { category: 'Your Dinner Move', place: 'Taberna Albricoque (near Santa Apolónia)', description: 'Cockle pastries, Ria Formosa oysters, razor clams in garlic. The room is a century-old dining space. Enough story here to hold a conversation through dessert.' },
      { category: 'Your Wildcard', place: 'Casa Fernando Pessoa', description: "The house where Portugal's most famous poet spent his last 15 years. You'll leave with at least one quote you'll use in a presentation within the month." },
    ],
    cardBg: '#eaeaf5',
    cardBorder: '#1b1b8f',
    cardText: '#0d0d0d',
  },
  {
    id: 'connector',
    name: 'The Connector',
    superlative: "Most Likely to Befriend Someone's Grandmother at a Market",
    vibe: 'Alfama energy — intimate, layered, human',
    oneliner:
      "You're not here for the sights. You're here for the table. The long dinner, the unexpected conversation, the bit where someone shares something real at 1am.",
    description:
      "You couldn't tell someone the name of the miradouro you visited, but you could tell them the life story of the person you sat next to there. Lisbon, to you, is a series of conversations waiting to happen — with teammates you don't normally get time with, with the server who recommends something that isn't on the menu, with the stranger at the next table who turns out to know someone you know. The city is just the excuse. The people are the content.",
    guide: [
      { category: 'Your Neighbourhood', place: 'Alfama', description: "Narrow streets where neighbours talk across windows and someone's grandmother is definitely selling ginjinha from a doorway. You'll feel at home in 10 minutes." },
      { category: 'Your Morning Ritual', place: 'Miradouro da Graça (the one next to it)', description: "Not the famous viewpoint. The one next to it, where locals actually go. Bring a teammate. The view is the excuse — the conversation is the point." },
      { category: 'Your Must-Do', place: 'Fado at Tasca do Chico (Alfama)', description: 'Not a tourist fado house. A small neighbourhood bar where locals and newcomers show up, the lights go down, and someone sings.' },
      { category: 'Your Dinner Move', place: "O Segredo d'Alfama", description: "A food-and-fado restaurant where the room is a mix of locals and travellers. When the singing starts, the entire restaurant goes silent. It's the kind of meal that turns a group into a group." },
      { category: 'Your Wildcard', place: 'Feira da Ladra (Tuesdays & Saturdays)', description: "Lisbon's flea market. Antiques, crafts, total junk, and the best people-watching in the city. You'll buy something small and come back with a story about the person who sold it to you." },
    ],
    cardBg: '#d8d8ee',
    cardBorder: '#1b1db5',
    cardText: '#0d0d0d',
  },
  {
    id: 'wanderer',
    name: 'The Wanderer',
    superlative: 'Most Likely to Disappear for 3 Hours and Come Back With a Story',
    vibe: 'Mouraria energy — unpolished, surprising, no tourist infrastructure',
    oneliner:
      "No itinerary. No group chat. Just a direction and a vibe. You'll find the best spot on the trip and you won't be able to explain how you got there.",
    description:
      "You have a strategy, and the strategy is: no strategy. Left turn, steep staircase, interesting sound, follow it. Your phone stays in your pocket. You'll find a courtyard with laundry hanging across it and a café that hasn't updated its menu since 2004 and a view that nobody on TripAdvisor knows about. You'll try to take the group there later and genuinely not be able to retrace your steps. This isn't carelessness. It's a philosophy. Lisbon was built for it — a city of hidden turns that rewards people who refuse to plan.",
    guide: [
      { category: 'Your Neighbourhood', place: 'Mouraria', description: "The neighbourhood most tourists never reach. Multicultural, unpolished, zero tourist infrastructure. You'll hear Portuguese, Hindi, Mandarin, and fado drifting out of different doorways on the same street." },
      { category: 'Your Morning Ritual', place: 'Just start walking uphill', description: "Pick a calcada and follow it. You'll find a miradouro nobody's written about and a view you won't be able to find again tomorrow. That's the point." },
      { category: 'Your Must-Do', place: 'Get lost between Graça and Penha de França', description: 'No map. Residential, authentic, layered with viewpoints you have to earn. The tascas serve honest food at prices that haven\'t caught up with tourism.' },
      { category: 'Your Dinner Move', place: 'Tati (Penha de França)', description: "Pioneer of Lisbon's natural wine scene in a corner of a neighbourhood most visitors don't know exists. No reservations. Just show up. Your philosophy in restaurant form." },
      { category: 'Your Wildcard', place: 'Ferry to Almada — Ponto Final', description: 'A 10-minute ferry ride nobody on the team will think to take. Tiny riverside restaurant, incredible grilled fish, and a view back across to Lisbon that reframes the whole city.' },
    ],
    cardBg: '#e5e7eb',
    cardBorder: '#2323a5',
    cardText: '#0d0d0d',
  },
  {
    id: 'nightowl',
    name: 'The Night Owl',
    superlative: 'Most Likely to Find the Speakeasy Nobody Knew Existed',
    vibe: 'Cais do Sodré energy — after-dark, layered, unapologetically late',
    oneliner:
      "You peak at 10pm. The morning session is a write-off and you've made peace with that. But when the sun goes down, you become the team's unofficial concierge.",
    description:
      "Your Lisbon starts when everyone else's ends. The daytime agenda? Sure, fine, you'll show up. But you're conserving energy. Because at 9pm something switches on and suddenly you know where to go, who's coming, and what the password is. You have a sixth sense for the door with no sign on it. By midnight you've found a cocktail bar in a former brothel, a fado session in someone's living room, and a late-night bifana spot the team will talk about for months. Nobody questions your morning absences anymore. The trade-off speaks for itself.",
    guide: [
      { category: 'Your Neighbourhood', place: 'Cais do Sodré / Pink Street', description: "Former red-light district, now Lisbon's after-dark centre of gravity. Bars, live music, late-night food, and a density of interesting people per square metre that peaks around midnight." },
      { category: 'Your Morning Ritual', place: 'Sleep until at least 11. Then: Dear Breakfast (Santos)', description: 'Bright, airy, good coffee, no judgement about the hour. You earned this.' },
      { category: 'Your Must-Do', place: 'Pensão Amor (Pink Street)', description: "A former brothel turned bar-slash-cultural-space. Multiple themed rooms, burlesque performances, vintage erotica library, DJs until late." },
      { category: 'Your Dinner Move', place: 'Cervejaria Ramiro (late seating)', description: "Tiger prawns, percebes, clams. Finish with a steak sandwich — yes, after the seafood. That's tradition. The later you go, the less you wait. Designed for you." },
      { category: 'Your Wildcard', place: 'Red Frog Speakeasy (behind Monkey Mash)', description: "Ring the doorbell beneath a ceramic red frog. Descend into a prohibition-era speakeasy with craft cocktails. Only 30 seats. The kind of place you'll text the group about at 1am." },
    ],
    cardBg: '#1b1b8f',
    cardBorder: 'transparent',
    cardText: '#ffffff',
  },
  {
    id: 'shipper',
    name: 'The Shipper',
    superlative: 'Most Likely to Push Code From a Rooftop Bar',
    vibe: 'Príncipe Real energy — polished, plugged in, café culture with power outlets',
    oneliner:
      "You brought your laptop. You're going to 'just check one thing' at least twice a day. But somehow you also have the best time because you genuinely love what you build.",
    description:
      "You told yourself this trip was \"totally offline.\" Your laptop is in your bag right now. Here's the thing though — you're not the person who works because they can't stop. You're the person who works because something clicked, and you want to ship it before the feeling passes. Lisbon's café culture was essentially designed for you: strong espresso, good WiFi, a view of terracotta rooftops while you close a PR. You'll join the group dinner fully present and fully caught up. That's the superpower nobody talks about.",
    guide: [
      { category: 'Your Neighbourhood', place: 'Príncipe Real', description: "Leafy, walkable, excellent café density, and close enough to the action that you can pop in and out between work sessions." },
      { category: 'Your Morning Ritual', place: 'Fábrica Coffee Roasters', description: "In-house roasted specialty coffee, strong WiFi. The industrial-chic space is designed for people who want to sit with a laptop and nobody bats an eye." },
      { category: 'Your Must-Do', place: 'Work from the Gulbenkian gardens, then walk the museum', description: "One of the best art collections in Europe surrounded by gardens where the WiFi works. Earn the culture by shipping first. That's your deal with yourself." },
      { category: 'Your Dinner Move', place: 'Prado (Santos)', description: "Farm-to-table Portuguese cooking in a converted factory. Big arched windows, plants hanging from the ceiling, and enough ambient noise that you could discreetly check one notification." },
      { category: 'Your Wildcard', place: 'LX Factory', description: "A former industrial complex turned creative hub. You'll find the coworking space and \"just pop in for an hour.\" You'll stay three. But you'll also find the best bookshop in Lisbon (Ler Devagar)." },
    ],
    cardBg: '#2323a5',
    cardBorder: 'transparent',
    cardText: '#ffffff',
  },
]

export const archetypeMap = Object.fromEntries(
  archetypes.map((a) => [a.id, a])
) as Record<ArchetypeId, Archetype>
