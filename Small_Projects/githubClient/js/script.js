console.log("Starting..");

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function f(){
    try {
        document.getElementsByClassName("repo-list").remove();
    } catch (e) {
        console.log("No elements to remove");
    }
    var items = [];
    var username = document.getElementById('search').value
    let url = "https://api.github.com/users/"+username;
    let repurl= "https://api.github.com/users/"+username+"/repos";


    $.getJSON( url, function( data ) {
      document.getElementById('avatar').src = data.avatar_url;
      document.getElementById('avatar').width= 240;
      document.getElementById('avatar').height= 240;
      document.getElementById('username').innerText=data.login;
      document.getElementById('bio').innerText=data.bio;
    });

    $.getJSON( repurl, function( data ) {
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val.name+ "</li>" );
            if(val.description != null){
                items.push("<ul>" + "Description:  " + val.description + "</ul>");
            }
            if(val.language != null){
                items.push("<ul>" + "Language:  " + val.language + "</ul>");
            }
            items.push("<ul>" + "Stars:  " + val.stargazers_count + "</ul>")
        });
        $( "<ul/>", {
            "class": "repo-list",
            html: items.join( "" )
        }).appendTo( ".repo" );
    });

}