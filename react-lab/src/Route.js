import TextBox from "./TextBox";
import React, { useState } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import axios from 'axios'
import "react-awesome-button/dist/styles.css";

function Route() {
    const [startLat, setStartLat] = useState(0)
    const [stopLat, setStopLat] = useState(0)
    const [startLong, setStartLong] = useState(0)
    const [stopLong, setStopLong] = useState(0)

    //TODO: Fill in the ? with appropriate names/values for a route.
//Hint: The defaults for latitudes and longitudes were 0s. What might the default useState value for a route be?
    const [route, setRoute] = useState(null);

    /**
     * Makes an axios request.
     */
    const requestRoute = (startLat, stopLat, startLong, stopLong) => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            srclat: startLat,
            srclong: startLong,
            destlat: stopLat,
            destlong: stopLong
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import this!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post(
            'http://localhost:4567/route',
            toSend,
            config
        )
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what variable you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setRoute(response.data["route"]);
            })

            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <header>
            <h1>
                This is my title!
            </h1>
            <TextBox label={"Source latitude"} change={setStartLat}/>
            <TextBox label={"Destination latitude"} change={setStopLat}/>
            <TextBox label={"Source longitude"} change={setStartLong}/>
            <TextBox label={"Destination longitude"} change={setStopLong}/>

            <AwesomeButton onPress={() => requestRoute(startLat, stopLat, startLong, stopLong)}> Submit </AwesomeButton>
            {route ? <div>
                Route: <br/>
                Start: {route[0][0]} lat, {route[0][1]} long <br/>
                Stop 1: {route[2][0]} lat, {route[2][1]} long <br/>
                Stop 2: {route[3][0]} lat, {route[3][1]} long <br/>
                End: {route[1][0]} lat, {route[1][1]} long
            </div> : (null)}
        </header>
    );
}




export default Route;
