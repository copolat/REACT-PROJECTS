const names = ['John', 'Alex', 'Juan', 'Khalid'];
const strings = ['Congratulations!', 'React is awsome']
const greeting = (
  <div>
    <div>
      <h1>Hello World!!!</h1>
      <ol>{names.map((name,index) =><li key={index} className={index === 0 ? "first" : index === 1 ? "second" : index === 2 ? "third":"forth"}>{name}</li>)}</ol>
    </div>
    <div>
      <h1>{strings[0]}</h1>
      <h2>{strings[1]}</h2>
    </div>
  </div>
)



ReactDOM.render(greeting, document.getElementById('example'))