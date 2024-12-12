import { useEffect, useState } from 'react';

// set title for component
function useTitle(title = 'LearnGo', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'LearnGo' ? `${title} - LearnGo` : title;
    }
  }, []);

  return null;
}

export default useTitle;
