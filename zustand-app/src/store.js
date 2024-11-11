import { create } from 'zustand';

const useStore = create((set) => ({
  planets: [],
  loading: false,
  error: null,
  fetchPlanets: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://swapi.py4e.com/api/planets/');
      if (!response.ok) {
        throw new Error('Failed to fetch planets');
      }
      const data = await response.json();
      set({ planets: data.results, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message, planets: [] });
    }
  },
  clearPlanets: () => set({ planets: [] }),
}));

export default useStore;
