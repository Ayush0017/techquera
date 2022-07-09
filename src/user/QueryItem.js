import React from 'react';
import WebUrl from '../WebUrl';
export default class QueryItem extends React.Component
{
    constructor(props){
        super(props)
    }

    send = ()=>{
        var data = {
            answer : this.ansbox.value,
            queryid : this.props.record._id
        }
        fetch(WebUrl.SEND_ANSWER,{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
           }).then(response=>response.json()).then(result=>{
                 alert(result.status); 
                 this.ansbox.value=''               
           });
    }

    render()
    {
        return <>
            <tr>
            <th>{this.props.index}</th>
            <th>{this.props.record.title}</th>
            <th>{this.props.record.query}</th>
            <th>{this.props.record.send_date}</th>
            <th></th>            
            </tr>
            <tr>
                <th></th>
                <th colSpan={2}>
                <input class="" ref={c=>this.ansbox=c} type="text" placeholder="Query Answer" />
                </th>
                <th>
                <button onClick={this.send}>Send</button>
                </th>
            </tr>
        </>
    }
}