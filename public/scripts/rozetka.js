var data = [
  {
    id: 1,
    imgSrc: 'http://i1.rozetka.ua/goods/1479071/apple_macbook_air_13_mjve2uaa_images_1479071905.jpg',
    name: 'Apple MacBook Air 13" (MJVE2UA/A) + сертификат Розетка 1000грн в подарок!',
    isMany: 12,
    isCommented: false,
    comments: 47,
    isAvailable: true,
    memory: '4 ГБ',
    hdd: '128 ГБ',
    hot: true,
    description: 'Экран 13.3" (1440x900) WXGA+ LED, глянцевый / Intel Core i5 (1.6 - 2.7 ГГц) / RAM 4 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth / веб-камера / OS X Yosemite / 1.35 кг'
  },

  {
    id: 2,
    imgSrc: 'http://i1.rozetka.ua/goods/1628062/9502875_images_1628062867.jpg',
    name: 'Apple MacBook Air NEW 2015 (MJVE2)',
    isMany: 6,
    isCommented: true,
    comments: 0,
    isAvailable: true,
    memory: '4 ГБ',
    hdd: '128 ГБ',
    hot: true,
    description: 'Экран 13.3" (1440x900) WXGA+ LED, глянцевый / Intel Core i5 (1.6 - 2.7 ГГц) / RAM 4 ГБ / SSD 128 ГБ / Intel HD Graphics 6000 / без ОД / Wi-Fi / Bluetooth / веб-камера / OS X Yosemite / 1.35 кг'
  },

  {
    id: 3,
    imgSrc: 'http://i1.rozetka.ua/goods/1479133/apple_macbook_pro_retina_13_mf839uaa_images_1479133967.jpg',
    name: 'Apple MacBook Pro Retina 13" (MF839UA/A)',
    isMany: 0,
    isCommented: false,
    comments: 18,
    isAvailable: false,
    memory: '8 ГБ',
    hdd: '128 ГБ',
    hot: false,
    description: 'Экран 13.3" IPS (2560x1600) Retina LED, глянцевый / Intel Core i5 (2.7 ГГц) / RAM 8 ГБ / SSD 128 ГБ / Intel Iris Graphics 6100 / без ОД / Wi-Fi / Bluetooth / веб-камера / OS X Yosemite / 1.58 кг'
  }
];

var ItemList = React.createClass({
  render: function() {
    var list = this.props.arr.map(function(el) {

      return (
        <Item comments={el.comments}
              imgSrc={el.imgSrc}
              name={el.name}
              memory={el.memory}
              hdd={el.hdd}
              description={el.description}
              isMany={el.isMany}
              hot={el.hot}
              available={el.isAvailable}
              key={el.id}/>
      );
    });

    return (
      <div className="item__list">
        {list}
      </div>
    )
  }
});

var Item = React.createClass ({
  render: function() {

    return (
      <div className="item">
        <img src={this.props.imgSrc} className="item__img"/>
        <p className="item__id">{this.props.id} </p>
        <p className="item__name">{this.props.name} </p>


        {this.props.isMany < 10 ? <IsMany amount={this.props.isMany} /> : null}

        <Btn color={this.props.hot} available={this.props.available}/>
        <Comments amount={this.props.comments} />
        <p className="item__memory">{this.props.memory} </p>
        <p className="item__hdd">{this.props.hdd} </p>
        <p className="item__descr">{this.props.description} </p>
      </div>
    );
  }

});

var Btn = React.createClass ({
  render: function() {
    var cls = 'btn ';

    return (
      <div className="block">
        {!this.props.available ?
        <button className={this.props.color ? cls : cls + 'is-white'}>
          Сообщите, когда появится
        </button>
        :
        <button className={cls}>
          Купить
        </button>
        }
      </div>

    );
  }
});



var IsMany = React.createClass ({
  render: function () {

    return (
        <div className="is-many">
          {!this.props.amount ?
          <p className="black"><strong>Нет в наличии</strong></p>
          :
          <p className="orange"><strong>Заканчивается</strong></p>
          }
        </div>
    );
  }
});

var Comments = React.createClass ({
  render: function () {

    return (
      <div className="is-comments">
        {this.props.amount > 0 ?
        <span className="item__comments">{this.props.amount} отзывов</span>
        :
        <span className="item__comments">Оставить отзыв</span>
        }
      </div>
    );
  }
});




ReactDOM.render(
  <ItemList arr={data}/>,
  document.getElementById('content3')
);
