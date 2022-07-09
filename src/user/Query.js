import React from 'react';
import WebUrl from '../WebUrl';
import QueryItem from './QueryItem';
export default class Query extends React.Component
{
    constructor()
    {
        super()
        this.state = {           
            queries : []
        }

        this.loadQuery()
    }

    loadQuery = ()=>{
        fetch(WebUrl.LOAD_OTHER_QUERY).then(response=>response.json()).then(result=>
        {
           this.setState({queries:result})
        });
    }

    render(){
        return <div>
           <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h4>User Query</h4>
                        <div class="line-separate line-white text-center"><span></span></div>                        
                    </div> 
                </div> 
                
                              
                    <hr/>

                    <table className='table'>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Query</th>
                            <th>Date</th>
                            <th>User</th>
                            
                        </tr>

                        {this.state.queries.map((rec,index)=>
                        {
                         return <QueryItem index={index+1} record={rec}/>
                        })}
                    </table>



            </div> 
        </section> 
            
        </div>
    }
}