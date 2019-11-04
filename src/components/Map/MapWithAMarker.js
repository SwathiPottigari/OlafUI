
import React, { Component } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";



class MapWithAMarker extends Component {

    state = {
        masterCurrentChef: null
    }

    setMasterCurrentChef = (value) => {
        this.setState({
            masterCurrentChef: value
        })
    }

    render() {
        return (

            <GoogleMap
                defaultZoom={12}
                defaultCenter={this.props.location}
            >

                {this.props.onlineChef.map(chef => (
                    <Marker
                        /*  chef = {chef.Chef} */

                        position={{
                            lat: parseFloat(chef.Chef.lat),
                            lng: parseFloat(chef.Chef.lng)
                        }}

                        onClick={() => {
                            
                            this.setMasterCurrentChef(chef.Chef)
                            console.log(this.state.masterCurrentChef)
                            this.props.setCurrentChef(this.state.masterCurrentChef)
                        }
                        }


                        icon={{
                            url: require("./carrot.svg"),
                            scaledSize: new window.google.maps.Size(40, 60)
                        }}

                    />

                ))}

            </GoogleMap>)
    }
}

export default withScriptjs(withGoogleMap(MapWithAMarker));

