import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
	return (
		<div className="card text-center">
			<img
				src="https://via.placeholder.com/150.jpg"
				class="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<button className="btn btn-primary">
							Find Out More!
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Card;
