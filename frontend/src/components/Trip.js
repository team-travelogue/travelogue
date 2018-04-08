import React from 'react';
import PropTypes from 'prop-types';

class Trip extends React.Component {
	componentDidMount() {
		this.props.fetchTrip(this.props.user.id);
	}

	render() {
		const tripImages = this.props.trip.map( (image, i) => {
			return <li key={i}>{image.imageId}</li>;
		});

		return (
			<div className="trip">
				<h1>Your trip</h1>
				<ul>
					{tripImages}
				</ul>
			</div>
		);
	}
}

Trip.propTypes = {
	fetchTrip: PropTypes.func,
	trip: PropTypes.array,
	user: PropTypes.object,
};

export default Trip;
