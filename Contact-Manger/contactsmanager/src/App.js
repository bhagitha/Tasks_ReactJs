import React from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  return (
    <div className="w-50 mx-auto">
     <Header></Header>
     <hr className=' w-50  mx-auto'/>
     <hr className=' w-50  '/>
     <AddContact/>
     <hr className='w-50  mx-auto'/>
     <hr className='w-50  '/>
      <ContactList/>
    </div>
  );
}

export default App;
