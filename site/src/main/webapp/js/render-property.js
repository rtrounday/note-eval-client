var listProperty = function(streetViewUrl, queryString, streetAddress, cityName, UPBValue){
  var PropertyItem = React.createClass({
    render: function() {
      return (
        <li className='list-group-item list-group-item-info'>
        <img src={this.props.streetView}></img>
        <a href={this.props.query}>{this.props.address},&nbsp;{this.props.city}&nbsp;${this.props.UPB}
        </a>
        </li>
      );
    }
  });
    ReactDOM.render(<PropertyItem streetView = {streetViewUrl}
      query = {queryString}
      address = {streetAddress}
      city = {cityName}
      UPB = {UPBValue}/>,
      document.getElementById('notelist'));
}
window.listProperty = listProperty;
