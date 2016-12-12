import {Navigation} from 'react-native-navigation';
import FirstScene from './FirstScene';
import SecondScene from './SecondScene';
import LeftScene from './LeftScene';
import RightScene from './RightScene';
import ThirdScene from './ThirdScene';
import CameraPicture from './CameraPicture';
import IconExample from './IconExample';
import ImagePickerExample from './ImagePickerExample';

export function registerScenes() {
    Navigation.registerComponent('Scene.FirstScene', ()=> FirstScene);
    Navigation.registerComponent('Scene.SecondScene', ()=> SecondScene);
    Navigation.registerComponent('Scene.LeftScene', ()=> LeftScene);
    Navigation.registerComponent('Scene.RightScene', ()=> RightScene);
    Navigation.registerComponent('Scene.ThirdScene', ()=> ThirdScene);
    Navigation.registerComponent('Scene.Picture', ()=> ImagePickerExample);
    Navigation.registerComponent('Scene.Icon', ()=> IconExample);
    Navigation.registerComponent('Scene.Camera', ()=> CameraPicture);
}
