import React,{Component} from 'react';

class Result extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
<h2>현재 1위는</h2>
{/* <img src={this.props.img}></img> */}
{this.props.callbackFromParents(1)}
            </div>
        );
    }
}

export default Result;