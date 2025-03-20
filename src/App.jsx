import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoundingBoxViewer from './components/BoundingBoxViewer';
import DetailsPanel from './components/DetailsPanel';
import ZoomedOutView from './components/ZoomedOutView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoundingBoxViewer />} />
        <Route path="/details" element={<DetailsPanel />} />
        <Route path="/zoom" element={<ZoomedOutView />} />
      </Routes>
    </Router>
  );
}

export default App;