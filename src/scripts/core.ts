// Crew Commune — shared client script for every page (bundled and minified by Astro/Vite).
import { initMedia } from "./media";
import { initShell } from "./shell";
import { initFx } from "./fx";

initMedia();
initFx();      // splits text and sets initial states before the intro hands over
initShell();   // runs the intro / page transition, then fires the "start" hook
