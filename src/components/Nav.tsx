import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

function nav() {
    const location = useLocation();
    const [activPage, setActivepage] = useState(location.pathname);


    return (
            <nav style={{borderRight:"2px solid white"}}>
                <ul className="vertical menu">
                    <li><Link to="unionAnyUnknown">union type, any, unknown</Link></li>
                    <li><Link to="fucntion">function and Void</Link></li>
                    <li><Link to="">Narrowing, Assertion</Link></li>
                    <li><Link to="">function</Link></li>
                </ul>
            </nav>
    )
}

nav.propTypes = {

}

export default nav

