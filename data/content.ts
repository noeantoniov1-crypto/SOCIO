import { Course, LessonStatus } from '../types';

export const COURSES: Course[] = [
  {
    id: 'bs-jobs',
    title: 'Bullshit Jobs: A Theory',
    description: 'Explore David Graeber’s provocative theory on meaningless work and its psychological impact on society.',
    icon: 'briefcase',
    lessons: [
      {
        id: 'bs-101',
        chapter: 1,
        title: 'What is a Bullshit Job?',
        youtubeUrl: 'https://www.youtube.com/embed/jIx2e-tJhfk', // David Graeber lecture
        duration: '15 min',
        summaryBullets: [
          'A bullshit job is a form of paid employment that is so completely pointless that even the employee cannot justify its existence.',
          'Distinction between shit jobs (bad conditions, useful) and bullshit jobs (good conditions, useless).',
          'The psychological violence of lack of agency and purpose.'
        ],
        keyTerms: [
          { term: 'Bullshit Job', definition: 'Paid employment that is so completely pointless, unnecessary, or pernicious that even the employee cannot justify its existence.' },
          { term: 'Moral Violence', definition: 'The psychological harm caused by the disconnect between labor and value.' }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which of the following defines a "Bullshit Job"?',
            type: 'MCQ',
            options: [
              'A job with terrible working conditions but high social value',
              'A job that is pointless, unnecessary, or pernicious',
              'A job that requires hard manual labor',
              'A job that is underpaid'
            ],
            correctAnswer: 'A job that is pointless, unnecessary, or pernicious',
            explanation: 'Graeber specifically defines it as a job that even the holder believes shouldn\'t exist.'
          },
          {
            id: 'q2',
            question: 'What is the key difference between a "Shit Job" and a "Bullshit Job"?',
            type: 'MCQ',
            options: [
              'Shit jobs are paid well; Bullshit jobs are unpaid.',
              'Shit jobs are often useful but have bad conditions; Bullshit jobs are often comfortable but useless.',
              'There is no difference.',
              'Bullshit jobs require physical labor.'
            ],
            correctAnswer: 'Shit jobs are often useful but have bad conditions; Bullshit jobs are often comfortable but useless.',
            explanation: 'Graeber emphasizes that "Shit Jobs" (like cleaning) are vital to society, whereas Bullshit Jobs often come with status and money but no purpose.'
          },
          {
            id: 'q3',
            question: 'Why does Graeber argue that Bullshit Jobs cause "spiritual violence"?',
            type: 'MCQ',
            options: [
              'Because the pay is too low to survive.',
              'Because humans have an innate need to see the effects of their actions (cause and effect).',
              'Because bosses are always cruel.',
              'Because the office chairs are uncomfortable.'
            ],
            correctAnswer: 'Because humans have an innate need to see the effects of their actions (cause and effect).',
            explanation: 'Depriving a human of the ability to impact the world meaningfully attacks their sense of self and agency.'
          }
        ],
        scenarios: [
          {
            id: 's1',
            prompt: 'STEP 1: You are hired as a "Corporate Vision Coordinator". Your only task is to forward emails from the CEO to the managers, which the managers already receive automatically. You are paid $90k/year. How do you feel?',
            choices: [
              { id: 'c1', text: 'Great! Free money for no work.', isBest: false, feedback: 'While financially secure, Graeber argues this leads to "spiritual violence" and deep anxiety. You might feel good initially, but the lack of purpose will rot your soul.' },
              { id: 'c2', text: 'Depressed and anxious because I am not contributing to society.', isBest: true, feedback: 'Correct. This reflects the core psychological tension Graeber identifies: humans have a need to feel useful.' },
              { id: 'c3', text: 'I will try to invent work to look busy.', isBest: false, feedback: 'This is a common coping mechanism ("duct taping") but doesn\'t solve the underlying meaninglessness of the role.' }
            ],
            guidance: 'Reflect on the human need for agency and cause-effect in one\'s actions.'
          },
          {
            id: 's2',
            prompt: 'STEP 2: You go to a dinner party. An old friend asks, "So, what do you actually DO at Global Corp?" How do you respond?',
            choices: [
              { id: 'c1', text: 'Lie and make up a complex project to sound important.', isBest: false, feedback: 'This reinforces the "falseness" of your existence and increases your imposter syndrome and isolation.' },
              { id: 'c2', text: 'Admit honestly: "Honestly, nothing useful. I just forward emails."', isBest: true, feedback: 'Acknowledging the reality is the first step in breaking the spell of the bullshit job, though it may be socially awkward.' },
              { id: 'c3', text: 'Defend the company: "I facilitate high-level communication strategy."', isBest: false, feedback: 'You have internalized the corporate rhetoric. You are now protecting the system that traps you.' }
            ],
            guidance: 'Consider the social pressure to define oneself by one\'s labor.'
          }
        ]
      },
      {
        id: 'bs-102',
        chapter: 2,
        title: 'The Five Types of Bullshit Jobs',
        youtubeUrl: 'https://www.youtube.com/embed/6YkZ2v5r1rA', 
        duration: '12 min',
        summaryBullets: [
          'Flunkies: Exist to make others look important.',
          'Goons: Act aggressively on behalf of an employer (e.g., corporate lawyers).',
          'Duct Tapers: Fix problems that shouldn’t exist.',
          'Box Tickers: Allow an organization to claim it is doing something it is not.',
          'Taskmasters: Assign work to others or create unnecessary supervision.'
        ],
        keyTerms: [
          { term: 'Flunky', definition: 'An employee whose primary purpose is to make their superior look important.' },
          { term: 'Duct Taper', definition: 'Employees whose jobs exist only because of a glitch or fault in the organization.' }
        ],
        quiz: [
           {
            id: 'q1',
            question: 'A receptionist who sits in an empty lobby just so the company looks "professional" is an example of:',
            type: 'MCQ',
            options: ['Goon', 'Flunky', 'Taskmaster', 'Box Ticker'],
            correctAnswer: 'Flunky',
            explanation: 'Flunkies exist primarily to boost the prestige of their superiors or the organization.'
           },
           {
            id: 'q2',
            question: 'What is the primary role of a "Duct Taper"?',
            type: 'MCQ',
            options: [
              'To fix plumbing issues.',
              'To aggressively attack competitors.',
              'To undo the damage done by a poorly designed system or incompetent superior.',
              'To manage other people.'
            ],
            correctAnswer: 'To undo the damage done by a poorly designed system or incompetent superior.',
            explanation: 'Duct tapers are hired to patch holes in a system that shouldn\'t have holes in the first place.'
           },
           {
            id: 'q3',
            question: 'Which type of Bullshit Job involves creating unnecessary work for others?',
            type: 'MCQ',
            options: ['Taskmaster', 'Goon', 'Box Ticker', 'Flunky'],
            correctAnswer: 'Taskmaster',
            explanation: 'Taskmasters fall into two categories: those who supervise people who don\'t need supervision, and those who invent bullshit tasks for others to do.'
           }
        ],
        scenarios: [
           {
            id: 's1',
            prompt: 'STEP 1: Your company hires you to compile reports that no one ever reads, just to satisfy a regulatory requirement that is never audited. What type of bullshit job is this?',
            choices: [
              { id: 'c1', text: 'Box Ticker', isBest: true, feedback: 'Correct! You are there just to "tick the box" that the report exists.' },
              { id: 'c2', text: 'Goon', isBest: false, feedback: 'Goons have an aggressive element (e.g., telemarketers). This job is passive.' }
            ],
            guidance: 'Consider the functional purpose of the role within the bureaucracy.'
           },
           {
            id: 's2',
            prompt: 'STEP 2: Your boss realizes you finish the report in 2 hours but work an 8-hour day. He asks you to format the report in three different fonts "just in case". What is the boss becoming?',
            choices: [
              { id: 'c1', text: 'A Taskmaster', isBest: true, feedback: 'Correct. He is assigning you unnecessary tasks just to occupy your time and justify his own management role.' },
              { id: 'c2', text: 'A Duct Taper', isBest: false, feedback: 'He isn\'t fixing a glitch; he is creating busy work.' },
              { id: 'c3', text: 'Efficient', isBest: false, feedback: 'Efficiency would be letting you go home or doing useful work. This is performative labor.' }
            ],
            guidance: 'Think about the logic of "management" when there is nothing real to manage.'
           }
        ]
      }
    ]
  },
  {
    id: 'give-take',
    title: 'Giving and Taking: Cooperation',
    description: 'Understand Norbert Alter’s sociology of innovation and how "illicit" cooperation drives organizational success.',
    icon: 'users',
    lessons: [
      {
        id: 'gt-101',
        chapter: 1,
        title: 'Cooperating is Giving',
        youtubeUrl: 'https://www.youtube.com/embed/gJmIZsp1w5c',
        duration: '18 min',
        summaryBullets: [
          'In this first chapter, Norbert Alter puts forward the central thesis: cooperation in companies is not reduced to the coordination of tasks, but relies on an act of donation, a voluntary gesture that creates a social link between the actors.',
          'Contrary to what managerial logic often emphasizes (efficiency, procedures, calculation of personal interests), cooperation is based on social exchanges that do not directly result from a commercial or contractual interest, but from a human desire to share, to help and exchange.',
          'Alter draws on the theory of giving, notably that of Marcel Mauss, to show that social exchange consists of three moments: give, receive and give back. A process that weaves bonds and generates reciprocal obligations.',
          'This chapter therefore aims to show that cooperating is first of all giving: voluntarily offering information, help, support or skills that are not strictly required by an employment contract.'
        ],
        keyTerms: [
          { term: 'Don/Contre-don (Gift/Counter-gift)', definition: 'The cycle of giving, receiving, and reciprocating that creates social bonds and trust, based on Marcel Mauss\'s theory.' },
          { term: 'Work-to-rule (Grève du zèle)', definition: 'A situation where employees follow regulations to the letter, which paradoxically paralyzes the organization, proving that formal rules alone are insufficient for efficiency.' }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'According to Alter and Mauss, what are the three moments of the social exchange cycle?',
            type: 'MCQ',
            options: [
              'Plan, Execute, Review',
              'Give, Receive, Give Back',
              'Negotiate, Contract, Pay',
              'Listen, Obey, Report'
            ],
            correctAnswer: 'Give, Receive, Give Back',
            explanation: 'Social bonds are woven through this triple obligation. Refusing to receive or failing to give back breaks the cooperative link.'
          },
          {
            id: 'q2',
            question: 'What does the phenomenon of "work-to-rule" (grève du zèle) demonstrate about organizations?',
            type: 'MCQ',
            options: [
              'That rules are perfect and should always be followed.',
              'That workers are naturally lazy.',
              'That formal procedures are insufficient; organizations rely on workers voluntarily "giving" more than the contract requires.',
              'That managers need to write more detailed procedures.'
            ],
            correctAnswer: 'That formal procedures are insufficient; organizations rely on workers voluntarily "giving" more than the contract requires.',
            explanation: 'If everyone follows the rules strictly, the system jams. Real efficiency requires the "illicit" gift of cooperation (shortcuts, mutual help) beyond the rules.'
          },
          {
            id: 'q3',
            question: 'According to Alter, cooperation differs from coordination because:',
            type: 'MCQ',
            options: [
              'Coordination is voluntary, Cooperation is mandatory.',
              'Cooperation involves a voluntary "gift" of self, whereas coordination is mechanical and procedural.',
              'They are the same thing.',
              'Cooperation is for managers, coordination is for workers.'
            ],
            correctAnswer: 'Cooperation involves a voluntary "gift" of self, whereas coordination is mechanical and procedural.',
            explanation: 'You can coordinate machines, but only humans can cooperate through the giving of trust and time.'
          },
          {
            id: 'q4',
            question: 'Why is the "gift" in an organization often considered "illicit" or hidden?',
            type: 'MCQ',
            options: [
              'Because it involves stealing company property.',
              'Because it often involves bypassing official rules/procedures to get the job done efficiently.',
              'Because managers forbid talking to colleagues.',
              'Because it is illegal to help others.'
            ],
            correctAnswer: 'Because it often involves bypassing official rules/procedures to get the job done efficiently.',
            explanation: 'Real cooperation often requires stepping outside the rigid "legal" framework of the organization to solve unique problems.'
          }
        ],
        scenarios: [
          {
            id: 's1',
            prompt: 'STEP 1: You are a maintenance technician. A machine breaks down. The official procedure requires a Level 2 Supervisor to approve the fix (4-hour delay). You know how to fix it immediately, but it technically violates the protocol. What is the act of "cooperation" here?',
            choices: [
              { id: 'c1', text: 'Follow the procedure strictly to protect yourself.', isBest: false, feedback: 'This is "work-to-rule". It protects you legally, but harms the collective efficiency. It is the opposite of the cooperative gift.' },
              { id: 'c2', text: 'Fix it immediately (transgressing the rule) to help the team.', isBest: true, feedback: 'Correct. In Alter\'s view, cooperation often involves an "illicit" gift—taking a risk to solve a problem for the group, which creates a debt of gratitude.' },
              { id: 'c3', text: 'Demand a bonus before fixing it.', isBest: false, feedback: 'This treats the interaction as a market exchange, not a social gift, and fails to build the cooperative bond.' }
            ],
            guidance: 'Consider the difference between "contractual obedience" and "social effectiveness".'
          },
          {
            id: 's2',
            prompt: 'STEP 2: You fixed the machine. The team meets their quota. The supervisor finds out you broke the rule. How does the "Gift/Counter-gift" logic apply here?',
            choices: [
              { id: 'c1', text: 'The supervisor should fire you for disobedience.', isBest: false, feedback: 'This applies bureaucratic logic, but destroys the social fabric. It ensures no one will ever take a risk to help again.' },
              { id: 'c2', text: 'The supervisor ignores the violation (Counter-gift of leniency) because you saved the day.', isBest: true, feedback: 'Correct. By "closing his eyes" to the rule-breaking, the supervisor returns your gift. A bond of trust ("complicity") is formed.' },
              { id: 'c3', text: 'You ask the supervisor to pay you for the repair.', isBest: false, feedback: 'Gifts are not paid for; they are reciprocated with trust, status, or future help.' }
            ],
            guidance: 'Think about how trust is built through mutual vulnerability, not just following contracts.'
          }
        ]
      }
    ]
  }
];