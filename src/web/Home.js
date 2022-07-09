import React from 'react'

export default class Home extends React.Component
{
  render(){
    return <>
      <section class="newsletter">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div class="main_content">
                            <h4><strong>Indus is under construction!</strong></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <div id="" class="confirm-message"></div>
                            <form id="" name="">
                                <div class="input-group">
                                    <input class="form-control news-input" type="text" name="subscribe_email" id="subscribe_email" placeholder="Email" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-custom news-btn" id="" name="subscribe_btn"><span>Subscribe</span></button>
                                    </span>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </section>


        <section class="features parallax" data-stellar-background-ratio="0.7" id="features">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-4 col-md-4">
                        <div class="features-box">
                            <div class="open-overlay"><i class="icon-lightbulb"></i></div>
                            <h4>High Quality</h4>
                            <p>Nullam posuere, libero dolor molestie mi, vitae rutrum odio urna non dui.Nullam posuere, libero dolor molestieabd mi, vitae.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="features-box">
                            <div class="open-overlay"><i class="icon-ribbon"></i></div>
                            <h4>Great Features</h4>
                            <p>Nullam posuere, libero dolor molestie mi, vitae rutrum odio urna non dui.Nullam posuere, libero dolor molestieabd mi, vitae.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="features-box">
                            <div class="open-overlay"><i class="icon-circle-compass"></i></div>
                            <h4>Customer Services</h4>
                            <p>Nullam posuere, libero dolor molestie mi, vitae rutrum odio urna non dui.Nullam posuere, libero dolor molestieabd mi, vitae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>    

    </>
  }
}