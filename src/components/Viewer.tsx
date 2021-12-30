import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom';
import Ts_unionAnyUnknown from '../routes/ts_unionAnyUnknown';
import Ts_function from '../routes/ts_function';
import Ts_narrowing from '../routes/ts_narrowing';

function Viewer() {
    return (
        <Routes>
          <Route path="/unionAnyUnknown" element={<Ts_unionAnyUnknown/>}></Route>
          <Route path="/fucntion" element={<Ts_function/>}></Route>
          <Route path="/narrowing" element={<Ts_narrowing/>}></Route>
        </Routes>
    )
}

Viewer.propTypes = {

}

export default Viewer

