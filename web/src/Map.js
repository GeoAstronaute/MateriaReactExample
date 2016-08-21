
var React = require('react')
var SceneView = require(['esri/views/SceneView'])
var Map = require(['esri/Map'])
var ReactDOM = require('react-dom')

module.exports = React.createClass({
	componentDidMount: function () {
		var node = ReactDOM.findDOMNode(this.refs.mapView);
		var map = new Map({
			basemap: "hybrid"
		})
		console.log("Map :", map)
		var view = new SceneView({
			container: node,
			map: map,
			center: [-100.33, 25.69],
			zoom: 10,
			ui: {
				components: []
			}
		});
	},
	render: function () {
		return (
			<div className='mapView' ref='mapView' style={{"height": "90%", "background": "blue", "width":"50%"}}>
			</div>
		);

	}
});



