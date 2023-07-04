import { publicRoutes } from './Router';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import DefaultLayout from './compornent/layout/DefaultLayout';
function App() {
    return (
        <Routers>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.compornent;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Routers>
    );
}

export default App;
