import React from "react";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const data = [
		{
			image: "https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small/vector60-1781-01.jpg",
			title: "Home",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tristique nulla aliquet enim tortor at.",
		},
		{
			image: "https://static.vecteezy.com/system/resources/thumbnails/002/590/681/small/paper-document-with-pen-line-style-icon-free-vector.jpg",
			title: "About",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Et egestas quis ipsum suspendisse.",
		},
		{
			image: "https://www.freeiconspng.com/thumbs/maintenance-icon/maintenance-icon-2.jpg",
			title: "services",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis. Auctor elit sed vulputate mi sit amet mauris commodo quis.",
		},
		{
			image: "https://icon-library.com/images/phone-icon-jpg/phone-icon-jpg-17.jpg",
			title: "Contact",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis. A cras semper auctor neque vitae tempus.",
		},
	];
	return (
		<div>
			<Navbar />

			<div className="container d-flex align-items-center flex-column">
				<div className="row w-75 d-flex align-items-stretch">
					<Jumbotron />
				</div>
				<br />
				<div className="row w-75 pb-4">
					{data.map((item, index) => {
						return (
							<div className="col-3 d-flex align-items-stretch">
								<Card
									image={item.image}
									title={item.title}
									text={item.text}
									index={index}
								/>
							</div>
						);
					})}
					{/* <div className="col-3 d-flex align-items-stretch">
						<Card
							image="https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small/vector60-1781-01.jpg"
							title="Home"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tristique nulla aliquet enim tortor at."
						/>
					</div>
					<div className="col-3 d-flex align-items-stretch">
						<Card
							image="https://static.vecteezy.com/system/resources/thumbnails/002/590/681/small/paper-document-with-pen-line-style-icon-free-vector.jpg"
							title="About"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Et egestas quis ipsum suspendisse."
						/>
					</div>
					<div className="col-3 d-flex align-items-stretch">
						<Card
							image="https://www.freeiconspng.com/thumbs/maintenance-icon/maintenance-icon-2.jpg"
							title="Services"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis. Auctor elit sed vulputate mi sit amet mauris commodo quis."
						/>
					</div>
					<div className="col-3 d-flex align-items-stretch">
						<Card
							image="https://icon-library.com/images/phone-icon-jpg/phone-icon-jpg-17.jpg"
							title="Contact"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis. A cras semper auctor neque vitae tempus."
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};
// const Card = () => {
// 	return (
// 		<div className="card text-center">
// 			<img
// 				src="https://via.placeholder.com/150.jpg"
// 				class="card-img-top"
// 				alt="..."></img>
// 			<div className="card-body">
// 				<h5 className="card-title">Card title</h5>
// 				<p className="card-text">
// 					Some quick example text to build on the card title and make
// 					up the bulk of the card's content.
// 				</p>
// 				<ul className="list-group list-group-flush">
// 					<li className="list-group-item">
// 						<button className="btn btn-primary">
// 							Find Out More!
// 						</button>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };
export default Home;
