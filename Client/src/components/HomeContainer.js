import React, {Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import Details from './Details';
import Footer from './Footer';
import DefaultImg from '../img/default_img.jpg';
import LogoImg from '../img/recycle_bits_logo.png';

class HomeContainer extends Component {

    /*======================================================================
    // This will set state for a variety of program vital functions.
    ======================================================================*/
    constructor() {
        super();
        this.state = {
            displayUpload: true,
            displayConfirm: false,
            displayResults: false,
            displayLoading: false,
            displayError: false,
            uploadedImg:[],
            itemRecyclable: false
        };
      }

    /*======================================================================
    // This will handle the image upload process once the user clicks the
    // Upload Image button.
    ======================================================================*/
    uploadImg = (e) => {
        this.setState({
            displayUpload: false,
            displayConfirm: true,
            displayResults: false,
            displayLoading: false,
          })
    }

    /*======================================================================
    // This will handle displaying results once the user has confirmed
    // the image to upload.
    ======================================================================*/
    confirmImg = (e) => {
        this.setState({
            displayUpload: false,
            displayConfirm: false,
            displayResults: true,
            displayLoading: false,
          })
    }

    /*======================================================================
    // This will handle resetting the interface to the pre upload state
    // when the user clicks the Start Over button.
    ======================================================================*/
    newImg = (e) => {
        this.setState({
            displayUpload: true,
            displayConfirm: false,
            displayResults: false,
            displayLoading: false,
          })
    }

    /*======================================================================
    // This will render the home page.
    ======================================================================*/
    render() {
        return (
        <div className="home-container">
            <div className="header">
                <img src={LogoImg} alt='' />
            </div>
            
            <div className="main-body">
                <div className="main-upload">
                    {(this.state.displayUpload)
                        ? <Button bsStyle="primary" className="upload-btn btn" onClick={this.uploadImg}>Upload Image</Button>
                        : <p></p> }
                </div>
                <div className="main-confirm">
                    {(this.state.displayConfirm)
                        ? <img src={DefaultImg} alt='' />
                        : <p></p> }
                    {(this.state.displayConfirm)
                        ? <Button bsStyle="primary" className="confirm-btn btn" onClick={this.confirmImg}>Confirm Image</Button>
                        : <p></p> }
                </div>
                <div className="main-results">
                    {(this.state.displayResults)
                        ? <img src={DefaultImg} alt='' />
                        : <p></p> }
                    {(this.state.displayResults)
                        ? <Details recyclable={this.state.itemRecyclable} />
                        : <p></p> }
                    {(this.state.displayResults)
                        ? <Button bsStyle="primary" className="results-btn btn" onClick={this.newImg}>Start Over</Button>
                        : <p></p> }
                </div>
                <div className="main-loading">
                    {(this.state.displayLoading)
                        ? <p className="loader"></p>
                        : <p></p> }
                </div>
                <div className="main-error">
                    {(this.state.displayError)
                        ? <p>An error has occurred.</p>
                        : <p></p> }
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default HomeContainer;