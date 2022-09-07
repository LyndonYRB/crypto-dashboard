import CurrencyConverter from './components/CurrencyConverter'

import NewsFeed from './components/NewsFeed'

export default function  App() {
  return (
    <div className='app' >
      <h1>Crypto Dashboard</h1>
      <div className='app-wrapper'>
        <CurrencyConverter />
       <NewsFeed />
       </div>
      
    </div>
  )
}

