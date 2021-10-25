import {Route , Switch, Redirect} from 'react-router-dom';
import Allquote from './pages/Allquotes';
import QuoteDetail from './pages/QuoteDetail';
import QuoteNew from './pages/QuoteNew';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
        </Route>
      <Route path='/quotes' exact>
        <Allquote/>
      </Route>
      <Route path='/quotes/:quoteID'>
        <QuoteDetail/>
      </Route>
      <Route path='/Newquotes'>
        <QuoteNew/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
