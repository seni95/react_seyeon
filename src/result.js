import React,{Component} from 'react';

class Result extends Component{

    render(){
        return(
            <div>
<h2>현재 1위는</h2>
<img src={this.props.img}></img>
            </div>
        );
    }
}

export default Result;