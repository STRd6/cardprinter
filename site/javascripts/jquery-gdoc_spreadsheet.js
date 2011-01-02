(function($) {
  $.loadSpreadsheet = function(key, callback) {
    var url = "http://spreadsheets.google.com/feeds/list/" + key + "/od6/public/values?alt=json-in-script&callback=?";

    $.getJSON( url, function(data) {
      var results = [];

      $.each(data.feed.entry, function(i, entry) {
        var result = {};

        $.each(entry, function(key) {
          if(key.indexOf("gsx$") == 0) {
            var realKey = key.substring(4);
            var value = entry[key].$t;

            result[realKey] = value;
          }
        });

        results.push(result);
      });


      callback(results);
    });
  };
})(jQuery);
