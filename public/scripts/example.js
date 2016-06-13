////example
//
// var data = [
//  {id: 1, author: "Rita", text: "бла бла..."},
//  {id: 2, author: "Anton", text: "ыгыгы"}
// ];
//
// var nodes = [
//  {sex: 'male', age: 27},
//  {sex: 'female', age: 29}
// ];
//
// var CommentList = React.createClass({
//
//  render: function() {
//    var commentNodes = this.props.comments.map(function(comment) {
//      return (
//          <div className="comment">
//            <span className="comment__id">{comment.id}. </span>
//            <span className="comment__author">{comment.author}, </span>
//            <span className="comment__text">{comment.text}</span>
//          </div>
//      );
//    });

//    var addNodes = this.props.additional.map(function(el) {
//      return (
//          <div className="info">
//            <span className="info__sex">{el.sex}, </span>
//            <span className="info__age">{el.age}</span>
//          </div>
//      );
//    });
//    return (
//        <div className="commentList">
//          {commentNodes}
//          {addNodes}
//        </div>
//    );
//  }
// });
//
// ReactDOM.render(
//    <CommentList comments={data} additional={nodes} />,
//    document.getElementById('content')
// );

//
//// var name = 'Nata';
////
//// var Name = React.createClass({
////
////  render: function() {
////    return (
////        <div className="name">
////          {this.props.node}
////        </div>
////    );
////  }
//// });
////
////
//// ReactDOM.render(
////    <Name node={name} />,
////    document.getElementById('content')
//// );
//
//var main = [
// {id: 1, name: "Nata"},
// {id: 2, name: "Rita"}
//];
//
//var add = [
// {id: 1, sex: 'female', age: "30"},
// {id: 2, sex: 'female', age: "25"}
//];
//
//var Child = React.createClass ({
//  render: function() {
//    return (
//      <div className="box">
//        <span className="box__id">{this.props.id}. </span>
//        <span className="box__name">{this.props.name} </span>
//      </div>
//    );
//  }
//});
//
//var Child2 = React.createClass ({
//  render: function() {
//    return (
//      <div className="box">
//        <span className="box__id">{this.props.id}. </span>
//        <span className="box__sex">{this.props.sex}. </span>
//        <span className="box__age">{this.props.age} </span>
//      </div>
//    );
//  }
//});
//
//var Parent = React.createClass({
//  render: function() {
//    var parentName = this.props.name.map(function(el) {
//      return (
//          <Child id={el.id} name={el.name} key={el.id}/>
//      );
//    });
//    var parentInfo = this.props.inf.map(function(el) {
//      return (
//        <Child2 sex={el.sex} age={el.age} key={el.id}/>
//      );
//    });
//    return (
//      <div className="boxList">
//        {parentName}
//        {parentInfo}
//      </div>
//    )
//  }
//});
//
//ReactDOM.render(
//   <Parent name={main} inf={add}/>,
//   document.getElementById('content')
//);
