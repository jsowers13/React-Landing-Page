import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Card = (props) => {
	return (
		<div className="card text-center">
			<img src={props.image} class="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
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
Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};
export default Card;
