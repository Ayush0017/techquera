import React from 'react'

export default class Contact extends React.Component
{
  render(){
    return <>
       <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h4>Get In Touch</h4>
                        <div class="line-separate line-white text-center"><span></span></div>
                        <p>7-Indus House, Area name,city name -1230009</p>
                    </div> 
                </div> 
                
                <div id="cformSuccessMsg" class="confirm-message"></div>
                <form id="" name="contactForm" method="POST" >
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-lg-offset-2 col-md-offset-2">
                            <input class="" type="text" name="contact_name" id="contact_name" placeholder="Name" />
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <input class="" type="text" name="contact_email" id="contact_email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-lg-offet-2 col-md-offset-2">
                            <textarea name="contact_message" id="contact_message" placeholder="Message"></textarea>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="text-right">
                                <button class="btn btn-custom" id="contact_submit_btn" name="contact_submit_btn"><span>Send Message</span></button>
                            </div>
                        </div>
                    </div> 
                </form>
            </div> 
        </section> 

 
    </>
  }
}