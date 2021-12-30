import React from 'react'
import PropTypes from 'prop-types'
import { type } from 'os';

function ts_unionAnyUnknown() {

    return (
        <div>
            <h2>Union, Any, Unknown</h2>
            <pre>{`    
            let user : string = 'kim';
            let age : undefined = undefined;
            let married : boolean = false;
            let 철수 : (string | number | undefined | boolean)[]= [user, age, married];

            let 학교 :school = {
                score : [100, 97, 84],
                teacher : 'Phill',
                friend : 'John'
            }
            type school = {score :(Number|boolean)[] , teacher :String, friend : String|String[]}
            학교.score[4] = false;
            학교.friend = ['Lee', 학교.teacher]`}</pre>
        </div>
    )
}

ts_unionAnyUnknown.propTypes = {

}

export default ts_unionAnyUnknown

