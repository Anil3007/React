# React Learning

# parcel
- Dev build
- Local Server
- HMR = Hot Module Replacement
- Uses file watching Algorithm - written in c++
- Caching - Faster builds
- Image Optimization
- Minification(for production build)
- Building
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error handling
- HTTPS
- Tree Shacking - remove unused code
- Different Dev and prod bundles

/**Package.json
* Node provides the package.json file by prompting us with a few questions. The command to initialize it is as follows:
* npm init

React
* Install react using below command
* npm install react
* npm install react-dom
*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path"

- Named Export/Import

export const Component;
import {Component} from "path"


# React Hooks
(Normal JS utility functions)
- useState()
- useEffect()