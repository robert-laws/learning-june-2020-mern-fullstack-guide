const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'A very tall building in NYC',
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Lincoln Center',
    description: 'Good art and music found here',
    location: {
      lat: 42.23574,
      lng: -72.625326
    },
    address: '103 3rd Ave, New York, NY 10002',
    creator: 'u2'
  }
]

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId
  })
  res.json({ place });
});

router.get('/users/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId
  })
  res.json({ place })
})

module.exports = router;