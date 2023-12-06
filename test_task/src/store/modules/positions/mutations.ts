import { MutationTree } from "vuex";
import { PositionsState } from "./types";

export enum PositionsMutations {
  show_positions = "show_positions",
}

export const mutations: MutationTree<PositionsState> = {
  [PositionsMutations.show_positions](state, payload) {
    state.positions = payload.positions.positions.map((position: any) => ({
      label: position.name,
      value: position.id,
    }));
  },
};
