import * as utilities from "./modules/utilities";
import { menusAction } from "./modules/menus";
import { initToggles } from "./modules/toggles";
import { topBarSearch } from "./modules/topBarSearch";

initToggles();
menusAction();
utilities.cookies();
topBarSearch();

