import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode, useEffect, useState } from 'react';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value: currentTab, index, ...other } = props;

  const [visited, setVisited] = useState(false);
  useEffect(() => {
    if (index === currentTab) {
      setVisited(true);
    }
  }, [index, currentTab, setVisited]);

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        left: 0,
        position: 'absolute',
        display: currentTab === index ? 'block' : 'none',
        width: '100%',
      }}
      {...other}
    >
      {visited && (
        <Box sx={{ paddingTop: 3 }} component="div">
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};
