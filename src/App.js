import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Founders from './components/Founders';
import Career from './components/Career';
import { useState } from "react"
import Team from './components/team';
import Footer from './components/Footer';
function App() {

	
	return (
		<div className='App'>
			<Navbar />

			<Banner />

			<Founders />

			<Team />

			<Career />

            <Footer />


		</div>
	);
}

export default App;
