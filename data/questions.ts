import type { ArchetypeId } from './archetypes'

export interface Option {
  label: string
  archetype: ArchetypeId
}

export interface Question {
  question: string
  options: [Option, Option, Option, Option, Option, Option]
  tiebreaker?: boolean
}

export const questions: Question[] = [
  {
    question: "It's your first morning in Lisbon. You:",
    options: [
      { label: 'Already have a café picked out, reviewed, and route-planned', archetype: 'optimizer' },
      { label: 'Google the history of the neighbourhood you\'re staying in', archetype: 'researcher' },
      { label: 'Find whoever\'s awake and convince them to get breakfast', archetype: 'connector' },
      { label: 'Just start walking in whatever direction looks interesting', archetype: 'wanderer' },
      { label: 'Are still asleep. Comfortably.', archetype: 'nightowl' },
      { label: 'Grab the nearest coffee and open your laptop for "just 20 minutes"', archetype: 'shipper' },
    ],
  },
  {
    question: "The group can't agree on dinner. You:",
    options: [
      { label: 'Pull up your pre-researched shortlist and make the case', archetype: 'optimizer' },
      { label: 'Suggest the place with the most interesting origin story', archetype: 'researcher' },
      { label: "Don't care where — just want everyone at the same table", archetype: 'connector' },
      { label: 'Wander off and text the address of wherever you end up', archetype: 'wanderer' },
      { label: '"Let\'s figure it out at 9" and disappear until then', archetype: 'nightowl' },
      { label: 'Book something while everyone\'s still debating', archetype: 'shipper' },
    ],
  },
  {
    question: 'You find an incredible hidden courtyard. You:',
    options: [
      { label: 'Pin it, note the opening hours, and add it to the route', archetype: 'optimizer' },
      { label: 'Read the plaque on the wall and look up its history', archetype: 'researcher' },
      { label: 'Call someone to come see it with you', archetype: 'connector' },
      { label: 'Sit there for 45 minutes and tell no one', archetype: 'wanderer' },
      { label: 'Come back at night to see if it hits different', archetype: 'nightowl' },
      { label: 'Take a photo to use as your new desktop wallpaper', archetype: 'shipper' },
    ],
  },
  {
    question: 'Your ideal offsite memory is:',
    options: [
      { label: '"We did everything on the list and it all worked perfectly"', archetype: 'optimizer' },
      { label: '"I learned something about this place I\'ll never forget"', archetype: 'researcher' },
      { label: '"That conversation at dinner that went until 2am"', archetype: 'connector' },
      { label: '"That thing I found that I still can\'t fully describe"', archetype: 'wanderer' },
      { label: '"That night. You know the one."', archetype: 'nightowl' },
      { label: '"I had this idea at a café and built a prototype by sunset"', archetype: 'shipper' },
    ],
  },
  {
    question: 'Honestly — your travel philosophy is:',
    tiebreaker: true,
    options: [
      { label: '"A good trip is a well-executed trip"', archetype: 'optimizer' },
      { label: '"Travel is education with better food"', archetype: 'researcher' },
      { label: '"I travel for the people, not the places"', archetype: 'connector' },
      { label: '"The best moments are the ones you didn\'t plan"', archetype: 'wanderer' },
      { label: '"I don\'t trust anyone who goes to bed before midnight abroad"', archetype: 'nightowl' },
      { label: '"I do my best work in new environments"', archetype: 'shipper' },
    ],
  },
]
