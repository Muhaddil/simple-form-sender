import { defineStore } from 'pinia';

interface State {
  renewedUsers: string[];
}

export const useDataStore = defineStore('data', {
  state: (): State => ({
    renewedUsers: []
  }),
});
