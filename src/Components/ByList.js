import React from 'react';

// add the card of book
const ByList = ({ books, index }) => (
  <div>
   { books && books.map( (item, index) => 
       <div key={'container'+index}className="card" style={{width: 20 +'rem'}}>
         <div className="card-body">
          <div key={'book'+index} index={index} >
              <h5 className="card-title">{item.bookName}</h5>
              <p className="card-text">By {item.author}</p>
              <p className="card-text">Start Date: {item.freeByMonths.startDate}</p>
              <p className="card-text">Last Date: {item.freeByMonths.lastDate}</p>
              
          </div>
        </div>
      </div>
    )}
  </div>
    
  );

export default ByList;