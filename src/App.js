import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import UsersWithReversedNames from './UsersWithReversedNames';
import ReversedString from './ReversedString';
import Palindrome from './Palindrome';
import PadNumberWithZeros from './PadNumberWithZeros';
import NthLargestNumber from './NthLargestNumber';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<UsersWithReversedNames />} />
		<Route path='/UsersWithReversedNames' element={<UsersWithReversedNames/>} />
		<Route path='/ReversedString' element={<ReversedString/>} />
		<Route path='/Palindrome' element={<Palindrome/>} />
		<Route path='/PadNumberWithZeros' element={<PadNumberWithZeros/>} />
		<Route path='/NthLargestNumber' element={<NthLargestNumber/>} />
	</Routes>
	</Router>
);
}

export default App;
