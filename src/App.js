import React, {Suspense} from 'react'
import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'

import {Link, Route, Switch} from 'wouter'
import {GifsContextProvider} from './context/GifsContext'
import {UserContextProvider} from './context/UserConext'

function App() {
return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-header">
            <Header/>
            <Link className="App-title" to={'/'}>App</Link>
            <GifsContextProvider>
              <Switch>
              <Route 
              component={Home}
              path='/'
            />        
              <Route 
              component={SearchResults}
              path='/search/:keyword/:rating?'
            />        
              <Route 
              component={Detail}
              path='/gif/:id'
            />
              <Route 
              component={Login}
              path='/login'
            />                      
              <Route 
              component={()=> <h1>404 :( Error</h1>}
              path='/404'
            />
            </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
