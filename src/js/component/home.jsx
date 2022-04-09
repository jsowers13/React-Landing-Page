import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-secondary bg-dark">
				<div className="container-fluid d-flex">
					<a className="navbar-brand text-white" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav ">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								Home
							</a>
							<a className="nav-link text-white" href="#">
								About
							</a>
							<a className="nav-link text-white" href="#">
								Services
							</a>
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
			<div className="container d-flex align-items-center flex-column">
				<div className="row w-75">
					<div className="col-12 jumbotron bg-light ">
						<h1 className="heading">A Warm Welcome!</h1>
						<p className="greeting">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<button className="action-button btn btn-primary">
							Call to Action
						</button>
					</div>
				</div>

				<div className="row w-75">
					<div className="col-3">
						<div className="card text-center">
							<img
								src="https://via.placeholder.com/150.jpg"
								class="card-img-top"
								alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
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
					</div>
					<div className="col-3">
						<div className="card text-center">
							<img
								src="https://via.placeholder.com/150.jpg"
								class="card-img-top"
								alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
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
					</div>
					<div className="col-3">
						<div className="card text-center">
							<img
								src="https://via.placeholder.com/150.jpg"
								class="card-img-top"
								alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
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
					</div>
					<div className="col-3">
						<div className="card text-center">
							<img
								src="https://via.placeholder.com/150.jpg"
								class="card-img-top"
								alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
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
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;
