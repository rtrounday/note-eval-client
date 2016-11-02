var listProperties = function(snapshot, userUid){
  var PropertyItems = React.createClass({
    render: function() {
      var streetview_key = "AIzaSyCxokrZQ9-C8gCQKYkGtVK0J1X7UXM-9uw";
      var properties = [];
      // Iterate through all notes in the Firebase database
      snapshot.forEach(function(note){
        properties.push(note);
      });
      const propertyList = properties.map(function(note){
        var noteUid = note.key;
        var address = note.child("Street Address").val();
        var city = note.child("City").val();
        var UPB = note.child("Current UPB").val();
        var params = {location: address + " " + city, key: streetview_key, size: "150x150"}
        var streetViewUrl =
            'https://maps.googleapis.com/maps/api/streetview?' + $.param(params)
        var query = '/notedetails?userId=' + userUid + '&noteId=' + noteUid;
        return  (<li key={noteUid} className='list-group-item list-group-item-info'>
                <img src={streetViewUrl}></img>
                <a href={query}>{address},&nbsp;{city}&nbsp;${UPB}
                </a>
                </li>);
      });
      // Return the list of properties UI
      return (
        <ul id='notelist' className='list-group'>{propertyList}</ul>
      );
    }
  });
  // Render the listing of properties
    ReactDOM.render(<PropertyItems />,
      document.getElementById('listingView'));
}
// Give the function global scope in the browser
window.listProperties = listProperties;
