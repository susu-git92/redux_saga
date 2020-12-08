import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

//프로젝트 스토어 생성 부분에 툴을 인식할 수 있도록 아래 소스를 추가한다.!
const store = compose (
  window.devToolsExtension && window.dexToolsExtension(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;


