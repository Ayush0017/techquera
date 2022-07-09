import React from 'react'
import { Redirect , Link } from 'react-router-dom'
import WebUrl from './WebUrl'

export default class Menu extends React.Component 
{
    constructor()
    {
        super()
        this.state = {
            islogin : false,
            islogout : false,
            pic : undefined,            
        }
        setInterval(this.check,1000)
    }

    check = ()=>
    {
        fetch(WebUrl.CHECK_SESSION).then(response=>response.json()).then(result=>
        {
            this.setState({islogin:result.status,pic:result.pic})
        })
    }

    logout = ()=>{
        fetch(WebUrl.LOGOUT).then(response=>response.json()).then(result=>
            {
                this.setState({islogout:true,islogin:false,pic : undefined})
            })
    }

    render() 
    {
        var logo = '';
        if(this.state.pic==undefined)
            logo = <b class="navbar-brand" >Tech Quera</b>
        else
            logo = <img src={this.state.pic} height='50' width='50'/>    


        if(this.state.islogout)
        {
            this.setState({islogout:false})
            return <Redirect to="/"/>
        }

         var menu = undefined;
         if(this.state.islogin)   
            menu = <ul class="nav navbar-nav">
            <li class="active">
                <Link to="/user/home">Home</Link></li>            
            <li>
                <Link to="/user/query">Queries</Link></li>                 
            <li>
                <Link to="/user/profile">Profile</Link></li>                                 
            <li>
                <a onClick={this.logout}>Logout</a>
            </li>
        </ul>
        else
            menu = <ul class="nav navbar-nav">
            <li class="active">
                <Link to="/">Home</Link></li>
            <li>
            <Link to="/register">Register</Link>
            </li>    
            <li>
            <Link to="/login">Login</Link>
            </li>    
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            </ul>


        return <>
            <br/>
            <section class="">
                <div class="container">
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                {logo}                               
                            </div>
                            {menu}
                        </div>
                    </nav>
                </div>
            </section>
        </>
    }
}