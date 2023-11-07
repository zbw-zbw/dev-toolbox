import { useCallback, useMemo, useState } from 'react';

type Mode = 'light' | 'dark';

function useToggleMode() {
  const [mode, setMode] = useState<Mode>('light');

  const isDarkMode = useMemo(() => mode === 'dark', [mode]);

  const toggleMode = useCallback(() => {
    setMode(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode]);

  return [isDarkMode, toggleMode] as const;
}

export default useToggleMode;
