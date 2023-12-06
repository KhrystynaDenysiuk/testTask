import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { PositionsState } from "./types";

export const getters: GetterTree<PositionsState, RootState> = {
  positions: (state) => state.positions,
};
