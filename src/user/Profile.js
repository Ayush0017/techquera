import React from 'react';
import WebUrl from '../WebUrl';

import axios from 'axios';

export default class Profile extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            
        }
    }

    upload = ()=>{
        var file = this.filebox.files[0];
        const dataArray = new FormData();        
        dataArray.append("uploadFile", file);

       axios.post(WebUrl.UPLOAD_FILE, dataArray, 
        {
        headers: {
          "Content-Type": "multipart/form-data"
        }
         }).then((response) => 
            {
                 console.log(response)
            })
    }

    render(){
        return <div>
           <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h4>Upload Image</h4>
                        <div class="line-separate line-white text-center"><span></span></div>                        
                    </div> 
                </div> 
                
                              
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <input class="" ref={c=>this.filebox=c} type="file"/>
                        </div>                        
                    </div>                    
                    <div class="row">
                        <div class="col-md-4">
                            <b class='text-danger'></b>
                        </div>
                        <div class="col-md-8">
                            <div class="text-right">
                                <button class="btn btn-custom" onClick={this.upload}><span>Upload Image</span></button>
                            </div>
                        </div>
                    </div>   
                    <hr/>
           </div> 
        </section> 
            
        </div>
    }
}