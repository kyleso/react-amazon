import React from 'react';
import { NavLink /* Link */ } from 'react-router-dom';

function NavBar(props) {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-around',
        padding: '10px 30px',
        backgroundColor: 'rgb(0, 230, 190)',
			}}
		>
      {/* <a href="/questions">Questions</a> */}
      <NavLink to="/" style={{color: 'blue', textDecoration: 'none', fontWeight: '600', fontSize: '1.5em'}}>Home</NavLink>
			<NavLink to="/products" style={{color: 'blue', textDecoration: 'none', fontWeight: '600', fontSize: '1.5em'}}>Products</NavLink>
      <NavLink to="products/new" style={{color: 'blue', textDecoration: 'none', fontWeight: '600', fontSize: '1.5em'}}>New Product</NavLink>
		</nav>
	);
}

export default NavBar;
