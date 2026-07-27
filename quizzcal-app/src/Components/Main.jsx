export default function Main(props) {
    return (
        <div className="App">
      <main>
        <div className="background-1"></div>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <span></span>
        <button onClick={() => props.setStart(true)}>Start quiz</button>
        <div className="background-2"></div>
      </main>
    </div>
    )
}