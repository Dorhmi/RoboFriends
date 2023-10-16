import React , {Component} from "react";
import CardsContainer from './Cardscontainer';
import { robots } from './robots';
import './Layout.css';
import Searchbox from './Searchbox';

class Layout extends Component{
    constructor() {
        super()
        this.state = {
            robots : robots,
            searchfield: '',
        }
    }
    searchOnChange = (e) => {
        this.setState({searchfield: e.target.value})
    }
    render () {
        const filtredArray = this.state.robots.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <header className="header">
                <div className="header-content">
                <h1 className="header-title">robofriends</h1>
                <Searchbox searchchange = {this.searchOnChange} />
                </div>
                <div>
                    <CardsContainer robots={filtredArray} /> 
                </div>
            </header>
        )
    }
}

export default Layout ;