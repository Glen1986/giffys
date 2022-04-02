import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import { Link, Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'

function App() {
    return (
        <div className="App">
            <section className="App-header">
                <Link className="App-title" to={'/'}>
                    App
                </Link>
                <GifsContextProvider>
                    <Route component={Home} path="/" />
                    <Route
                        component={SearchResults}
                        path="/search/:keyword/:rating?"
                    />
                    <Route component={Detail} path="/gif/:id" />
                    <Route
                        component={() => <h1>404 :( Error</h1>}
                        path="/404"
                    />
                </GifsContextProvider>
            </section>
        </div>
    )
}

export default App
