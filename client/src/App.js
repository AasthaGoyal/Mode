import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './pages/Home';
import Kurta from './pages/Kurta';
import KurtaPlazo from './pages/KurtaPlazo';
import ALineKurta from './pages/ALineKurta';
import Dupatta from './pages/Dupatta';
import Header from './components/Header';
import Footer from './components/Footer';
import  React from "react";

class App extends React.Component {
	render() {
		return (
			<Router>
              
				<div>
					<Header />
					<br />
					<Switch>
						<Route exact={true} path='/Home' component={Home} />
						<Route exact path='/Kurta' component={Kurta} />
						<Route exact path='/KurtaPlazo' component={KurtaPlazo} />
						<Route exact path='/ALineKurta' component={ALineKurta} />
						<Route exact path='/Dupatta' component={Dupatta} />
					</Switch>
                    <br/>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
