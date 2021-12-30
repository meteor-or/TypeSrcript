import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom';
import Ts_unionAnyUnknown from '../routes/ts_unionAnyUnknown';
import Ts_function from '../routes/ts_function';
import Ts_narrowing from '../routes/ts_narrowing';
import Ts_typeAlias from '../routes/ts_typeAlias';

function Viewer() {
    return (
        <div style={{margin:"20px 40px"}}>
            <Routes>
                <Route path="/unionAnyUnknown" element={<Ts_unionAnyUnknown />}></Route>
                <Route path="/fucntion" element={<Ts_function />}></Route>
                <Route path="/narrowing" element={<Ts_narrowing />}></Route>
                <Route path="/typeAlias" element={<Ts_typeAlias />}></Route>
            </Routes>
        </div>
    )
}

Viewer.propTypes = {

}

export default Viewer

