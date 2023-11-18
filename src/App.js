import { useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import SignIn from './pages/sign-in';
import Jobs from './pages/jobs';
import SalaryGuid from './pages/salary-guid';
import CompanyReview from './pages/comany-review';

function App() {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      <Header handleOpenModal={handleOpenModal} />
      <Search />
      {modal && <SignIn closeModal={handleCloseModal} />}
      <Jobs /> 
      <CompanyReview/>
      <SalaryGuid/>
     
    </div>
  );
}

export default App;
