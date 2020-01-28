import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'
import Result from './result'

const applicant_list_all = [
  {
    name:"후보1",
    img:require('./img/후보1.jpg'),
    key:0,
    height:"183cm"
    ,element:"얼굴과 백옥같은 피부",
    weight:"64kg",
    job:"배우",
    real_name:"차은우"
        },
        {
    name:"후보2",
    img:require("./img/후보2.jpg"),
    key:1,      
    height:"183cm"
    ,element:"차가운 얼굴과 상반되는 귀여움",
    weight:"63kg",
    job:"가수",
    real_name:"오세훈"
        },
        {
    name:"후보3",
    img:require("./img/후보3.jpg"),
    key:2,
    height:"178cm"
    ,element:"장난기 많아보이는 순수한 페이스",
    weight:"65kg",
    job:"가수",
    real_name:"버논"      
        },
        {
    name:"후보4",
    img:require("./img/후보4.jpg"),
    key:3,
    height:"178cm"
    ,element:"나쁜남자 삘~",
    weight:"62kg",
    job:"가수",
    real_name:"김상균"      
        },
        {
    name:"후보5",
    img:require("./img/후보5.jpg"),
          key:4,
          height:"182cm"
          ,element:"지켜주고싶은 청순남",
          weight:"71kg",
          job:"배우",
          real_name:"박보검"        
        },
        {
    name:"후보6",
    img:"https://upload.wikimedia.org/wikipedia/commons/c/cb/180927_%EC%84%9C%EA%B0%95%EC%A4%80.jpg",
    key:5,
    height:"181cm",
    element:"첫사랑을 연상시키는 아련한 미남",
    weight:"73kg",
    job:"배우",
    real_name:"서강준"
        },{
    name:"후보7",
    img:"http://mnews.imaeil.com/inc/photos/2018/10/17/2018101713094158642_l.jpg",
    key:6,
    height:"183cm",
    element:"청순 귀요미. 시국이 시국이지만 잘생겨서 넣어줌 ㅎ"
    ,weight:'67kg',
    job:"배우",
    real_name:"사카구치 켄타로"
        },
    {
    name:"후보8",
    img:"http://mblogthumb3.phinf.naver.net/20160407_178/babyhi8_1459989424390XB1Nq_JPEG/000_00003.jpg?type=w420",
    key:7,
    height:"191cm",
    element:"위험하고 천진난만한 나쁜남자 삘~",
    weight:'비공개',
    job:'모델',
    real_name:"프란시스코 라코우스키"
    }
]

let add_new_member = 4;


class App extends Component{
  state={
data:[]
  }


  callbackScore=(dataFromList)=>{
this.setState({
  data:[
    ...this.state.data,
    dataFromList
  ]
})
  }



  componentDidMount(){
    window.addEventListener('scroll', this.infinity_scroll, true);
    setTimeout(()=>{
      this.setState({
      applicant_list:
      [
              {
          name:"후보1",
          img:require('./img/후보1.jpg'),
          key:0,
          height:"183cm"
          ,element:"얼굴과 백옥같은 피부",
          weight:"64kg",
          job:"배우",
          real_name:"차은우"
              },
              {
          name:"후보2",
          img:require("./img/후보2.jpg"),
          key:1,      
          height:"183cm"
          ,element:"차가운 얼굴과 상반되는 귀여움",
          weight:"63kg",
          job:"가수",
          real_name:"오세훈"
              },
              {
                name:"후보3",
                img:require("./img/후보3.jpg"),
                key:2,
                height:"178cm"
                ,element:"장난기 많아보이는 순수한 페이스",
                weight:"65kg",
                job:"가수",
                real_name:"버논"      
            },
            {
              name:"후보4",
              img:require("./img/후보4.jpg"),
              key:3,
              height:"178cm"
              ,element:"나쁜남자 삘~",
              weight:"62kg",
              job:"가수",
              real_name:"김상균"      
                  },
        ]
        })}
    ,3000)
  }

infinity_scroll=(e)=>{
  let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  let clientHeight = document.documentElement.clientHeight;
  if(scrollTop + clientHeight == scrollHeight){
    

    if(add_new_member<7){
      setTimeout(()=>{
        this.setState({
          applicant_list:[ 
            ...this.state.applicant_list,
            applicant_list_all[add_new_member],
            applicant_list_all[add_new_member+1]
            ],
          })

        add_new_member=add_new_member+2
      },650)
    
  }
    
  }
}


show_applicant=()=>{
const applicants=this.state.applicant_list.map((info,index)=>{
  return <List name={info.name} img={info.img} order={info.key} height={info.height} weight={info.weight} job={info.job} element={info.element} real_name={info.real_name}></List>
})
return applicants;
}

show_Result=()=>{
 if( this.state.applicant_list.length== applicant_list_all.length){
   return <Result callbackFromParents={this.callbackScore}></Result>
 }
}

  render(){
  return (
    <div className="App">
        <h1>클릭시 후보자의 정보가 보입니다. (더블 클릭시 사라짐)</h1>
        {this.state.applicant_list ? this.show_applicant() : <h3>후보자를 불러오는 중입니다...</h3>}
        {this.state.applicant_list ? this.show_Result(): ""}
    </div>
  );}
}

export default App;
