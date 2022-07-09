import React from 'react'
import WebUrl from '../WebUrl'
import { Redirect } from 'react-router-dom';
export default class Register extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            loginmsg : '',
            loginstatus : false
        }
    }

    login = ()=>{        
        var email = this.emailbox.value.trim();
        var pwd = this.pwdbox.value.trim();
        
        var data = {
            email : email ,
            password : pwd  }
        
        fetch(WebUrl.LOGIN_USER,{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
           }).then(response=>response.json()).then(result=>{
                if(result.status && result.verify)                
                    this.setState({loginstatus:true})
                else
                    if(result.verify==false) 
                        this.setState({loginmsg:'Please Verify First !'})                    
                    else
                        this.setState({loginmsg:'Login Failed !'})                    
           });
   }

  render()
  {
    if(this.state.loginstatus)
    {
        return <Redirect to="/user/home"/>
    }

    return <>
       <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h4>User Login</h4>                        
                    </div> 
                </div> 
                <hr/>
               <b class='text-danger'>
                   {this.state.loginmsg}
                   </b>
                    <div class="row">                       
                        <div class="col-lg-12 col-md-12">
                            <input class="" type="text" name="contact_email" 
                            ref={c=>this.emailbox=c}id="contact_email" placeholder="Email" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <input class="" type="password" 
                            ref={c=>this.pwdbox=c}id="password" placeholder="Password" />
                        </div>                        
                    </div>
                   
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="text-right">
                                <button class="btn btn-custom" 
                                onClick={this.login} id="contact_submit_btn" name="contact_submit_btn"><span>Login</span></button>
                            </div>
                        </div>
                    </div> 
            </div> 
        </section> 

 
    </>
  }
}