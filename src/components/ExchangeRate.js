
export default function ExchangeRate({exchangeRate, chosenPrimaryCurrency, chosenSecondryCurrency}) {
  
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h1> {exchangeRate}</h1>
      <p>{chosenPrimaryCurrency} to {chosenSecondryCurrency}</p>
    </div>
  )

};
