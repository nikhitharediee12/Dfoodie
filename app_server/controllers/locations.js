module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Dfoodie - Connecting food lovers',
        pageHeader: {
            title: 'Dfoodie',
            strapline: 'Connecting food lovers'
        },
        sidebar: "Dfoodie is a place where you can find reviews and place to sit with friends.",
        locations: [{
            name: 'Koi and co',
            address: 'sainikpuri',
            rating: 3,
            facilities: ['Fast food', 'Biryani', 'live band'],
            distance: '100m'
        }, {
            name: 'coffee cup',
            address: 'suchitra',
            rating: 4,
            facilities: ['live band', 'food', 'mocktails'],
            distance: '200m'
        }, {
            name: 'lifafa',
            address: 'Narapally',
            rating: 2,
            facilities: ['Biryani', 'food'],
            distance: '500m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};