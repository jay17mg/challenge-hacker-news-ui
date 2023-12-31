const sortStories = (key, stories) => {
    switch (key) {
      case '1':
        return stories.sort((a, b) => a.time < b.time ? 1 : -1);
      case '2':
        return stories.sort((a, b) => a.time > b.time ? 1 : -1);
      case '3':
        return stories.sort((a, b) => a.score > b.score ? 1 : -1);
      case '4':
        return stories.sort((a, b) => a.score < b.score ? 1 : -1);
    }
  }

  const formatTime = (time) => {
    var d = new Date();  // Gets the current time
    var nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    var seconds = nowTs - time;
    var minutes = Math.floor(seconds / 60)
    if(minutes === 1){
        return minutes + " minute ago";
    }
    else if(minutes < 1){
        return 'few seconds ago'
    }
    else if (minutes < 60) {
        return minutes + " minutes ago";
    }
    else{
        var hours = Math.floor(minutes/60);
        if (hours === 1){
            return hours + " hour ago"
        }
        if(hours < 24){
            return hours + " hours ago"
        }
        else{
            return Math.floor(hours/24) + ` day${Math.floor(hours/24) !== 1 ? 's':''} ago`
        }  
    }
}

  export {sortStories, formatTime}