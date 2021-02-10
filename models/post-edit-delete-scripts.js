// /* *************************
//  *** POST JOURNAL ***
// ************************** */
// function postJournal() {
//     let title = document.getElementById('title').value
//     let date =document.getElementById('date').value
//     let entry =document.getElementById('entry').value
//     const accessToken = localStorage.getItem('SessionToken')
//     let newEntry = { journal: { title: title, date: date, entry: entry} }

// fetch('http://localhost:3000/journal/create', {
//     method: "Post",
//     headers: new Headers({
//         "Content Type": 'application/json',
//         'Authorization': accessToken
//     }),
//         body:JSON.stringify(newEntry)
//     })
// .then(response => {
//     console.log(response.json())
//     display.Mine()
//     })
//     .catch((err) => {
//         console.log (err)
// }
    
    
    
//     /* *************************
//      *** UPDATE JOURNAL ***
//     ************************** */
//     function editJournal(postId) {
//      console.log('editJournal Function Called')
//     }
//     // router.put("/update/:entryId", validateSession, function (req, res) {
//     //     const updateJournalEntry = {
//     //         title: req.body.journal.title,
//     //         date: req.body.journal.date,
//     //         entry: req.body.journal.entry,
//     //     };
//     //     const query = { where: { id: req.params.entryId, owner: req.user.id}};
    
//     //     Journal.update(updateJournalEntry, query)
//     //     .then((journals) => res.status(200).json(journals))
//     // .catch((err) => res.status(500).json({ error: err}))
//     // });
    
    
//     /* *************************
//      *** DELETE JOURNAL ***
//     ************************** */
//     function deleteJournal(postId) {
//      console.log('deleteJournal Function Called')
//     }

//     router.delete('/delete/:id', validateSession, function (req, res) {
//         const query = { where: { id: req.params.id, owner: req.user.id} };
    
        //REF: Journal.destroy(query)
       // .then(() => res.status(200).json({message: "Journal Entry Removed"}))
       // .catch ((err) =>res.status(500).json({ error: err }));
       // });