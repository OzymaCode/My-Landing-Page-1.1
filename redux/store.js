import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducers'

// initial states here
const initalState = {
  projects: [
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
      title: 'Alaskan Fishery',
      description:
        'This is an e-commerce website for selling fish I made. It uses Next Js, Redux, Framer-Motion, Tailwindcss, Mui and is connected to PayPal for payments. The front-end hosted on Netlify, and the back-end on Heroku. ',
      tags: ['NextJS', 'Redux'],
      tab: '/alaskan-fishery',
      video: 'https://youtu.be/EDcYA48qwug',
      link: 'https://alaskan-fishery.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/alaskan-fishery',
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
