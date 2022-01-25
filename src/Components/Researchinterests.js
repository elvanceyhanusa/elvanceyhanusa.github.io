import React from "react";
import Markdown from 'markdown-to-jsx';



export default class Researchinterests extends React.Component{

    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = { 
            md: '' 
        }
    }
  
    async componentDidMount() {
        this._isMounted = true;
        
        const file = await import(`../Md/research_interests.md`);
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
