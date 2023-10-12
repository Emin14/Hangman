import { AppProvider } from './MyContext';
import Letters from './components/Letters/Letters';
import Answer from './components/Answer/Answer';
import Banner from './components/Banner/Banner';
import Question from './components/Question/Question';
import styles from './App.module.css'


function App() {

  return (
    <AppProvider>
      <Question />
      <div className={styles.wrapper}>
        <Banner />
        <Letters />
      </div>
      <Answer />
    </AppProvider>
  );
}

export default App;
