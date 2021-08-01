import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ListView, DetailView } from './Transactions';

const AppRouter = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <ListView />
            </Route>
            <Route path="/:accountNumber/details">    
                <DetailView />
            </Route>
        </Switch>
    </BrowserRouter>;
}

export default AppRouter;