import React, { Component } from 'react'
import AdminLogin from "./admin/AdminLogin"

export class Home extends Component {
    render() {
        return (
            <div>
                Home Component
                <AdminLogin/>
            </div>
        )
    }
}

export default Home
