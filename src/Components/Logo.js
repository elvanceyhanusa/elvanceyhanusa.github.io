import React from 'react';
import logo from '../Images/Ceyhan2017.jpeg'; // Tell webpack this JS file uses this image
import Markdown from 'markdown-to-jsx';



export default class Headerlogo extends React.Component {
    render(){
        return (
        // <iframe width="900px">
        <div className="logo_two_column">
            
            <div className="Headerlogo"><img src={logo} alt="Evlan Ceyhan" className="Headerimg" /></div>
            <div className="Headertext"><Contact /></div>

            
        </div>
        // </iframe>
        )
    }

  
}


class Contact extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = { 
            md: '' 
        }
    }
  
    async componentDidMount() {
        this._isMounted = true;
        
        const file = await import(`../Md/contact.md`);
        const response = await fetch(file.default);
        const text = await response.text();
        if (this._isMounted){
            this.setState({
                md: text
            })
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
  
    render() {
        return (
               
            <div className="main_contact">
                
                    <Markdown children={this.state.md} />   
       
                <hr />
            </div> 

        )
    }
  }
