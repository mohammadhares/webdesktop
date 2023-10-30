import { Provider } from 'react-redux';
import AppRoutes from '../routes/AppRoutes';
import store from './../app/store';

const App = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default App;
