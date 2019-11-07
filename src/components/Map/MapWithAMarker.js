import axios from "axios";
import React, { Component } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

class MapWithAMarker extends Component {

    state = {
        masterCurrentChef: null,
        masterCurrentMenu: null,
        url: "https://olafapi.herokuapp.com"
    }

    componentDidMount() {
        /* make request to get foof menu here "*/

    }

    setMasterCurrentChef = (value) => {
        this.setState({
            masterCurrentChef: value
        })
    }
    setMasterCurrentMenu = (value) => {
        this.setState({
            masterCurrentMenu: value
        })
    }

    getMenu = () => {
        try {
            console.log(`https://olafapi.herokuapp.com/api/menuList/${this.state.masterCurrentChef.id}`)
            return axios.get(this.state.url+`/api/menuList/${this.state.masterCurrentChef.id}`)
        } catch (error) {
            console.error(error)
        }
    }


    render() {
        console.log("logging , ",this.props.onlineChef)
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

                            this.setMasterCurrentChef(chef)
                            console.log(this.state.masterCurrentChef)
                            this.props.setCurrentChef(this.state.masterCurrentChef)
                            /*  send ajax query  here to grab food item with chef id as a request parameter*/
                            this.getMenu().then(response => {
                                console.log(response)
                                this.setMasterCurrentMenu(response.data)
                                console.log("state change", this.state.masterCurrentMenu)
                                this.props.setCurrentMenu(this.state.masterCurrentMenu)
                            })
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

