import VirtualReality from './state/virtual-reality/store'
import Monopods from './state/monopods/store'
import ActionCameras from './state/action-cameras/store'
import FitnessTrackers from './state/fitness-trackers/store'
import Smartwatch from './state/smartwatch/store'
import Quadcopters from './state/quadcopters/store'

export default {
	cart: [],
	cartCount: 0,
	comparison: [],
	cartComparison: 0,
	catalog: {
		VirtualReality,
		Monopods,
		ActionCameras,
		FitnessTrackers,
		Smartwatch,
		Quadcopters
	}
}
