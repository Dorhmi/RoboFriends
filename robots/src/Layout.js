import React , {Component} from "react";
import CardsContainer from './Cardscontainer';
import './Layout.css';
import Searchbox from './Searchbox';

class Layout extends Component{
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield: '',
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    } 

    searchOnChange = (e) => {
        this.setState({searchfield: e.target.value})
    }
    render () {
        const filtredArray = this.state.robots.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0) {
            return <h1 className="load">Loading...</h1>
        } else {
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
            );
        }
    }
}

export default Layout ;