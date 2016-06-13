//var data = [
//  {id: 1, name: 'ноутбук', imgSrc: 'http://i1.rozetka.ua/main/popularsections/0/7.png'},
//  {id: 2, name: 'смартфоны', imgSrc: 'http://i2.rozetka.ua/main/popularsections/0/17.png'},
//  {id: 3, name: 'бытовая химия', imgSrc: 'http://i1.rozetka.ua/main/popularsections/0/135.jpg'},
//  {id: 4, name: 'одежда и обувь', imgSrc: 'http://i1.rozetka.ua/main/popularsections/0/27.jpg'},
//  {id: 5, name: 'алкогольные напитки', imgSrc: 'http://i2.rozetka.ua/main/popularsections/0/148.jpg'},
//  {id: 6, name: 'косметика и парфюмерия', imgSrc: 'http://i1.rozetka.ua/main/popularsections/0/47.png'},
//  {id: 7, name: 'нижнее белье', imgSrc: 'http://i2.rozetka.ua/main/popularsections/0/69.jpg'},
//  {id: 8, name: 'торговое оборудование', imgSrc: 'http://i2.rozetka.ua/main/popularsections/0/179.jpg'},
//  {id: 9, name: 'детский мир', imgSrc: 'http://i1.rozetka.ua/main/popularsections/0/7.png'},
//  {id: 10, name: 'офис и школа', imgSrc: 'http://i2.rozetka.ua/main/popularsections/0/111.jpg'}
//];
//
//var ItemList = React.createClass({
//  render: function() {
//    var dataInfo = this.props.arr.map(function(el) {
//      return (
//        <Item id={el.id} name={el.name} imgSrc={el.imgSrc} key={el.id}/>
//      );
//    });
//
//    return (
//      <ul className="item__list">
//        {dataInfo}
//      </ul>
//    )
//  }
//});
//
//var Item = React.createClass ({
//  render: function() {
//    return (
//
//      <li className="item__el">
//        <div className="item">
//          <img src={this.props.imgSrc} className="item__img"/>
//          <span className="item__id">{this.props.id}. </span>
//          <span className="item__name">{this.props.name}. </span>
//        </div>
//      </li>
//
//    );
//  }
//
//});
//
//ReactDOM.render(
//  <ItemList arr={data} />,
//  document.getElementById('content2')
//);
