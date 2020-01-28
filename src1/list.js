import React,{Component} from 'react';
import './list.css'
class List extends Component{
state={

    likes:0

}

render(){
    return(
            <div>
            <h1>{this.props.name}</h1>
            <Show_info name={this.props.name} weight={this.props.weight} height={this.props.height} job ={this.props.job} element={this.props.element} real_name={this.props.real_name}></Show_info>
            <img src={this.props.img} onClick={()=>{
                let showInfo = document.getElementsByClassName('show_info')[this.props.order];
                if(showInfo.style.display=="none")
                showInfo.style.display="inline-block";
                else
                showInfo.style.display="none";
            }}
            className="applicants_img"></img>
            <h2>좋아요 : {this.state.likes}</h2>
           <button onClick={
               ()=>{
                   this.setState({
                       likes:this.state.likes+1
                   })
               }
           }>추천</button>
            </div>
    );
}
}

class Show_info extends Component{
    render(){
        return(
            <div className="show_info">
    <h2>{this.props.real_name}</h2>
    <p> 키 : {this.props.height}</p>
    <p> 몸무게 : {this.props.weight}</p>
    <p> 직업 : {this.props.job}</p>
    <p> 매력요소 : {this.props.element}</p>
            </div>
        )
    }
}

export default List;