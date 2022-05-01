import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

// styles
import './assets/scss/styles.scss';

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
	faArrowRotateRight as faArrowRotateRightSolid,
	faPause as faPauseSolid,
	faBackwardStep as faBackwardStepSolid,
	faForwardStep as faForwardStepSolid,
	faChevronRight as faChevronRightSolid,
	faChevronLeft as faChevronLeftSolid,
	faPlus as faPlusSolid,
	faPlay as faPlaySolid,
} from '@fortawesome/free-solid-svg-icons';

import {} from '@fortawesome/free-regular-svg-icons';

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(
	faArrowRotateRightSolid,
	faPauseSolid,
	faBackwardStepSolid,
	faForwardStepSolid,
	faChevronRightSolid,
	faChevronLeftSolid,
	faPlusSolid,
	faPlusSolid,
	faPlaySolid
);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: function (h) {
		return h(App);
	},
}).$mount('#app');
