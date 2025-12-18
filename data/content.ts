import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'c1-bullshit-jobs',
    title: 'Bullshit Jobs',
    description: 'Understand the phenomenon of meaningless work based on David Graeber\'s theory.',
    icon: 'Briefcase',
    lessons: [
      {
        id: 'bs-101',
        chapter: 1,
        title: 'The Rise of Pointless Work',
        youtubeUrl: 'https://www.youtube.com/embed/jHx5rePmz2Y',
        duration: '15 min',
        summaryBullets: [
          'The definition of a Bullshit Job versus a Shit Job.',
          'Why technology didn\'t reduce working hours as predicted by Keynes.',
          'The 5 categories of Bullshit Jobs: Flunkies, Goons, Duct Tapers, Box Tickers, and Taskmasters.'
        ],
        keyTerms: [
          { term: 'Bullshit Job', definition: 'A paid employment that is so completely pointless, unnecessary, or pernicious that even the employee cannot justify its existence.' },
          { term: 'Keynes\' Prediction', definition: 'The economic theory that technological progress would lead to a 15-hour work week by the end of the 20th century.' }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which of the following best describes a "Bullshit Job"?',
            type: 'MCQ',
            options: [
              'A job that is low paid and physically demanding.',
              'A job that is dangerous but necessary.',
              'A job that the employee believes contributes nothing of value to the world.',
              'A job requiring high intelligence but low effort.'
            ],
            correctAnswer: 'A job that the employee believes contributes nothing of value to the world.',
            explanation: 'The defining characteristic is the employee\'s own recognition of the job\'s lack of purpose.'
          }
        ],
        scenarios: [
          {
            id: 's1',
            prompt: 'STEP 1: You are Lilian. Your title is "Digital Project Manager", but your team works fine without you. Your boss is arrogant and gives you no tasks. Anxiety rises. What do you do?',
            choices: [
              { id: 'c1', text: 'Go see the boss to demand clear work.', isBest: false, feedback: 'Mistake. In a bullshit job, admitting you have nothing to do is taboo. The boss might see you as a "troublemaker".' },
              { id: 'c2', text: 'Create two "fake personas": a confident one to motivate the team, a busy one to reassure the boss.', isBest: true, feedback: 'Correct. This is the exhausting strategy adopted by Lilian. She maintains the illusion to justify her salary, but it destroys her self-esteem.' },
              { id: 'c3', text: 'Bring your guitar and play in the office.', isBest: false, feedback: 'This breaks the "simulation". You will be fired for not respecting the comedy of work.' }
            ],
            guidance: 'Think about the necessity of maintaining the social appearance of work.'
          },
          {
            id: 's2',
            prompt: 'STEP 2: The comedy has lasted for months. You earn good money, but you feel you are losing your real skills. You develop "imposter syndrome". What is the ultimate solution according to the book\'s witnesses?',
            choices: [
              { id: 'c1', text: 'Stay for the money and ignore your feelings.', isBest: false, feedback: 'Graeber notes this often leads to depression or psychosomatic illness. Money does not compensate for "spiritual violence".' },
              { id: 'c2', text: 'Resign to find work that has meaning (even if paid less).', isBest: true, feedback: 'Correct. Like Charles (the musician) or Annie, the only way to heal the soul is often to leave the toxic environment to find a real "cause".' },
              { id: 'c3', text: 'Ask for a raise.', isBest: false, feedback: 'This strengthens the trap ("golden handcuffs") and does not solve the existential void.' }
            ],
            guidance: 'Reflect on the psychological cost of uselessness versus financial gain.'
          }
        ]
      },
      {
        id: 'bs-107',
        chapter: 7,
        title: 'GRAEBER – Chapter 7: Bullshit Jobs and Political Hatred',
        youtubeUrl: 'https://www.youtube.com/embed/wWXr4U2l5G4',
        duration: '18 min',
        summaryBullets: [
          'Managerial Feudalism: The proliferation of useless jobs is a tool for social control. Keeping the population exhausted prevents political revolt.',
          'Moral Envy: The system creates resentment between the "working class" (useful, underpaid) and the "liberal elite" (useless, overpaid), protecting the real owners of capital.',
          'Universal Basic Income (UBI): The proposed solution to break the link between livelihood and work, allowing people to refuse useless jobs.',
          'The Laziness Myth: Graeber argues humans naturally want to be useful; UBI would free energy for meaningful contribution, not idleness.'
        ],
        keyTerms: [
          { term: 'Managerial Feudalism', definition: 'A system where power creates subordinates (bullshit jobs) to validate its own status and maintain hierarchy, rather than for efficiency.' },
          { term: 'Moral Envy', definition: 'The resentment weaponized by politicians, pitting useful workers against perceived "elites" in administrative roles.' },
          { term: 'Universal Basic Income', definition: 'An unconditional income that dissociates survival from employment, acting as the ultimate "strike fund" against bullshit jobs.' }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the "political utility" of Bullshit Jobs according to this chapter?',
            type: 'MCQ',
            options: [
              'They generate tax revenue.',
              'Social Control: keeping the population busy and exhausted prevents political contestation.',
              'They drive innovation.',
              'They solve the problem of automation.'
            ],
            correctAnswer: 'Social Control: keeping the population busy and exhausted prevents political contestation.',
            explanation: 'Graeber argues that a population with free time is dangerous to the ruling class. "Managerial Feudalism" maintains order via busyness.'
          },
          {
            id: 'q2',
            question: 'How does "Universal Basic Income" (UBI) specifically target Bullshit Jobs?',
            type: 'MCQ',
            options: [
              'It pays people to do them.',
              'It gives employers money to hire more people.',
              'By decoupling income from work, it empowers people to refuse useless jobs, causing the system to collapse.',
              'It makes bullshit jobs illegal.'
            ],
            correctAnswer: 'By decoupling income from work, it empowers people to refuse useless jobs, causing the system to collapse.',
            explanation: 'If survival is guaranteed, workers will only choose jobs that have meaning or high utility, filtering out the "bullshit".'
          },
          {
            id: 'q3',
            question: 'What is the "Paradox" of automation mentioned in the text?',
            type: 'MCQ',
            options: [
              'Robots are too expensive.',
              'Increased productivity led to more administrative bloat instead of a 15-hour work week.',
              'Robots cannot do bullshit jobs.',
              'Automation created more factory jobs.'
            ],
            correctAnswer: 'Increased productivity led to more administrative bloat instead of a 15-hour work week.',
            explanation: 'As Keynes predicted, we have the tech for leisure, but we chose "feudal" employment to keep people occupied.'
          }
        ],
        scenarios: [
          {
            id: 's1',
            prompt: 'STEP 1: You are a politician proposing UBI. A critic says: "People are naturally lazy. If you pay them, they will do nothing." How do you refute this using Graeber\'s insight?',
            choices: [
              { id: 'c1', text: 'Admit they are right but argue for compassion.', isBest: false, feedback: 'Graeber disagrees with the premise of laziness.' },
              { id: 'c2', text: 'Cite the psychological suffering of Bullshit Jobs: Humans are depressed when they are useless. They crave contribution, not idleness.', isBest: true, feedback: 'Correct. The fact that people in comfortable but useless jobs are miserable proves the human need to be a "cause" and contribute.' },
              { id: 'c3', text: 'Say that laziness is good for the environment.', isBest: false, feedback: 'Not the core argument.' }
            ],
            guidance: 'Think about why people in "do-nothing" jobs are unhappy.'
          },
          {
            id: 's2',
            prompt: 'STEP 2: UBI is passed. You work as a "Strategic Vision Coordinator" (useless). You can now quit and volunteer to build community gardens (useful).',
            choices: [
              { id: 'c1', text: 'Stay in the office for the fancy title.', isBest: false, feedback: 'This sustains the feudal system.' },
              { id: 'c2', text: 'Quit. Use UBI to support yourself while doing meaningful work.', isBest: true, feedback: 'Correct. This is the intended effect of UBI: redistributing labor from "bullshit" to "real value".' },
              { id: 'c3', text: 'Work both jobs.', isBest: false, feedback: 'Likely leading to burnout.' }
            ],
            guidance: 'UBI is the "power to say no".'
          }
        ]
      }
    ]
  },
  {
    id: 'give-take',
    title: 'Give and Take',
    description: 'Adam Grant’s insights on reciprocity styles and success.',
    icon: 'HandHeart',
    lessons: [
       {
        id: 'gt-101',
        chapter: 1,
        title: 'Givers, Takers, and Matchers',
        youtubeUrl: 'https://www.youtube.com/embed/YyXRYgjQXX0',
        duration: '12 min',
        summaryBullets: [
          'The three reciprocity styles: Givers, Takers, and Matchers.',
          'Who is at the bottom of the success ladder? (Givers)',
          'Who is at the top? (Also Givers)'
        ],
        keyTerms: [
          { term: 'Giver', definition: 'Someone who contributes to others without expecting anything in return.' },
          { term: 'Taker', definition: 'Someone who tries to get as much as possible from others while contributing as little as possible.' },
          { term: 'Matcher', definition: 'Someone who strives for an equal balance of giving and getting.' }
        ],
        quiz: [
          {
             id: 'q1',
             question: 'According to Adam Grant, which group is most likely to be at the very bottom of the performance ladder?',
             type: 'MCQ',
             options: ['Givers', 'Takers', 'Matchers', 'None of the above'],
             correctAnswer: 'Givers',
             explanation: 'Selfless givers often burn out or get exploited, landing them at the bottom.'
          }
        ],
        scenarios: []
       }
    ]
  }
];