// Icons.vue

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faAngleLeft,
    faAngleRight,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft);
library.add(faAngleRight);
library.add(faLocationDot);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
