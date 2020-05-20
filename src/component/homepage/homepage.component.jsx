import React from 'react';

import './homepage.styles.css';

const HomePage = () => {

	return (
		<div className="home-page">
			<div className="game-config">
				<div className="config-item">
					<span className="label"># of Cards</span>
					<span className="value">
						<select name="gridSelection">
							<option value="16">16</option>
							<option value="20">20</option>
							<option value="24">24</option>
							<option value="24">30</option>
							<option value="24">36</option>
						</select>
					</span>
				</div>
			</div> 
		</div>

	)
};

export default HomePage;