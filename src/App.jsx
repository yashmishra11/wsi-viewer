import React from 'react';
import BoundingBoxViewer from './components/WSIViewer/BoundingBoxViewer';
import ZoomedOutView from './components/ZoomedOutView';
import DetailsPanel from './components/DetailsPanel';

const App = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', height: '100vh' }}>
      {/* Left Panel */}
      <div style={{ borderRight: '1px solid #ccc' }}>
        <DetailsPanel />
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Top Right - Zoomed Out View */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
          <ZoomedOutView />
        </div>

        {/* Center - Bounding Box Viewer */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BoundingBoxViewer />
        </div>
      </div>
    </div>
  );
};

export default App;
