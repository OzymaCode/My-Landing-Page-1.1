import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducers'

// initial states here
const initalState = {
  projects: [
    {
      title: 'Tuva Sprint',
      description:
        'An e-commerce website I built used to sell shoes. It is made using NextJS on the front-end, Sanity.io on the back-end, Stripe for payment handling, and NextAuth for user authentication.',
      tags: [
        'NextJS',
        'Redux Toolkit',
        'Sanity.io',
        'Stripe',
        'NextAuth.js',
        'Typescript',
        'TailwindCSS',
      ],
      tab: '/tuvasprint',
      video: 'https://youtu.be/jsLldr1q4D4',
      link: 'https://tuva-sprint.vercel.app/',
      git: 'https://github.com/OzymaCode/Tuva-Sprint',
    },
    {
      title: 'Alaskan Fishery',
      description:
        'This is an e-commerce website for selling fish I made. It uses Next Js, Redux, Framer-Motion, Tailwindcss, Mui and is connected to PayPal for payments. The front-end hosted on Netlify, and the back-end on Heroku. ',
      tags: ['NextJS', 'Redux'],
      tab: '/alaskan-fishery',
      video: 'https://youtu.be/EDcYA48qwug',
      link: 'https://alaskan-fishery.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/alaskan-fishery',
    },
    {
      title: 'Chat App',
      description:
        'A messaging app I made for my friends. Lets users create or login to an account and send messages to each other with the message log. The data is stored through my Mongo Database and accessed via the server hosted on Heroku.',
      tags: ['React', 'MongoDB'],
      tab: '/chat-app',
      video: 'https://youtu.be/5sIAVRcFUiU',
      link: 'https://ozyma-chatapp.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/chatapp',
    },
    {
      title: 'Coffee Shop',
      description:
        'I saw the boreal coffee website and liked it a lot. This is a replica of its front page.',
      tags: ['Nextjs', 'Redux', 'Tailwind'],
      tab: '/coffee',
      video: 'https://youtu.be/ivusfkEta3c',
      link: 'https://boreal-coffee.netlify.app/',
      git: 'https://github.com/OzymaCode/Coffee-Template',
    },
    {
      title: 'Ethereum Exchange',
      description:
        'An app that lets users send each other ethereum. The program uses an api to connect to a solidity contract I deployed to the Ethereum Block-Chain. It then sends the ether through the contract to the address that the user entered. *Metamask required.',
      tags: ['React', 'Solidity'],
      tab: '/ethereum-exchange',
      video: 'https://youtu.be/tyHF-DGLIvw',
      link: 'https://ozyma-ethereum-exchange.netlify.app',
      git: 'https://github.com/stars/OzymaCode/lists/ethex',
    },
    {
      title: 'Band Website',
      description: 'A single page website template I made for a band.',
      tags: ['Javascript', 'SCSS'],
      tab: '/band',
      video: 'https://youtu.be/l8dm7Jhya1E',
      link: 'https://punkseattle.netlify.app',
      git: 'https://github.com/OzymaCode/Punk-Band',
    },
    {
      title: "Joe's Clothes",
      description: 'A single page shoe store template website I built.',
      tags: ['Javascript', 'SCSS'],
      tab: '/shoe-store',
      video: 'https://youtu.be/KDgH_XEN3io',
      link: 'https://joesclothes.netlify.app/',
      git: 'https://github.com/OzymaCode/Shoe-Store-Template',
    },
    {
      title: 'LaTex Essay',
      description: 'An essay I wrote about Adderall with the LaTex language',
      tags: ['LaTex'],
      tab: '/adderall-essay',
      video: 'https://youtu.be/oRsBH4382q8',
      link: 'https://pdfhost.io/v/~.YyAbih7_LaTex_Essay',
      git: 'https://github.com/OzymaCode/AdderallEssay',
    },
    {
      title: 'Paralax',
      description:
        'A website I used to learn how to do a paralax visual app. It makes the images move along with the scrolling and looks nice.',
      tags: ['Javascript', 'SCSS'],
      tab: '/paralax',
      video: 'https://youtu.be/enAMTkdJKvU',
      link: 'https://learnparalax.netlify.app/',
      git: 'https://github.com/OzymaCode/Parallax',
    },
    {
      title: 'LaTex Math Notes',
      description: 'Notes I wrote with the LaTex language for Complex Analysis',
      tags: ['LaTex'],
      tab: '/math-notes',
      video: 'https://youtu.be/YNTqfdEyUVo',
      link: 'https://pdfhost.io/v/xmRygI.pg_Complex_Analysis_Notes_LaTex',
      git: 'https://github.com/OzymaCode/ComplexAnalysisNotes',
    },
  ],
}

// middleware
const middleware = [thunk]

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
