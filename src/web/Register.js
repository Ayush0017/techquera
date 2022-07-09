import React from 'react'

import WebUrl from '../WebUrl'

export default class Register extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            regmsg : ''
        }
    }

    save = ()=>{
        var name = this.namebox.value.trim();
        var email = this.emailbox.value.trim();
        var pwd = this.pwdbox.value.trim();
        var cpwd = this.cpwdbox.value.trim();

        var data = {
            user_name : name , email : email ,
            password : pwd  }
        //console.log(data)    

        fetch(WebUrl.SAVE_USER,{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
           }).then(response=>response.json()).then(result=>{
                if(result.status)
                    this.setState({regmsg:'Registeration Successfully Done !'})
                else
                    this.setState({regmsg:'Registeration Failed !'})                    
           });
   }

  render(){
    return <>
       <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h4>User Registeration</h4>                        
                    </div> 
                </div> 
                <hr/>
               <b class='text-danger'>
                    {this.state.regmsg}
                </b>

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-lg-offset-2 col-md-offset-2">
                            <input class="" type="text" id="contact_name" 
                            ref={c=>this.namebox=c}
                            placeholder="Name" />
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <input class="" type="text" name="contact_email" 
                            ref={c=>this.emailbox=c}id="contact_email" placeholder="Email" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-lg-offset-2 col-md-offset-2">
                            <input class="" type="password" id="password" 
                            ref={c=>this.pwdbox=c}placeholder="Password" />
                        </div>
                        <div class="col-lg-4 col-md-4">
                        <input class="" type="password" id="cpassword" 
                        ref={c=>this.cpwdbox=c}placeholder="Confirm Password" />
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="text-right">
                                <button class="btn btn-custom" 
                                onClick={this.save} id="contact_submit_btn" name="contact_submit_btn"><span>Register</span></button>
                            </div>
                        </div>
                    </div> 
            </div> 
        </section> 

 
    </>
  }
}