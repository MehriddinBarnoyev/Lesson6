import React, { Component } from 'react'
import imgLogo from './../../img1.png'
import './Header.css'

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = { soni: 0 }
    }

    add = () => {
        this.setState((state) => {
            return { soni: state.soni + 1 }
        })
    }
    render() {
        return (
            <header className='shadow'>
                <div className="container-fluid py-4 d-flex justify-content-between">
                    <div className=' d-flex align-items-center'>
                        <img src={imgLogo} alt="" />
                        <button className='ms-4 btn katalog'>Katalog</button>
                        <div className='d-flex align-items-center searchbar ms-3'>
                            <input className='me-3 search' type='search' />
                        </div>
                    </div>
                    <div className='justify-content-between' >

                        <button className='btn border shadow me-2' onClick={() => {
                            document.querySelector("body").setAttribute("data-theme", "dark")
                        }}>
                            Tun
                        </button>
                        <button className='btn border shadow me-3 ' onClick={() => {
                            document.querySelector("body").setAttribute("data-theme", "light")
                        }}>
                            Kun
                        </button>
                        <button className='btn btn-danger' onClick={this.add}>Savatcha
                            {this.state.soni !== 0 ?
                                <span className='badge badge-lihgt'>{this.state.soni}</span>
                                : ""
                            }
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}
