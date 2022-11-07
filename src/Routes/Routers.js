import React from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import AdminTripsDetails from "../Pages/AdminTripsDetails/AdminTripsDetails"
import AdminTrips from "../Pages/AdminTripsList/AdmTripsList"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import TripList from "../Pages/Trips/TripsList"
import TripsApplication from "../Pages/Tripsapplication/TripsApplication"
import Header from "../Components/Header/Header"
import AdminTripsCreate from "../Pages/AdminTripsCreate/AdminTripsCreate"

const Routers = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>

                <Route exact path="/login" element={<Login />}>
                </Route>

                <Route exact path="/trips" element={<TripList />}>
                </Route>

                <Route exact path="/trips/application/:id" element={<TripsApplication />}>
                </Route>

                <Route exact path="/admin/trips" element={<AdminTrips />}>
                </Route>

                <Route exact path="/admin/details/:id" element={<AdminTripsDetails />}>
                </Route>

                <Route exact path="/admin/create" element={<AdminTripsCreate />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers