// Helper functions to verfiy if the url is valid 

// Verifies if vote url is in the database 
function verifiedVote (url) {
  return knex('polls')
    .where('vote_url', url)
    .then((results) => {
      if (results.length === 0) {
        console.log('not found');
        return false;
      }
        console.log('vote');
        return [results[0]['vote_url'], results[0]['id']];
    }
}


//verifies if admin link is in the database 
function verifiedAdmin (url) {
  return knex('polls')
    .where('admin_url', url)
    .then((results) => {
      if (results.length === 0) {
        console.log('not found');
        return false;
      }
        console.log('vote');
        return [results[0]['admin_url'], results[0]['id']];
    }
}