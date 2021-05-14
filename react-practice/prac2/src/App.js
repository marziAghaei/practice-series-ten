import React from"react";
import {Header} from './components/common';
import {Card} from "./components/common";
import {Card2} from "./components/common"
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <h1>چرا عضو این جنبش شوید؟</h1>
      <div className="container__card">
      <Card title="Card Title" imageurl="https://teaoff.co.uk/wp-content/uploads/sites/2/2021/01/cropped-tea-off-icon-new.jpg"
       body="اسراف کمتر"/>
        <Card title="Card Title" imageurl="https://previews.123rf.com/images/dxinerz/dxinerz1508/dxinerz150801812/43880753-user-groups-peoples-icon-vector-image-can-also-be-used-for-admin-dashboard-suitable-for-mobile-apps-.jpg"
       body="مشتریان جدید"/>
        <Card title="Card Title" imageurl="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-coins-icon-png-image_327576.jpg"
       body="درآمد بیشتر"/>
      </div>
     <div className="container__card2">
     <Card2 imageurl="https://www.flaticon.com/premium-icon/icons/svg/1514/1514464.svg" body="نانوایی و قنادی"/>
     <Card2 imageurl="https://www.flaticon.com/svg/vstatic/svg/4221/4221140.svg?token=exp=1620978691~hmac=b2105e27a1ce6d3044810c66e3a59993" body="رستوران و کافه"/>
     <Card2 imageurl="https://www.flaticon.com/svg/vstatic/svg/2906/2906856.svg?token=exp=1620978472~hmac=83cdac5e1b5946061f69d0f2eb8a017a" body="هتل"/>
     <Card2 imageurl="https://www.flaticon.com/premium-icon/icons/svg/4184/4184101.svg" body="سوپر مارکت"/>
     </div>
    </div>
)

}
export default App;
