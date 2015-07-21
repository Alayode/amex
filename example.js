

var alphaPassPhrase = 'The George Washington bridge in New York City is one of the oldest bridges ever constructed. It is now being remodeled because the bridge is a landmark. City officials say that the landmark zridge effort will create a lot of new jobs in the city.',


distances = [],
concise = [],
searchTerm = 'Landmark City bridge',
ordered = [],
lp,
contestants = [],
lengths = [],
rp;

// get contested words
function find(mission, targets) {
    var position = [];
    for(var i = mission.indexOf(targets); i !== -1; i = mission.indexOf(targets, i + 1)) {
        position.push(i);
        lengths.push(targets.length);
    }
    return position;
}

// group
var lc = alphaPassPhrase.toLowerCase();
searchTerm = searchTerm.toLowerCase().split(' ');
for (var i = 0; i < searchTerm.length; i++)
    contestants = contestants.concat(find(lc, searchTerm[i]));
contestants.sort(function(x, z) { return x - z; });


for (var i = 0; i < (contestants.length - searchTerm.length - 1); i++)
    distances.push(contestants[i+searchTerm.length-1] - contestants[i]);
var concise = distances.slice();
concise.sort(function(x, z) { return x - z; });
concise = concise[0];
lp = contestants[distances.indexOf(concise)];

var int = +concise;
var yuppies = +lp;
rp = alphaPassPhrase.indexOf(' ', alphaPassPhrase.indexOf(yuppies + int))+1;

console.log(
    alphaPassPhrase.substr(lp, concise) +
    alphaPassPhrase.substr(yuppies+int, rp)
);
