import React from 'react';
import WebUrl from '../WebUrl';
export default class UserHome extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            msg : '',
            queries : []
        }

        this.loadQuery()
    }

    loadQuery = ()=>{
        fetch(WebUrl.LOAD_QUERY).then(response=>response.json()).then(result=>
        {
           this.setState({queries:result})
        });
    }

    ask = ()=>{
        var data = {
            title : this.titlebox.value,
            query : this.querybox.value
        }
        fetch(WebUrl.ASK,{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
           }).then(response=>response.json()).then(result=>{
                   if(result.status)             
                    this.setState({msg:'Query Saved !'})
                   else
                   this.setState({msg:'Query Not Saved !'}) 

                   this.titlebox.value=''
                   this.querybox.value=''
           });
    }

    render(){
        return <div>
           <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h4>Ask Query</h4>
                        <div class="line-separate line-white text-center"><span></span></div>                        
                    </div> 
                </div> 
                
                              
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <input class="" ref={c=>this.titlebox=c} type="text" placeholder="Query Title" />
                        </div>                        
                    </div>
                    <div class="row">
                    <div class="col-lg-12 col-md-12">
                            <textarea ref={c=>this.querybox=c}placeholder="Query"></textarea>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-md-4">
                            <b class='text-danger'>{this.state.msg}</b>
                        </div>
                        <div class="col-md-8">
                            <div class="text-right">
                                <button class="btn btn-custom" onClick={this.ask}><span>Ask Query</span></button>
                            </div>
                        </div>
                    </div>   
                    <hr/>

                    <table className='table'>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Query</th>
                            <th>Date</th>
                        </tr>

                        {this.state.queries.map((rec,index)=>
                        {
                            return <tr>
                                    <td>{index+1}</td>
                                    <td>{rec.title}</td>
                                    <td>{rec.query}</td>
                                    <td>{rec.send_date}</td>
                                </tr>
                        })}
                    </table>



            </div> 
        </section> 
            
        </div>
    }
}