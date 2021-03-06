import * as utilities from "./modules/utilities";
import { menusAction } from "./modules/menus";
import { initToggles } from "./modules/toggles";
import { topBarSearch } from "./modules/topBarSearch";
import { c_slider } from "./modules/c_slider";
import { c_gradient } from "./modules/c_gradient";
import { hide_elems } from "./modules/hide_elems";
import { eventList } from "./modules/Event/list";

initToggles();
menusAction();
utilities.cookies();
topBarSearch();
eventList();
c_slider();
c_gradient();
hide_elems();

