import React, {Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import Footer from './Footer';
import StockImg from '../img/stock_img.jpg';

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
            uploadedImg:[],
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
        console.log("Upload Image!");
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
        console.log("New Image!");
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
        console.log("Results Image!");
    }

    /*======================================================================
    // This will render the home page.
    ======================================================================*/
    render() {
        return (
        <div className="home-container">
            <div className="header">
                <h1>Recycle Bits</h1>
            </div>
            <div className="main-body">
                <div className="main-upload">
                    {(this.state.displayUpload)
                        ? <Button bsStyle="primary" className="upload-img-btn btn" onClick={this.uploadImg}>Upload Image</Button>
                        : <p></p> }
                </div>
                <div className="main-confirm">
                    {(this.state.displayConfirm)
                        ? <img src={StockImg} alt='' />
                        : <p></p> }
                    {(this.state.displayConfirm)
                        ? <Button bsStyle="primary" className="upload-img-btn btn" onClick={this.confirmImg}>Confirm Image</Button>
                        : <p></p> }
                </div>
                <div className="main-results">
                    {(this.state.displayResults)
                        ? <img src={StockImg} alt='' />
                        : <p></p> }
                    {(this.state.displayResults)
                        ? <Button bsStyle="primary" className="upload-img-btn btn" onClick={this.newImg}>Start Over</Button>
                        : <p></p> }
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default HomeContainer;