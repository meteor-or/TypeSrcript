import React from 'react'
import PropTypes from 'prop-types'
import { type } from 'os'

function ts_narrowing() {

    //네로잉
    //에러남
    /*function 내함수(x :number | string){
        return x + 1   
     }
     */
     function 내함수(x :number | string){
        if (typeof x === 'string') {
           return x + 1
        }   

        let arr :number[] = [];
        if (typeof x ==='number') {
            arr[0] = x;
        } else{}
        // if문을 썻으면 끝까지 써야 안전하다. 아니면 error가 뜰지도 
     }

     //assertion
    
     //1. narrowing할 때 쓴다.
     //2. typeshield 임시 해제용 
     //타입 변환용 X!!! string으로 선언하고 as 문법으로 number로 바꾸기 불가능! 
     function assertion(x :number|string) {
         let arr :number[] = [];
         arr[0] = x as number;
     }
    
     //숙제1 cleaning
     //내코드 ㅎㅎ
     /*const cleaning = ( x :any) :number => {
        typeof x ==="string" && Number(x)
        return x
     }*/
     //정답
     const cleaning = (x : (number|string)[]) =>{
         let cleanedList :number[] = [];

        x.forEach ((num)=>{
            typeof num === 'string' && cleanedList.push(parseFloat(num))
            typeof num === 'number' && cleanedList.push(num)
        })

        return cleanedList
        }

        let 철수쌤 = { subject : 'math' }
        let 영희쌤 = { subject : ['science', 'english'] }
        let 민수쌤 = { subject : ['science', 'art', 'korean'] } 

        const lastSubject = ( x :{subject : string | string[]}) => {
            if ( typeof x.subject === 'string') {
                return x.subject
            } else if (Array.isArray(x.subject)) {
                return x.subject[x.subject.length -1]
            }   else {
                return "none"
            }
        }
    return (
        <div>
            <h2>타입 확정하기 Narrowing & Assertion</h2>
            <p>cleaning([123,"3"]) : {cleaning([123,"3"])}</p>
            <p>lastSubject(철수쌤) : {lastSubject(철수쌤)}</p>
            <pre>
                <code>
                {`
    //네로잉
    //에러남
    /*function 내함수(x :number | string){
        return x + 1   
     }
     */
     function 내함수(x :number | string){
        if (typeof x === 'string') {
           return x + 1
        }   

        let arr :number[] = [];
        if (typeof x ==='number') {
            arr[0] = x;
        } else{}
        // if문을 썻으면 끝까지 써야 안전하다. 아니면 error가 뜰지도 
     }

     //assertion
    
     //1. narrowing할 때 쓴다.
     //2. typeshield 임시 해제용 
     //타입 변환용 X!!! string으로 선언하고 as 문법으로 number로 바꾸기 불가능! 
     function assertion(x :number|string) {
         let arr :number[] = [];
         arr[0] = x as number;
     }
    
     //숙제1 cleaning
     //내코드 ㅎㅎ
     /*const cleaning = ( x :any) :number => {
        typeof x ==="string" && Number(x)
        return x
     }*/
     //정답
     const cleaning = (x : (number|string)[]) =>{
         let cleanedList :number[] = [];

        x.forEach ((num)=>{
            typeof num === 'string' && cleanedList.push(parseFloat(num))
            typeof num === 'number' && cleanedList.push(num)
        })

        return cleanedList
        }

        let 철수쌤 = { subject : 'math' }
        let 영희쌤 = { subject : ['science', 'english'] }
        let 민수쌤 = { subject : ['science', 'art', 'korean'] } 

        const lastSubject = ( x :{subject : string | string[]}) => {
            if ( typeof x.subject === 'string') {
                return x.subject
            } else if (Array.isArray(x.subject)) {
                return x.subject[x.subject.length -1]
            }   else {
                return "none"
            }
        }`}
                </code>
            </pre>
        </div>
    )
}

ts_narrowing.propTypes = {

}

export default ts_narrowing

