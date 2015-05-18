var channelName = 'JonTronShow';


$(document).ready(function() {
	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part: 'contentDetails',
			forUsername: channelName,
			key: 'AIzaSyB-Occb9AoG-8L6cBRC-OoRUM1fKHZ23XY'},

			function (data) {
				$.each(data.items, function(i, item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);
				})
			}

			);
});

function getVids(pid){
	$.get(
			"https://www.googleapis.com/youtube/v3/channels", {
				part: 'snippet',
				maxResults: 10,
				playlistId: pid,
				key: 'AIzaSyB-Occb9AoG-8L6cBRC-OoRUM1fKHZ23XY' },
				function(data) {
					var output;
					$.each(data.items, function(i, item){
						videTitle = item.snippet.title;
						output = '<li>'+videTitle+'</li>';
						$('#results').append(output);
					})
				}
		)
}