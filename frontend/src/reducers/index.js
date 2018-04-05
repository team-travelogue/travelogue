import { combineReducers } from 'redux';

import imageLandmarks from './imageLandmarks';
import imageMetadata from './imageMetadata';
import map from './map';

import uploaderImages from './uploadImages';
import uploaderImagesUrl from './uploaderImagesUrl';
import nextLocation from './nextLocation';
import user from './user';
export default combineReducers({
	imageLandmarks,
	imageMetadata,
	map,
	uploaderImages,
	uploaderImagesUrl,
	nextLocation,
	user,
});
