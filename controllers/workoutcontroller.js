const { DEFAULT_ENCODING } = require('crypto');
//const express = require('express');
// //const router = express.Router();
// //const validateSession = require('../middleware/validate-session');
// const workout = require('../models/workout');
// const Workout = require('../db').import('../models/workout');

// router.get('/practice', validateSession, function (req, res)

// res.send('Hey!! This is a practice route!')
// );

/************
 * workout-log create
 */
/**************/
// router.post('/create', validateSession, (req, res) => {
//     const workoutEntry = {
//         title: req.body.journal.title,
//         date: req.body.journal.date,
//         entry: req.body.journal.entry,
//         owner: req.user.id
//     }
//     workout.create(workoutEntry)
//         .then(workout => res.status(200).json(workout))
//         .catch(err => res.status(500).json({ error: err }))
// })

// /********************
//  **Get All Entries***
//  ******************** */

// router.get('/', (req, res) => {
//     Workout.findAll()
//         .then(workout => res.status(200).json(workout))
//         .catch(err => res.status(500).json({error: err}))
// });

// /********************
//  **Get Mine***
//  ******************** */
// router.get("/mine", validateSession, (req, res) => {
//     let userid = req.user.id;
//     Workout.findAll({
//       where: { owner: userid },
//     })
//       .then((workout) => res.status(200).json(workout))
//       .catch((err) => res.status(500).json({ error: err }));
//   });



// /********* *
// Get Entries by Title
// ***************/

// router.get('/:title', function (req, res) {
//     let title = req.params.title;
//     Workout.findAll({
//         where: { title: title}
//     })
//     .then(workout=> res.status(200).json(workout))
//     .catch(err=>res.status(500).json({error: err}))
//     });

// // /*Updating *>
// router.put("/update/:entryId", validateSession, function (req, res) {
//     const updateWorkoutEntry = {
//         title: req.body.workout.title,
//         date: req.body.workout.date,
//         entry: req.body.workout.entry,
//     };
//     const query = { where: { id: req.params.entryId, owner: req.user.id}};

//     Workout.update(updateWorkoutEntry, query)
//     .then((workout) => res.status(200).json(workout))
// .catch((err) => res.status(500).json({ error: err}))
// });

// // */DELETING*/
// router.delete('/delete/:id', validateSession, function (req, res) {
//     const query = { where: { id: req.params.id, owner: req.user.id} };

//     Workout.destroy(query)
//     .then(() => res.status(200).json({message: "Workout Entry Removed"}))
//     .catch ((err) =>res.status(500).json({ error: err }));
//     });

module.exports = router;