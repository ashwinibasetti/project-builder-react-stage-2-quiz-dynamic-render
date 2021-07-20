
import './App.css';
import Quiz2 from './components/Quiz2'
import questions from './resources/questions.json'

function App() {
  return (
    <div className="App">
      <Quiz2 value={questions}/>
    </div>
  );
}

export default App;