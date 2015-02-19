import { PayloadSources } from '../config/constants';
import { Dispatcher } from 'flux';
import assign from 'object-assign';

export default assign(new Dispatcher(), {

	/**
	 * @param {object} action The details of the action, including the action's
	 * type and additional data coming from the server.
	 */
	handleServerAction(action) {
		var payload = {
			source: PayloadSources.SERVER_ACTION,
			action: action
		};
		this.dispatch(payload);
	},

	/**
	 * @param {object} action The details of the action, including the action's
	 * type and additional data coming from the view.
	 */
	handleViewAction(action) {
		var payload = {
			source: PayloadSources.VIEW_ACTION,
			action: action
		};
		this.dispatch(payload);
	}

});