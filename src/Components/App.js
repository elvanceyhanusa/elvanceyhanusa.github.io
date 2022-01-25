
import React from "react"
import ReactDOM from "react-dom"

import Togglebk from "./toggle_bk";


import '../Css/App.css';
import Particle from './Particle';
import Setupenv from "./Setup";
import Ongoing  from "./Ongoing";
import Knowledge from "./knowledge";
import Footer from './footer';
import Headerlogo from "./Logo";
import Cvresume from "./Cvresume";
import Researchinterests from "./Researchinterests";




/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
class App extends React.Component {

    render() {

        return (
          
          <div>
            <div><Togglebk />
              <Headerlogo />
            </div>
        
            <div>
              <Cvresume />
            </div>
            <div>
              <Researchinterests />
            </div>
            

            <div>                
                <Background />
                <Showmain />
                <Footer />
            </div>
          
          </div>
            
        )
    }
}

// #2
// class Header extends React.Component {
   
//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }



// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
class Background extends React.Component {

  
     
    render() {
      return <div id="particles-js"> <Particle /> </div>
    

    }
}



// Show the Main content in the page
class Showmain extends React.Component {
    state = {
        active: 1
      }

    toggleView= (selection) => {
        this.setState(() => {
            return {
                active: selection
            }
        })
    }
  
    ActiveView(){
      switch (this.state.active) {
        case 1:
          return <Ongoing />;
        case 2:
          return <Knowledge />;
        case 3:
          return <Setupenv />
        default:
          return <Ongoing />;
      }
    }
  
    render() {
      
      

        return (       
          

        <div className="show_main">
            {/* <button className="onging button_main glow-on-hover button_ongoing"  onClick={() => this.toggleView(1)}> */}
            <button className="onging button_main glow-on-hover "  onClick={() => this.toggleView(1)}>
            On-going Development
            </button>
            <button className="button_main glow-on-hover " id="more" onClick={() => this.toggleView(2)}>
            Knowledge Center
            </button>
            <button className="button_main glow-on-hover " id="more" onClick={() => this.toggleView(3)}>
            Setup Enivronment
            </button>
            {/* <hr></hr> */}
            
            {this.ActiveView()}
        </div>

        );
    }
  }

ReactDOM.render(<App />, document.getElementById("root"))


export default App
