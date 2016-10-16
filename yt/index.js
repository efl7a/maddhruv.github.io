  var z = window.location.href;
  var y = z.substring(44, z.length);
  var xhr = new XMLHttpRequest();
  var api = "AIzaSyDf-TCgD54NNSlg_PbqeJyhXWhn0B4WBzw";
  var url = "https://www.googleapis.com/youtube/v3/search?part=id&q=";
  url += y;
  url += "&type=video&key=";
  url += api;
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var status = xhr.status;
      if ((status >= 200 && status < 300) || status === 304) {
        var rss = JSON.parse(xhr.responseText);
        var videoId = rss.items[0].id.videoId;
        document.getElementById('YTPlayer').innerHTML = ('<iframe id="ytplayer" type="text/html" width="100%" height="480px" src="https://www.youtube.com/embed/'+videoId+'?autoplay=1&color=white&showinfo=0" allowfullscreen frameborder="0"></iframe>');
        var secVid = rss.items[1].id.videoId;
        var thVid = rss.items[2].id.videoId;
        var frthVid = rss.items[3].id.videoId;
        document.getElementById('secVid').innerHTML = ('<a href="watch.html?'+secVid+'"><img class="responsive-img" src="https://i.ytimg.com/vi/'+secVid+'/mqdefault.jpg" /></a>');
        document.getElementById('thVid').innerHTML = ('<a href="watch.html?'+thVid+'"><img class="responsive-img" src="https://i.ytimg.com/vi/'+thVid+'/mqdefault.jpg" /></a>');
        document.getElementById('frthVid').innerHTML = ('<a href="watch.html?'+frthVid+'"><img class="responsive-img" src="https://i.ytimg.com/vi/'+frthVid+'/mqdefault.jpg" /></a>');
      } else {
          alert("Request unsuccessful");
      }
    }
  };
  xhr.send(null);

