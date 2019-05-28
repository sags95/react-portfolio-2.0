import React from 'react';
import './App.css';
import { Button, TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarNavigationIcon, TopAppBarTitle, Grid, GridCell, Typography} from 'rmwc';
import '@material/button/dist/mdc.button.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/typography/dist/mdc.typography.css';

function App() {
  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarNavigationIcon icon="face" />
            <TopAppBarTitle>My Portfolio</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <Button
              label="My work"
              icon="work"
              unelevated
              theme={['secondaryBg', 'onSecondary']}
            />
             <Button
              label="About me"
              icon="face"
              unelevated
              theme={['secondaryBg', 'onSecondary']}
            />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    <div className="landing">
      <div className="landing_header">
        <Typography use="headline1">Welcome to my Portfolio</Typography>
      </div>
    </div>
   </div>
  );
}

export default App;
