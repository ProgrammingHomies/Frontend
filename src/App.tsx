import createRoutes from "./etc/routes";
import { setAxiosConfig } from "./etc/axios";
import QueryProvider from "./providers/QueryProvider";

function App() {
  const routes = createRoutes();
  setAxiosConfig();
  
  return (
    <QueryProvider>
      <div className='flex flex-col items-center w-screen h-screen bg-white dark:bg-gray-800 overflow-hidden'>
        {routes}
      </div>
    </QueryProvider>
  );
}

export default App;
